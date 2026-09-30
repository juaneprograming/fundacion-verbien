import Reveal from "./Reveal";  


export default function Donate() {
    return (
        <section
            id="donar"
            className="relative overflow-hidden bg-[#F2F2F2] py-24 lg:py-32"
        >
            {/* Decoraciones */}
            <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#079DD9]/10 blur-3xl" />

            <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#F27B35]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <Reveal>
                <div className="overflow-hidden rounded-[2.5rem] bg-[#079DD9] shadow-2xl shadow-[#079DD9]/20">

                    <div className="grid items-center lg:grid-cols-[1.2fr_0.8fr]">

                        {/* Contenido */}
                        <div className="relative p-8 sm:p-12 lg:p-16">

                            {/* Decoración */}
                            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />

                            <div className="relative">

                                <div className="mb-6 inline-flex items-center gap-3">
                                    <span className="h-1 w-10 rounded-full bg-[#F27B35]" />

                                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                                        Sé parte del cambio
                                    </span>
                                </div>

                                <h2 className="max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl">
                                    Tu apoyo puede{" "}
                                    <span className="text-[#F2A477]">
                                        transformar una vida
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
                                    Cada aporte puede convertirse en una oportunidad para
                                    quienes más lo necesitan. Juntos podemos contribuir a
                                    construir un futuro con más posibilidades.
                                </p>

                                <div className="mt-9">
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center rounded-full bg-[#F27B35] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#e96d27] hover:shadow-xl"
                                    >
                                        Quiero donar
                                    </a>
                                </div>

                                <p className="mt-4 text-xs text-white/60">
                                    Próximamente encontrarás aquí las opciones disponibles
                                    para realizar tu donación.
                                </p>

                            </div>
                        </div>

                        {/* Bloque visual */}
                        <div className="relative hidden min-h-[420px] items-center justify-center overflow-hidden bg-[#04B2D9] lg:flex">

                            {/* Círculos */}
                            <div className="absolute h-80 w-80 rounded-full border border-white/15" />

                            <div className="absolute h-60 w-60 rounded-full border border-white/15" />

                            <div className="absolute h-40 w-40 rounded-full border border-white/15" />

                            {/* Corazón */}
                            <div className="relative flex h-40 w-40 rotate-45 items-center justify-center rounded-[2.5rem] bg-white shadow-2xl">

                                <span className="-rotate-45 text-7xl text-[#F27B35]">
                                    ♥
                                </span>

                            </div>

                            {/* Puntos decorativos */}
                            <span className="absolute right-16 top-20 h-4 w-4 rounded-full bg-[#F27B35]" />

                            <span className="absolute bottom-20 left-20 h-5 w-5 rounded-full bg-[#F2A477]" />

                        </div>

                    </div>
                </div>
            </Reveal>
            </div>
        </section>
    );
}