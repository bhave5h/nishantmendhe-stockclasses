import { MetadataRoute } from 'next';
import { coursesData, blogsData } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nishantmendhe.in';

    // Base static routes
    const routes = [
        '',
        '/about',
        '/courses',
        '/blogs',
        '/contact',
        '/webinar',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic course routes
    const courseRoutes = coursesData.map((course) => ({
        url: `${baseUrl}/courses/${course.slug || course.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Dynamic blog routes
    const blogRoutes = blogsData.map((blog: any) => ({
        url: `${baseUrl}/blogs/${blog.slug}`,
        lastModified: new Date(blog.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...courseRoutes, ...blogRoutes];
}
