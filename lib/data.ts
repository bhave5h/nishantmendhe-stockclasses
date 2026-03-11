import content from "@/data/content.json";

export const coursesData = content.courses.map((course) => {
    // If the data doesn't provide level/levelColor specifically, apply fallbacks
    return {
        ...course,
        image: course.image || "/Images/courses/c1.webp",
        level: course.level || 'All Levels',
        levelColor: course.levelColor || 'bg-neutral-100 text-neutral-700',
    };
});
