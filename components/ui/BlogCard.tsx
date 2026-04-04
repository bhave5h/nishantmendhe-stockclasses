import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
    blog: {
        slug: string;
        title: string;
        description: string;
        topic: string;
        date: string;
        author: string;
        image: string;
    };
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <div className="flex flex-col bg-white rounded-[24px] overflow-hidden border border-gray-300 shadow-[0px_4px_47px_22px_rgba(0,_0,_0,_0.1)] hover:shadow-[0px_4px_47px_-17px_rgba(0,_0,_0,_0.1)] transition-shadow duration-300 h-full">
            <Link href={`/blogs/${blog.slug}`} className="block relative w-full aspect-[4/3] overflow-hidden group">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/90 text-neutral-800 shadow-sm backdrop-blur-sm">
                        {blog.topic}
                    </span>
                </div>
            </Link>

            <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4 font-medium">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                    <span>{blog.author}</span>
                </div>

                <Link href={`/blogs/${blog.slug}`}>
                    <h3 className="text-[20px] font-bold text-[#0F172A] mb-3 leading-tight hover:text-neutral-600 transition-colors line-clamp-2">
                        {blog.title}
                    </h3>
                </Link>

                <p className="text-base text-neutral-500 font-medium leading-relaxed mb-6 flex-grow line-clamp-3">
                    {blog.description}
                </p>

                <div className="pt-4 border-t border-gray-100 mt-auto">
                    <Link 
                        href={`/blogs/${blog.slug}`} 
                        className="flex items-center gap-2 text-sm font-bold text-[#0F172A] hover:text-neutral-600 transition-colors group w-max"
                    >
                        Read Article
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
