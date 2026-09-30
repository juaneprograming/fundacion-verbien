"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Misión", href: "#mision" },
    { label: "Visión", href: "#vision" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-md">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                <a
                    href="#inicio"
                    className="text-xl font-bold text-[#079DD9]"
                    onClick={() => setIsOpen(false)}
                >
                    Fundación <span className="text-[#F27B35]">VerBien</span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-gray-600 transition-colors hover:text-[#079DD9]"
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href="#donar"
                        className="rounded-full bg-[#F27B35] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#e96d27]"
                    >
                        Donar
                    </a>
                </div>

                <button
                    type="button"
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    className="rounded-lg p-2 text-gray-700 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {isOpen && (
                <div className="border-t border-gray-100 bg-white px-6 py-5 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="font-medium text-gray-700 hover:text-[#079DD9]"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="#donar"
                            className="w-full rounded-full bg-[#F27B35] px-6 py-3 text-center font-semibold text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Donar
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}