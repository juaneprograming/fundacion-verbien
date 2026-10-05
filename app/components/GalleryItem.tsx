"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface GalleryItemProps {
    src: string;
    alt: string;
    index: number;
    className?: string;
}

export default function GalleryItem({
    src,
    alt,
    index,
    className = "",
}: GalleryItemProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [12, -12]);

    return (
        <motion.div
            ref={ref}
            className={`group relative overflow-hidden rounded-3xl ${className}`}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {/* Movimiento sutil de la imagen */}
            <motion.div
                style={{ y }}
                className="absolute -inset-y-3 inset-x-0"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/50 via-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-90" />

            {/* Número */}
            <div className="absolute bottom-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-[#079DD9] shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:bg-[#079DD9] group-hover:text-white">
                0{index + 1}
            </div>

            {/* Texto que aparece al pasar el mouse */}
            <div className="absolute bottom-4 right-4 translate-y-3 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-[#252525] opacity-0 shadow-sm backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Conoce nuestra labor →
            </div>
        </motion.div>
    );
}