import Reveal from "./Reveal";

export default function MissionVision() {
    return (
        <section
            id="mision"
            className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
        >
            {/* Decoraciones */}
            <div className="pointer-events-none absolute left-[-120px] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#079DD9]/10 blur-3xl" />

            <div className="pointer-events-none absolute right-[-120px] top-1/3 h-72 w-72 rounded-full bg-[#F27B35]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                {/* Encabezado */}
                <Reveal>
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#079DD9]/10 px-4 py-2 text-sm font-medium text-[#079DD9]">
                            <span className="h-2 w-2 rounded-full bg-[#F27B35]" />
                            Nuestro propósito
                        </span>

                        <h2 className="text-3xl font-bold leading-tight text-[#252525] sm:text-4xl lg:text-5xl">
                            Lo que nos{" "}
                            <span className="text-[#079DD9]">mueve</span>
                        </h2>

                        <p className="mt-5 text-base leading-7 text-[#4A4A4A] sm:text-lg sm:leading-8">
                            Nuestra labor nace de un propósito claro: contribuir al bienestar
                            y generar oportunidades que puedan transformar vidas.
                        </p>
                    </div>
                </Reveal>

                {/* Misión / Visión */}
                <div className="relative grid gap-6 lg:grid-cols-2 lg:gap-8">
                    {/* Línea central en desktop */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-16 -translate-x-1/2 bg-gradient-to-r from-[#079DD9] to-[#F27B35] lg:block" />

                    {/* MISIÓN */}
                    <Reveal direction="left">
                        <article className="group relative h-full overflow-hidden rounded-[2rem] bg-[#079DD9] p-8 text-white shadow-lg shadow-[#079DD9]/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-10 lg:p-12">
                            {/* Decoración */}
                            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-125" />

                            <div className="relative">
                                <div className="mb-8 flex items-center justify-between">
                                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-xl font-bold backdrop-blur-sm">
                                        M
                                    </span>

                                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
                                        Hoy
                                    </span>
                                </div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                                    Nuestra misión
                                </p>

                                <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                                    Transformar desde el presente.
                                </h3>

                                <p className="mt-6 max-w-lg text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
                                    Trabajamos para contribuir al bienestar y la salud visual,
                                    desarrollando acciones que permitan generar oportunidades y
                                    mejorar la calidad de vida de las personas.
                                </p>

                                <div className="mt-10 h-px w-full bg-white/15" />

                                <p className="mt-5 text-sm text-white/65">
                                    Compromiso · Bienestar · Solidaridad
                                </p>
                            </div>
                        </article>
                    </Reveal>

                    {/* VISIÓN */}
                    <Reveal direction="right" delay={0.15}>
                        <article
                            id="vision"
                            className="group relative h-full overflow-hidden rounded-[2rem] bg-[#F27B35] p-8 text-white shadow-lg shadow-[#F27B35]/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-10 lg:p-12"
                        >
                            {/* Decoración */}
                            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-125" />

                            <div className="relative">
                                <div className="mb-8 flex items-center justify-between">
                                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-xl font-bold backdrop-blur-sm">
                                        V
                                    </span>

                                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
                                        Mañana
                                    </span>
                                </div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                                    Nuestra visión
                                </p>

                                <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                                    Construir nuevas posibilidades.
                                </h3>

                                <p className="mt-6 max-w-lg text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
                                    Buscamos consolidar una labor que genere un impacto positivo
                                    y contribuya a que más personas puedan acceder a mejores
                                    oportunidades para su bienestar y salud visual.
                                </p>

                                <div className="mt-10 h-px w-full bg-white/15" />

                                <p className="mt-5 text-sm text-white/65">
                                    Impacto · Oportunidades · Futuro
                                </p>
                            </div>
                        </article>
                    </Reveal>
                </div>

                {/* Frase inferior */}
                <Reveal delay={0.25}>
                    <div className="mt-12 text-center">
                        <div className="mx-auto flex max-w-xl items-center justify-center gap-4">
                            <span className="h-px flex-1 bg-[#079DD9]/20" />

                            <span className="h-2 w-2 rounded-full bg-[#F27B35]" />

                            <span className="h-px flex-1 bg-[#F27B35]/20" />
                        </div>

                        <p className="mt-5 text-sm font-medium text-[#4A4A4A] sm:text-base">
                            Una mirada al presente, con los ojos puestos en el futuro.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}