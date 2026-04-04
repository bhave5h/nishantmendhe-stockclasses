import { Metadata } from 'next';
import { motion } from 'framer-motion';
import BlogCard from '@/components/ui/BlogCard';
import { blogsData } from '@/lib/data';
import content from '@/data/content.json';

export const metadata: Metadata = {
    title: `Blog | ${content.siteMeta.title}`,
    description: 'Read our latest articles on stock market trading, swing trading strategies, and technical analysis.',
    keywords: 'stock market blog, trading strategies, swing trading, technical analysis, Nishant Mendhe blog',
    openGraph: {
        title: `Blog | ${content.siteMeta.title}`,
        description: 'Read our latest articles on stock market trading, swing trading strategies, and technical analysis.',
        url: '/blogs',
        type: 'website',
    },
    twitter: {
        card: "summary_large_image",
        title: `Blog | ${content.siteMeta.title}`,
        description: 'Read our latest articles on stock market trading, swing trading strategies, and technical analysis.',
    }
};

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-white pt-20 pb-24">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-3 text-neutral-800 leading-[1.1]">
                        Blogs
                    </h1>
                    <p className="text-md md:text-[18px] text-neutral-500 font-bold tracking-wide">
                        Expert articles and guides to help you master the financial markets.
                    </p>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pl-10 pr-10 gap-8 max-w-5xl mx-auto">
                    {blogsData.map((blog: any, index: number) => (
                        <div key={blog.id} className="h-full">
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
                
                {blogsData.length === 0 && (
                    <div className="text-center py-20 text-neutral-500">
                        <p className="text-xl">New articles coming soon.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
