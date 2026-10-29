import Reveal from "./Reveal";
import GalleryItem from "./GalleryItem";

const gallery = [
    {
        src: "/images/gallery/1.jpeg",
        alt: "Actividades de la Fundación VerBien",
        className: "gallery-featured",
    },
    {
        src: "/images/gallery/2.jpeg",
        alt: "Jornada comunitaria de la Fundación VerBien",
        className: "gallery-top",
    },
    {
        src: "/images/gallery/3.jpeg",
        alt: "Actividades de bienestar comunitario",
        className: "gallery-middle",
    },
    {
        src: "/images/gallery/4.jpeg",
        alt: "Acciones sociales de la Fundación VerBien",
        className: "gallery-bottom-left",
    },
    {
        src: "/images/gallery/img-3.jpeg",
        alt: "Comunidad beneficiada por la Fundación VerBien",
        className: "gallery-bottom-right",
    },
];

const values = [
    {
        icon: "✦",
        title: "Compromiso",
        text: "Trabajamos con dedicación para generar un impacto positivo en nuestra comunidad.",
        color: "#079DD9",
    },
    {
        icon: "♥",
        title: "Solidaridad",
        text: "Creemos en el poder de ayudar, acompañar y construir oportunidades para otros.",
        color: "#F27B35",
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
                <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Texto */}
                    <Reveal direction="left">
                        <div className="flex h-full flex-col justify-center">
                            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#079DD9] shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-[#F27B35]" />
                                Conócenos
                            </span>

                            <h2 className="text-3xl font-bold leading-tight text-[#252525] sm:text-4xl lg:text-5xl">
                                Una labor que busca{" "}
                                <span className="text-[#079DD9]">
                                    transformar vidas
                                </span>
                            </h2>

                            <p className="mt-5 text-base leading-7 text-[#4A4A4A] sm:text-lg sm:leading-8">
                                En Fundación VerBien trabajamos para contribuir
                                al bienestar y la salud visual, creando
                                oportunidades para que más personas disfruten de
                                una mejor calidad de vida.
                            </p>

                            <div className="my-8 h-px w-full bg-[#252525]/10" />

                            <h3 className="text-xl font-semibold text-[#252525] sm:text-2xl">
                                Nuestra razón de ser
                            </h3>

                            <p className="mt-3 text-base leading-7 text-[#4A4A4A]">
                                Creemos que cuidar la salud visual también
                                significa abrir nuevas posibilidades. Por eso
                                generamos bienestar y acompañamos a quienes más
                                lo necesitan.
                            </p>

                            <div className="mt-7 grid gap-4 sm:grid-cols-2">
                                {values.map((value) => (
                                    <div
                                        key={value.title}
                                        className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <div
                                            className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                                            style={{
                                                backgroundColor: `${value.color}1A`,
                                            }}
                                        >
                                            <span
                                                className="text-lg"
                                                style={{ color: value.color }}
                                            >
                                                {value.icon}
                                            </span>
                                        </div>

                                        <h4 className="font-semibold text-[#252525]">
                                            {value.title}
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-[#4A4A4A]">
                                            {value.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    {/* Galería */}
                    <Reveal direction="right" delay={0.15}>
                        <div className="grid h-full auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:auto-rows-fr lg:grid-rows-2 lg:min-h-[480px]">
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