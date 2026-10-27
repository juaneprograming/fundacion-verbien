
"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Misión", href: "#mision" },
    { label: "Visión", href: "#vision" },
    { label: "Servicios", href: "#servicios" },
];

const phoneNumber = "573188681400";

const message = encodeURIComponent(
    "Hola, quisiera conocer más información sobre la Fundación VerBien."
);

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    const menuTransition = reduceMotion
        ? { duration: 0 }
        : { duration: 0.28, ease: "easeOut" as const };

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100/80 bg-white/95 shadow-sm backdrop-blur-xl">
            <nav
                className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
                aria-label="Navegación principal"
            >
                <a
                    href="#inicio"
                    onClick={closeMenu}
                    className="text-lg font-extrabold tracking-tight text-[#079DD9] sm:text-xl"
                >
                    Fundación <span className="text-[#F27B35]">VerBien</span>
                </a>

                <div className="hidden items-center gap-6 md:flex lg:gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="relative py-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#079DD9]"
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-[#079DD9] transition-colors hover:text-[#F27B35]"
                    >
                        <FaWhatsapp className="text-lg" />
                        WhatsApp
                    </a>

                    <a
                        href="#donar"
                        className="rounded-full bg-[#F27B35] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#e96d27] hover:shadow-md"
                    >
                        Donar
                    </a>
                </div>

                <button
                    type="button"
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-700 transition-colors hover:bg-[#079DD9]/10 hover:text-[#079DD9] md:hidden"
                    onClick={() => setIsOpen((open) => !open)}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={isOpen ? "close" : "open"}
                            initial={reduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.8 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={reduceMotion ? undefined : { opacity: 0, rotate: 45, scale: 0.8 }}
                            transition={{ duration: reduceMotion ? 0 : 0.16 }}
                            className="flex"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.span>
                    </AnimatePresence>
                </button>
            </nav>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Cerrar menú"
                            className="fixed inset-0 top-[72px] cursor-default bg-[#252525]/30 backdrop-blur-[2px] md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={menuTransition}
                            onClick={closeMenu}
                        />

                        <motion.div
                            id="mobile-navigation"
                            className="absolute inset-x-0 top-full overflow-hidden border-t border-gray-100 bg-white shadow-xl md:hidden"
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: -12, height: 0 }
                            }
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={
                                reduceMotion
                                    ? { opacity: 0 }
                                    : { opacity: 0, y: -8, height: 0 }
                            }
                            transition={menuTransition}
                        >
                            <div className="mx-auto max-h-[calc(100dvh-72px)] max-w-lg overflow-y-auto px-5 py-5">
                                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                                    Explora la fundación
                                </p>

                                <div className="flex flex-col gap-1">
                                    {navItems.map((item, index) => (
                                        <motion.a
                                            key={item.href}
                                            href={item.href}
                                            onClick={closeMenu}
                                            initial={
                                                reduceMotion
                                                    ? false
                                                    : { opacity: 0, x: -10 }
                                            }
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: reduceMotion ? 0 : 0.2,
                                                delay: reduceMotion ? 0 : index * 0.045,
                                            }}
                                            className="flex items-center justify-between rounded-xl px-3 py-3.5 font-medium text-gray-700 transition-colors hover:bg-[#079DD9]/5 hover:text-[#079DD9]"
                                        >
                                            {item.label}
                                            <span className="text-gray-300">→</span>
                                        </motion.a>
                                    ))}
                                </div>

                                <div className="mt-4 grid gap-3 border-t border-gray-100 pt-4">
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={closeMenu}
                                        className="flex items-center justify-center gap-2 rounded-full border border-[#079DD9]/30 px-5 py-3.5 font-semibold text-[#079DD9] transition-colors hover:bg-[#079DD9]/5"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                        Escríbenos por WhatsApp
                                    </a>

                                    <a
                                        href="#donar"
                                        onClick={closeMenu}
                                        className="rounded-full bg-[#F27B35] px-5 py-3.5 text-center font-semibold text-white transition-colors hover:bg-[#e96d27]"
                                    >
                                        Quiero ayudar
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
