
"use client";

import { motion, useReducedMotion } from "motion/react";
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
    const shouldReduceMotion = useReducedMotion();

    const offset = {
        up: { y: 35, x: 0 },
        left: { y: 0, x: -35 },
        right: { y: 0, x: 35 },
    };

    // Respeta la preferencia del usuario por movimiento reducido.
    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

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
                amount: 0.1,
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
