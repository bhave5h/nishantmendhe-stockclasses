import { Metadata } from 'next';
import CoursesSection from '@/components/sections/Courses';
import content from '@/data/content.json';

export const metadata: Metadata = {
    title: `Stock Market Courses in Maharashtra | ${content.siteMeta.title}`,
    description: 'Explore our comprehensive range of stock market training courses in Nagpur, Maharashtra. Learn swing trading, technical analysis, and market strategies from experts.',
    keywords: 'stock market courses Maharashtra, trading institute Nagpur, swing trading classes, technical analysis courses',
    openGraph: {
        title: `Stock Market Courses in Maharashtra | ${content.siteMeta.title}`,
        description: 'Explore our comprehensive range of stock market training courses in Nagpur, Maharashtra. Learn swing trading, technical analysis, and market strategies from experts.',
        url: '/courses',
        type: 'website',
    },
};

export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-white pt-20 pb-12">

            
            {/* Reuse the existing Courses section component but without its native padding if possible, 
                actually it has py-10 md:py-15. That's fine. */}
            <CoursesSection />
        </main>
    );
}
