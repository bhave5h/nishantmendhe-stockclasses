import { coursesData } from "@/lib/data";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const course = coursesData.find((c) => c.slug === resolvedParams.slug || c.id === resolvedParams.slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.title} | Nishant Mendhe`,
    description: course.description || course.fullDescription,
    openGraph: {
      title: course.title,
      description: course.description || course.fullDescription,
      images: [
        {
          url: course.image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description || course.fullDescription,
      images: [course.image],
    },
  };
}

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
