import Image from "next/image";
import Reveal from "./Reveal";
import GalleryItem from "./GalleryItem";

const gallery = [
    {
        src: "/images/gallery/img-1.jpeg",
        alt: "Actividades de la Fundación VerBien",
        className: "md:row-span-2",
    },
    {
        src: "/images/gallery/img-2.jpeg",
        alt: "Labor social de la Fundación VerBien",
        className: "",
    },
    {
        src: "/images/gallery/img-3.jpeg",
        alt: "Jornada de salud visual",
        className: "",
    },
    {
        src: "/images/gallery/img-4.jpeg",
        alt: "Comunidad y bienestar visual",
        className: "md:col-span-2",
    },
];

export default function About() {
    return (
        <section
            id="nosotros"
            className="relative overflow-hidden bg-[#F2F2F2] py-24 sm:py-28 lg:py-32"
        >
            {/* Decoración */}
            <div className="pointer-events-none absolute -right-24 top-20 h-64 w-64 rounded-full bg-[#04B2D9]/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-20 h-64 w-64 rounded-full bg-[#F27B35]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                {/* Encabezado */}
                <Reveal>
                    <div className="mb-10 max-w-2xl">
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#079DD9] shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-[#F27B35]" />
                            Conócenos
                        </span>

                        <h2 className="text-3xl font-bold leading-tight text-[#252525] sm:text-4xl lg:text-5xl">
                            Una labor que busca{" "}
                            <span className="text-[#079DD9]">transformar vidas</span>
                        </h2>

                        <p className="mt-5 text-base leading-7 text-[#4A4A4A] sm:text-lg sm:leading-8">
                            En Fundación VerBien trabajamos para contribuir al bienestar y
                            la salud visual, creando oportunidades para que más personas
                            puedan disfrutar de una mejor calidad de vida.
                        </p>
                    </div>
                </Reveal>

                {/* Contenido principal */}
                <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    {/* Texto */}
                    <Reveal direction="left">
                        <div>
                            <h3 className="text-2xl font-semibold text-[#252525] sm:text-3xl">
                                Nuestra razón de ser
                            </h3>

                            <p className="mt-5 leading-7 text-[#4A4A4A]">
                                Creemos que cuidar la salud visual también significa abrir
                                nuevas posibilidades. Por eso, nuestra labor está orientada a
                                generar bienestar y acompañar a quienes más lo necesitan.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                {/* Compromiso */}
                                <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#079DD9]/10">
                                        <span className="text-lg text-[#079DD9]">✦</span>
                                    </div>

                                    <h4 className="font-semibold text-[#252525]">
                                        Compromiso
                                    </h4>

                                    <p className="mt-2 text-sm leading-6 text-[#4A4A4A]">
                                        Trabajamos con dedicación para generar un impacto positivo
                                        en nuestra comunidad.
                                    </p>
                                </div>

                                {/* Solidaridad */}
                                <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F27B35]/10">
                                        <span className="text-lg text-[#F27B35]">♥</span>
                                    </div>

                                    <h4 className="font-semibold text-[#252525]">
                                        Solidaridad
                                    </h4>

                                    <p className="mt-2 text-sm leading-6 text-[#4A4A4A]">
                                        Creemos en el poder de ayudar, acompañar y construir
                                        oportunidades para otros.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Galería */}
                    <Reveal direction="right" delay={0.15}>
                        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4">
                            {gallery.map((image, index) => (
                                <GalleryItem
                                    key={image.src}
                                    src={image.src}
                                    alt={image.alt}
                                    index={index}
                                    className={image.className}
                                />
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}