import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata, ResolvingMetadata } from 'next';
import { blogsData } from '@/lib/data';
import content from '@/data/content.json';

interface Props {
  params: { slug: string }
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const blog = blogsData.find((b: any) => b.slug === slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    }
  }

  return {
    title: `${blog.title} | ${content.siteMeta.title}`,
    description: blog.description,
    keywords: blog.tags?.join(', ') || content.siteMeta.keywords,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `/blogs/${blog.slug}`,
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author],
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${blog.slug}`
    }
  }
}

export default async function BlogDetails(props: Props) {
    const params = await props.params;
    const slug = params.slug;
    const blog = blogsData.find((b: any) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": blog.title,
      "image": [
        blog.image
       ],
      "datePublished": blog.date,
      "author": [{
          "@type": "Person",
          "name": blog.author,
          "url": process.env.NEXT_PUBLIC_SITE_URL || "https://www.nishantmendhe.in"
        }]
    };

    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <article className="max-w-[800px] mx-auto px-6 md:px-12">
                <header className="mb-10 text-center">
                    <div className="mb-6 flex justify-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold tracking-wide bg-neutral-100 text-neutral-800">
                            {blog.topic}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#0F172A] leading-tight">
                        {blog.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-neutral-500 font-medium">
                        <span>{blog.author}</span>
                        <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                        <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                </header>

                <div className="relative w-full aspect-[16/9] mb-12 rounded-[24px] overflow-hidden shadow-lg border border-neutral-100">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 800px"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="prose prose-lg md:prose-xl prose-neutral max-w-none text-neutral-700 leading-relaxed">
                    {/* Render markdown line breaks for now, usually you'd use a markdown parser library like react-markdown */}
                    {blog.content.split('\n').map((paragraph: string, index: number) => {
                        if (paragraph.startsWith('### ')) {
                            return <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-[#0F172A]">{paragraph.replace('### ', '')}</h3>
                        }
                        if (paragraph.startsWith('## ')) {
                            return <h2 key={index} className="text-3xl font-bold mt-10 mb-6 text-[#0F172A]">{paragraph.replace('## ', '')}</h2>
                        }
                        if (paragraph.trim() === '') return <br key={index} />;
                        
                        return <p key={index} className="mb-6">{paragraph}</p>;
                    })}
                </div>

                <div className="mt-16 pt-8 border-t border-neutral-200">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="flex gap-2">
                           {blog.tags?.map((tag: string) => (
                               <span key={tag} className="text-sm bg-neutral-100 text-neutral-600 px-3 py-1 rounded-md">#{tag}</span>
                           ))}
                        </div>
                        <Link href="/blogs" className="font-semibold text-[#0F172A] hover:text-neutral-500 transition-colors">
                            ← Back to all posts
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
