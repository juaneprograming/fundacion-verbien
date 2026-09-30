"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "left" | "right";
    className?: string;
}

export default function Reveal({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: RevealProps) {
    const offset = {
        up: { y: 35, x: 0 },
        left: { y: 0, x: -35 },
        right: { y: 0, x: 35 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...offset[direction],
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.7,
                delay,
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}