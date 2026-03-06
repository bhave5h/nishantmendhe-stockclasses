"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    message: z.string().min(10, "Message must be at least 10 characters long."),
});

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log(values);
        setIsSubmitting(false);
        setIsSuccess(true);
        form.reset();

        // Reset success message after 5 seconds
        setTimeout(() => {
            setIsSuccess(false);
        }, 5000);
    }

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 text-green-800 p-6 rounded-2xl border border-green-200 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
            >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for reaching out. Our team will get back to you shortly.</p>
                <Button
                    variant="outline"
                    className="mt-8 bg-white border-green-200 text-green-700 hover:bg-green-50"
                    onClick={() => setIsSuccess(false)}
                >
                    Send another message
                </Button>
            </motion.div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-neutral-700">Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" className="bg-white border-neutral-200 focus-visible:ring-blue-500 rounded-xl h-12" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-neutral-700">Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="john@example.com" type="email" className="bg-white border-neutral-200 focus-visible:ring-blue-500 rounded-xl h-12" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500 text-xs" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-neutral-700">Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="+91 9876543210" type="tel" className="bg-white border-neutral-200 focus-visible:ring-blue-500 rounded-xl h-12" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500 text-xs" />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-neutral-700">Your Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="How can we help you achieve your trading goals?"
                                    className="bg-white border-neutral-200 focus-visible:ring-blue-500 rounded-xl min-h-[150px] resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-xl bg-black hover:bg-neutral-800 text-white font-medium text-lg transition-all shadow-md hover:shadow-xl hover:shadow-black/10 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <div className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </div>
                    ) : (
                        "Send Message"
                    )}
                </Button>
            </form>
        </Form>
    );
}
