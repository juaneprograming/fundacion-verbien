import Image from "next/image";
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";

const footerLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Misión", href: "#mision" },
    { label: "Visión", href: "#vision" },
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
                                    src="/images/logo-verbien.png"
                                    alt="Fundación VerBien"
                                    width={240}
                                    height={130}
                                    className="h-auto w-48 object-contain"
                                />
                            </div>
                        </a>

                        <p className="mt-6 text-sm leading-7 text-white/65">
                            Trabajamos para generar oportunidades y contribuir al
                            bienestar de las personas, construyendo juntos una sociedad
                            con mayores posibilidades.
                        </p>

                        {/* Redes */}
                        <div className="mt-7 flex items-center gap-3">

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#079DD9]"
                            >
                                <FaFacebookF size={15} />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F27B35]"
                            >
                                <FaInstagram size={17} />
                            </a>

                            <a
                                href="#"
                                aria-label="WhatsApp"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366]"
                            >
                                <FaWhatsapp size={18} />
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
                                <p className="mb-1 text-white">
                                    WhatsApp
                                </p>
                                <p>
                                    Próximamente
                                </p>
                            </div>

                            <div>
                                <p className="mb-1 text-white">
                                    Correo electrónico
                                </p>
                                <p>
                                    Próximamente
                                </p>
                            </div>

                            <div>
                                <p className="mb-1 text-white">
                                    Ubicación
                                </p>
                                <p>
                                    Próximamente
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Separador */}
                <div className="my-12 h-px bg-white/10" />

                {/* Bottom */}
                <div className="flex flex-col gap-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">

                    <p>
                        © {new Date().getFullYear()} Fundación VerBien. Todos los
                        derechos reservados.
                    </p>

                    <p>
                        La luz de tus ojos
                    </p>

                </div>

            </div>
        </footer>
    );
}