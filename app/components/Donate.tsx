import Reveal from "./Reveal";

export default function Donate() {
    return (
        <section
            id="donar"
            className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
        >
            {/* Decoraciones */}
            <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#079DD9]/10 blur-3xl" />

            <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#F27B35]/10 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
                <Reveal>
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-[#079DD9] px-6 py-14 text-center text-white shadow-2xl shadow-[#079DD9]/15 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                        {/* Formas decorativas */}
                        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10" />

                        <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[40px] border-[#F27B35]/30" />

                        <div className="relative mx-auto max-w-3xl">
                            {/* Etiqueta */}
                            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                                <span className="h-2 w-2 rounded-full bg-[#F27B35]" />
                                Tu ayuda importa
                            </span>

                            {/* Título */}
                            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                                La luz también se{" "}
                                <span className="text-[#F2A477]">comparte.</span>
                            </h2>

                            {/* Texto */}
                            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                                Con tu apoyo podemos seguir construyendo oportunidades y
                                contribuyendo al bienestar y la salud visual de más personas.
                            </p>

                            {/* CTA */}
                            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <a
                                    href="#"
                                    className="group inline-flex min-w-[190px] items-center justify-center gap-2 rounded-full bg-[#F27B35] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e96d28] hover:shadow-xl"
                                >
                                    Quiero ayudar
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>

                                <a
                                    href="#nosotros"
                                    className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                                >
                                    Conoce nuestra labor
                                </a>
                            </div>

                            {/* Frase */}
                            <div className="mt-10 flex items-center justify-center gap-4">
                                <span className="h-px w-12 bg-white/20 sm:w-20" />

                                <p className="text-sm font-medium italic text-white/60">
                                    La luz de tus ojos
                                </p>

                                <span className="h-px w-12 bg-white/20 sm:w-20" />
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}