
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const footerLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Misión", href: "#mision" },
    { label: "Visión", href: "#vision" },
    { label: "Servicios", href: "#servicios" },
    { label: "Donaciones", href: "#donar" },
];

export default function Footer() {
    return (
        <footer className="bg-[#252525] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
                    {/* Marca */}
                    <div className="max-w-sm">
                        <a href="#inicio" className="inline-block">
                            <div className="rounded-2xl bg-white px-5 py-4">
                                <Image
                                    src="/images/gallery/logo_1.png"
                                    alt="Fundación Ver Bien"
                                    width={240}
                                    height={130}
                                    className="h-auto w-48 object-contain"
                                />
                            </div>
                        </a>

                        <p className="mt-6 text-sm leading-7 text-white/65">
                            Trabajamos para contribuir al bienestar y la salud
                            visual, generando oportunidades para quienes más
                            lo necesitan.
                        </p>

                        <div className="mt-7 flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/fundaverbien/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram de Fundación Ver Bien"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F27B35]"
                            >
                                <FaInstagram size={17} />
                            </a>
                        </div>
                    </div>

                    {/* Navegación */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F2A477]">
                            Navegación
                        </h3>

                        <ul className="mt-6 space-y-4">
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
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F2A477]">
                            Contacto
                        </h3>

                        <div className="mt-6 space-y-5 text-sm text-white/65">
                            <div>
                                <p className="mb-1 text-white">Correo electrónico</p>
                                <a
                                    href="mailto:fundaverbien@gmail.com"
                                    className="transition-colors hover:text-white"
                                >
                                    fundaverbien@gmail.com
                                </a>
                            </div>

                            <div>
                                <p className="mb-1 text-white">WhatsApp</p>
                                <p>+57 3188681400</p>
                            </div>

                            <div>
                                <p className="mb-1 text-white">Ubicación</p>
                                <p>Próximamente</p>
                            </div>
                        </div>
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
