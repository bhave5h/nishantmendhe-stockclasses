'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coursesData } from '@/lib/data';



export default function CourseDetails() {
    const params = useParams();
    const slug = params?.slug as string;
    const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

    const course = coursesData.find(c => c.slug === slug || c.id === slug);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
            </div>
        );
    }

    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);

            document.body.appendChild(script);
        });
    };

    const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const phone = formData.get('phone') as string;

        // Extract numbers from price string (e.g., "₹499" -> 499)
        const amountStr = course.price.toString().replace(/[^0-9.]/g, '');
        const amount = parseFloat(amountStr) || 0;

        if (amount <= 0) {
            alert("Invalid amount format or zero amount.");
            return;
        }

        const res = await initializeRazorpay();

        if (!res) {
          alert("Razorpay SDK Failed to load. Check your connection.");
          return;
        }

        // Fetch Order ID from Next.js API
        const data = await fetch("/api/razorpay", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount })
        }).then((t) => t.json());

        if (data.error) {
            alert("Order generation failed: " + data.error);
            return;
        }

        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, 
          name: "Nishant Mendhe",
          currency: data.currency,
          amount: data.amount,
          order_id: data.id,
          description: `Enrollment for ${course.title}`,
          image: "/Images/Logos/Icon.png",
          prefill: {
              name: name,
              contact: phone,
          },
          handler: async function (response: any) {
            const req = {
              orderCreationId: data.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };

            const result = await fetch("/api/verify", {
              method: "POST",
              body: JSON.stringify(req),
              headers: { "Content-Type": "application/json" },
            });
            const resData = await result.json();
            
            if (resData.isOk) {
              alert(resData.message);
            } else {
              alert(resData.message);
            }
          },
          theme: {
            color: "#0F172A",
          },
        };

        const paymentObject = new (window as any).Razorpay(options);
        paymentObject.open();
    };

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">

            {/* Hero Section of Course */}
            <section className="relative w-full bg-white text-[#0F172A] pt-32 pb-20 md:pt-25 md:pb-32 border-b border-gray-100">
                <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold tracking-wide mb-6 ${course.level === 'Advanced' ? 'bg-[#0F172A] text-white' : 'bg-gray-100 text-[#0F172A]'}`}>
                            {course.level}
                        </span>
                        <h1 className="text-[40px] md:text-[56px] font-bold leading-tight mb-6">
                            {course.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl">
                            {course.description}
                        </p>


                        <div className="mt-10 flex flex-wrap items-center gap-6">
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-sm">Duration</span>
                                <span className="font-bold text-xl">{course.duration || 'TBD'}</span>
                            </div>
                            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-sm">Modules</span>
                                <span className="font-bold text-xl">{course.modules || course.curriculum?.length || 0} Modules</span>
                            </div>
                            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-sm">Support</span>
                                <span className="font-bold text-xl">{course.support || 'Lifetime'}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl border border-gray-100"
                    >
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Course Details & Enrollment Form */}
            <section className="py-20 md:py-24 bg-[#f6f7f9]">
                <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-16">

                    {/* Detailed Info */}
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-bold mb-8">Course Overview</h2>
                        <div className="prose prose-lg text-gray-600 max-w-none">
                            {course.curriculum && (
                                <div className="mt-10">
                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Curriculum</h3>
                                    <div className="flex flex-col space-y-4">
                                        {course.curriculum.map((module: any, idx: number) => {
                                            const isOpen = openModuleIndex === idx;
                                            return (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
                                                >
                                                    <button
                                                        onClick={() => setOpenModuleIndex(isOpen ? null : idx)}
                                                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                                                    >
                                                        <span className="font-bold text-lg text-[#0F172A]">
                                                            {module.title}
                                                        </span>
                                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#0F172A]' : 'bg-gray-50 border border-gray-200 group-hover:bg-gray-100'}`}>
                                                            {isOpen ? (
                                                                <svg className="w-5 h-5 text-white transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                                </svg>
                                                            ) : (
                                                                <svg className="w-5 h-5 text-gray-500 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                    </button>
                                                    <AnimatePresence>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                            >
                                                                <div className="px-6 pb-6 text-gray-600 whitespace-pre-line leading-relaxed">
                                                                    {module.content}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                        <p className="mt-6 text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl">
                            {course.Note} <a href={course.Link} target="_blank" rel="noopener noreferrer" className="text-[#0F172A] font-bold underline">
                                Nishant Mendhe.graphy.com
                            </a>
                        </p>

                            <p className="mt-6 leading-relaxed text-lg md:text-xl text-gray-500">
                                Enrollment simply takes a few moments. Fill out the application form with your details, and you will be directed to our official WhatsApp channel to finalize your registration and payment manually with our team.
                            </p>
                        </div>
                    </div>

      

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 sticky top-24">
                            <div className="mb-8 pb-8 border-b border-gray-100">
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Enrollment Fee</p>
                                <p className="text-4xl font-bold text-[#0F172A]">{course.price}</p>
                            </div>

                            <h3 className="text-xl font-bold mb-6">Complete your enrollment</h3>

                            <form onSubmit={handlePayment} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-all" placeholder="+91 98765 43210" />
                                </div>

                                <button type="submit" className="w-full mt-4 bg-[#0F172A] hover:bg-black text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                    </svg>
                                    Pay Securely with Razorpay
                                </button>
                                <p className="text-xs text-center text-gray-500 mt-4 leading-relaxed">
                                    Your payments are completely secure and encrypted. Processed by Razorpay.
                                </p>
                            </form>

                        </div>
                    </div>

                </div>
            </section>

     

        </main>
    );
}
