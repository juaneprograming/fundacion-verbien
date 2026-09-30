"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const phoneNumber = "573000000000";

    const message = encodeURIComponent(
        "Hola, quisiera conocer más información sobre la Fundación VerBien."
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar a Fundación VerBien por WhatsApp"
            className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl sm:h-16 sm:w-16"
        >
            <FaWhatsapp className="text-3xl sm:text-4xl" />

            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#252525] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:block">
                Escríbenos por WhatsApp
            </span>
        </a>
    );
}