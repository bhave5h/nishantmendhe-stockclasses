import content from "@/data/content.json";

export const coursesData = content.courses.map((course, index) => {
    // Generate placeholder data for missing fields required by the user's new Course component
    const levelMap: Record<number, { level: string; levelColor: string }> = {
        0: { level: 'Advanced', levelColor: 'bg-indigo-100 text-indigo-700' },
        1: { level: 'Intermediate', levelColor: 'bg-emerald-100 text-emerald-700' },
        2: { level: 'Beginner', levelColor: 'bg-sky-100 text-sky-700' },
        3: { level: 'Expert', levelColor: 'bg-rose-100 text-rose-700' },
        4: { level: 'All Levels', levelColor: 'bg-amber-100 text-amber-700' },
    };

    const levelInfo = levelMap[index % 5];

    return {
        ...course,
        image: course.image || "/Images/courses/c1.webp",
        level: levelInfo.level,
        levelColor: levelInfo.levelColor,
    };
});
