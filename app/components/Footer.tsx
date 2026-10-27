import Image from "next/image";
import type { IconType } from "react-icons";
import {
    FaEnvelope,
    FaInstagram,
    FaMapMarkerAlt,
    FaWhatsapp,
} from "react-icons/fa";

const footerLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Misión", href: "#mision" },
    { label: "Visión", href: "#vision" },
    { label: "Servicios", href: "#servicios" },
    { label: "Donaciones", href: "#donar" },
];

const contactItems: {
    icon: IconType;
    label: string;
    value: string;
    href?: string;
    external?: boolean;
}[] = [
        {
            icon: FaEnvelope,
            label: "Correo electrónico",
            value: "fundaverbien@gmail.com",
            href: "mailto:fundaverbien@gmail.com",
        },
        {
            icon: FaWhatsapp,
            label: "WhatsApp",
            value: "+57 3188681400",
            href: "https://wa.me/573188681400",
            external: true,
        },
        {
            icon: FaInstagram,
            label: "Instagram",
            value: "@fundaverbien",
            href: "https://www.instagram.com/fundaverbien/",
            external: true,
        },
        {
            icon: FaMapMarkerAlt,
            label: "Ubicación",
            value: "Próximamente",
        },
    ];

const headingClass =
    "text-sm font-semibold uppercase tracking-[0.2em] text-[#F2A477]";

export default function Footer() {
    return (
        <footer className="bg-[#252525] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid items-start gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr] lg:gap-16">
                    {/* Marca */}
                    <div className="max-w-sm md:col-span-2 lg:col-span-1">
                        <a href="#inicio" className="inline-block">
                            <div className="rounded-2xl bg-white px-4 py-3">
                                <Image
                                    src="/images/gallery/logo_1.png"
                                    alt="Fundación Ver Bien"
                                    width={240}
                                    height={130}
                                    className="h-auto w-40 object-contain"
                                />
                            </div>
                        </a>

                        <p className="mt-6 text-sm leading-7 text-white/65">
                            Trabajamos para contribuir al bienestar y la salud
                            visual, generando oportunidades para quienes más
                            lo necesitan.
                        </p>
                    </div>

                    {/* Navegación */}
                    <div>
                        <h3 className={headingClass}>Navegación</h3>

                        <ul className="mt-6 space-y-3.5">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center text-sm text-white/65 transition-colors hover:text-white"
                                    >
                                        <span className="mr-2 h-px w-0 bg-[#F27B35] transition-all duration-300 group-hover:w-4" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h3 className={headingClass}>Contacto</h3>

                        <ul className="mt-6 space-y-4">
                            {contactItems.map((item) => {
                                const Icon = item.icon;

                                const content = (
                                    <>
                                        <span
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#F27B35] ${item.href
                                                    ? "transition-colors duration-300 group-hover:bg-[#F27B35] group-hover:text-white"
                                                    : ""
                                                }`}
                                        >
                                            <Icon size={16} aria-hidden="true" />
                                        </span>

                                        <span className="min-w-0 text-sm leading-5">
                                            <span className="block text-white">
                                                {item.label}
                                            </span>
                                            <span
                                                className={`block break-words text-white/65 ${item.href
                                                        ? "transition-colors group-hover:text-white"
                                                        : ""
                                                    }`}
                                            >
                                                {item.value}
                                            </span>
                                        </span>
                                    </>
                                );

                                return (
                                    <li key={item.label}>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                {...(item.external
                                                    ? {
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                    }
                                                    : {})}
                                                className="group flex items-center gap-3.5"
                                            >
                                                {content}
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-3.5">
                                                {content}
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="my-12 h-px bg-white/10" />

                <div className="flex flex-col gap-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Fundación Ver Bien.
                        Todos los derechos reservados.
                    </p>
                    <p>La luz de tus ojos</p>
                </div>
            </div>
        </footer>
    );
}