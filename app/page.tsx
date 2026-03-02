import content from "@/data/content.json";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center pt-32 pb-24 px-6 min-h-[80vh] bg-gradient-to-b from-neutral-900 to-black text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-sm text-neutral-300 mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            New Online Stock Market Classes
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 max-w-5xl text-balance bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-500">
            {content.about.heading}
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl text-balance">
            {content.siteMeta.description}
          </p>
          <div className="flex gap-4">
            <Link href="/#courses" className="bg-white text-black px-8 py-4 rounded-full font-medium inline-flex items-center hover:bg-neutral-200 hover:scale-105 transition-all">
              {content.ctas[0].text} <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-7xl mx-auto py-24 px-6 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">About the Institute</h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              {content.about.description}
            </p>
            <div className="flex gap-8">
              {content.about.stats.map(stat => (
                <div key={stat.label}>
                  <p className="text-4xl font-bold">{stat.value}</p>
                  <p className="text-sm text-neutral-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800">
            <h3 className="text-2xl font-semibold mb-6">{content.benefits.heading}</h3>
            <p className="text-neutral-400 mb-8">{content.benefits.description}</p>
            <ul className="space-y-4">
              {content.benefits.items.map(item => (
                <li key={item} className="flex items-center text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-blue-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="w-full max-w-7xl mx-auto py-24 px-6 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Core Programs</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Enhance your trading skills with our expertly designed courses.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.courses.map(course => (
            <Link key={course.slug} href={`/courses/${course.slug}`} className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 p-8 hover:bg-neutral-900 transition-all hover:-translate-y-1">
              <div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{course.title}</h3>
                <p className="text-sm text-neutral-400 line-clamp-4 leading-relaxed">{course.description}</p>
              </div>
              <div className="mt-8 flex items-center text-sm font-medium text-white">
                Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="w-full max-w-4xl mx-auto py-24 px-6 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-neutral-400">Got questions? We've got answers.</p>
        </div>
        <div className="space-y-4">
          {content.faqs.map((faq, idx) => (
            <div key={idx} className="border border-neutral-800 rounded-2xl p-6 bg-neutral-950">
              <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
