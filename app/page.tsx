import content from "@/data/content.json";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ExploreButton from "@/components/ui/ExploreButton";
import { FadeUp, FadeInOnLoad, StaggerContainer, StaggerItem, Counter } from "@/components/ui/motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden bg-white text-[#111111]">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-white min-h-[110vh] flex items-center">
        {/* Grid Lines Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-90 pointer-events-none"></div>

        {/* Soft Gradients Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[80%] bg-gradient-to-bl from-blue-200/40 via-blue-100/20 to-transparent blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[70%] bg-gradient-to-tr from-green-200/40 via-yellow-100/20 to-transparent blur-[120px] rounded-full"></div>
        </div>

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.4] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] mix-blend-overlay pointer-events-none" style={{ filter: 'contrast(120%) brightness(120%)' }}></div>

        <div className="max-w-7xl mx-auto w-full px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 pt-16 lg:pt-0 pb-10">
          {/* Left Column Text content */}
          <div className="flex flex-col items-start justify-center text-left w-full lg:w-[55%] z-10 shrink-0">
            <FadeInOnLoad delay={0.2} className="w-full">
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight mb-6 max-w-2xl text-[#111111] leading-[1.1]">
                {content.about.heading}
              </h1>
            </FadeInOnLoad>
            <FadeInOnLoad delay={0.3} className="w-full">
              <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-xl leading-relaxed">
                {content.siteMeta.description}
              </p>
            </FadeInOnLoad>
            <FadeInOnLoad delay={0.4} className="w-full">
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/#courses">
                  <ExploreButton />
                </Link>
              </div>
            </FadeInOnLoad>

            {/* Stats Block */}
            <FadeInOnLoad delay={0.5} className="w-full mt-2 md:mt-7">
              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-bold text-[#111111] mb-1">
                    <Counter to={10} duration={2} />
                  </span>
                  <span className="text-xs md:text-sm font-medium text-neutral-500 w-32 whitespace-normal leading-tight">Years Stock Market Experience</span>
                </div>
                <div className="flex flex-col pl-6 md:pl-10 border-l border-neutral-300">
                  <span className="text-3xl md:text-4xl font-bold text-[#111111] mb-1">
                    <Counter to={7} suffix="K+" duration={2} />
                  </span>
                  <span className="text-xs md:text-sm font-medium text-neutral-500 w-32 whitespace-normal leading-tight">Satisfied Customers</span>
                </div>
              </div>
            </FadeInOnLoad>
          </div>

          {/* Right Column Image Content */}
          <div className="hidden lg:flex absolute bottom-0 right-0 w-[50%] items-end justify-end">
            <FadeInOnLoad delay={0.4} className="relative flex items-end justify-end">
              <Image
                src="/images/hero.png"
                alt="Hero Character"
                width={800}
                height={800}
                className="object-contain object-bottom max-h-[90vh] drop-shadow-2xl pointer-events-none select-none"
                priority
              />
            </FadeInOnLoad>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-7xl mx-auto py-32 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp className="w-full">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#111111]">About the Institute</h2>
            <p className="text-neutral-500 text-lg leading-relaxed mb-10">
              {content.about.description}
            </p>
            <div className="flex gap-12">
              {content.about.stats.map(stat => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-5xl font-semibold text-[#111111]">{stat.value}</p>
                  <p className="text-sm font-medium text-neutral-400 mt-2 tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.2} className="w-full">
            <div className="bg-[#f5f5f7] rounded[2rem] md:rounded-[2.5rem] p-10 md:p-14 border border-neutral-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none"></div>
              <h3 className="text-2xl font-semibold mb-6 text-[#111111] relative z-10">{content.benefits.heading}</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed relative z-10">{content.benefits.description}</p>
              <ul className="space-y-4 relative z-10">
                {content.benefits.items.map(item => (
                  <li key={item} className="flex items-center text-neutral-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 mr-4 text-accent shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Featured Media Section */}
      <section className="w-full bg-white py-24 px-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#111111]">Inside the Training</h2>
            <p className="text-neutral-500 text-lg">See our high-performance trading setups.</p>
          </FadeUp>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeUp delay={0.1} className="w-full aspect-[4/3] relative rounded-[2rem] overflow-hidden border border-neutral-200 shadow-sm group">
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop"
              alt="Trading Platform Setup"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </FadeUp>
          <FadeUp delay={0.2} className="w-full aspect-[4/3] relative rounded-[2rem] overflow-hidden border border-neutral-200 shadow-sm group">
            <Image
              src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070&auto=format&fit=crop"
              alt="Live Market Analysis"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </FadeUp>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="w-full bg-[#f5f5f7] py-32 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#111111]">Our Core Programs</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto text-lg">Enhance your trading skills with our expertly designed courses.</p>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.courses.map(course => (
              <StaggerItem key={course.slug}>
                <Link href={`/courses/${course.slug}`} className="group h-full flex flex-col justify-between bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-neutral-200/50 border border-neutral-100 transition-all duration-300 transform hover:scale-[1.03]">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-[#111111] group-hover:text-accent transition-colors">{course.title}</h3>
                    <p className="text-neutral-500 line-clamp-4 leading-relaxed mb-6">{course.description}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-neutral-100 pt-6">
                    <span className="text-lg font-bold text-[#111111]">{course.price}</span>
                    <span className="flex items-center text-sm font-semibold text-accent">
                      View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="w-full max-w-3xl mx-auto py-32 px-6">
        <FadeUp className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#111111]">Frequently Asked Questions</h2>
          <p className="text-neutral-500 text-lg">Got questions? We've got answers.</p>
        </FadeUp>
        <StaggerContainer delayOrder={0.05} className="space-y-4">
          {content.faqs.map((faq, idx) => (
            <StaggerItem key={idx}>
              <div className="border border-neutral-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-[#111111]">{faq.question}</h3>
                <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
