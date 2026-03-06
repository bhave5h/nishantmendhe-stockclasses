"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
export const FadeUp = ({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.7,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom ease for smooth, elegant feel
                delay: delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const FadeInOnLoad = ({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                ease: [0.21, 0.47, 0.32, 0.98],
                delay: delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({
    children,
    delayOrder = 0.1,
    className = "",
}: {
    children: React.ReactNode;
    delayOrder?: number;
    className?: string;
}) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: delayOrder,
                    },
                },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.7,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    }
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const Counter = ({
    from = 0,
    to,
    duration = 2,
    suffix = "",
    prefix = ""
}: {
    from?: number,
    to: number,
    duration?: number,
    suffix?: string,
    prefix?: string
}) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => prefix + Math.round(latest) + suffix);

    useEffect(() => {
        const controls = animate(count, to, {
            duration: duration,
            ease: [0.21, 0.47, 0.32, 0.98]
        });
        return controls.stop;
    }, [count, to, duration]);

    return <motion.span>{rounded}</motion.span>;
};
