import Reveal from "./Reveal";

export default function MissionVision() {
    return (
        <section
            id="mision"
            className="relative overflow-hidden bg-white py-24 lg:py-32"
        >
            {/* Decoración de fondo */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#079DD9]/5 blur-3xl" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Encabezado */}
                <div className="mx-auto max-w-3xl text-center">

                    <div className="mb-5 inline-flex items-center gap-3">
                        <span className="h-1 w-10 rounded-full bg-[#F27B35]" />

                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#079DD9]">
                            Nuestro propósito
                        </span>

                        <span className="h-1 w-10 rounded-full bg-[#F27B35]" />
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight text-[#252525] sm:text-5xl">
                        Lo que nos{" "}
                        <span className="text-[#079DD9]">mueve</span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-[#4A4A4A] sm:text-lg">
                        Conoce los principios que orientan el trabajo de Fundación
                        VerBien y nuestra visión de futuro.
                    </p>
                </div>

                {/* Misión y Visión */}
                <div className="mt-16 grid gap-8 lg:grid-cols-2">


                    <Reveal direction="left">
                    {/* Misión */}
                    <article className="group relative overflow-hidden rounded-[2rem] bg-[#079DD9] p-8 text-white shadow-xl shadow-[#079DD9]/15 transition-transform duration-300 hover:-translate-y-1 sm:p-10 lg:p-12">

                        {/* Decoración */}
                        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />

                        <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-white/5" />

                        <div className="relative">

                            <div className="mb-8 flex items-center justify-between">
                                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                                    01
                                </span>

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                                    <span className="text-2xl">◎</span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold sm:text-4xl">
                                Misión
                            </h3>

                            <div className="mt-5 h-1 w-14 rounded-full bg-[#F27B35]" />

                            <p className="mt-7 text-base leading-8 text-white/90 sm:text-lg">
                                Contribuir al bienestar de las personas mediante acciones
                                que generen oportunidades, acompañamiento y transformación
                                social.
                            </p>

                            <div className="mt-10 flex items-center gap-3 text-sm font-medium text-white/70">
                                <span className="h-px w-8 bg-white/40" />
                                <span>Lo que hacemos hoy</span>
                            </div>

                        </div>
                    </article>
                    </Reveal>

                    <Reveal direction="right">
                    {/* Visión */}
                    <article
                        id="vision"
                        className="group relative overflow-hidden rounded-[2rem] bg-[#F27B35] p-8 text-white shadow-xl shadow-[#F27B35]/15 transition-transform duration-300 hover:-translate-y-1 sm:p-10 lg:p-12"
                    >

                        {/* Decoración */}
                        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />

                        <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-white/5" />

                        <div className="relative">

                            <div className="mb-8 flex items-center justify-between">
                                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                                    02
                                </span>

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                                    <span className="text-2xl">◉</span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold sm:text-4xl">
                                Visión
                            </h3>

                            <div className="mt-5 h-1 w-14 rounded-full bg-white" />

                            <p className="mt-7 text-base leading-8 text-white/90 sm:text-lg">
                                Ser una fundación reconocida por su compromiso con las
                                personas y por generar iniciativas que contribuyan a una
                                sociedad con mayores oportunidades.
                            </p>

                            <div className="mt-10 flex items-center gap-3 text-sm font-medium text-white/70">
                                <span className="h-px w-8 bg-white/40" />
                                <span>Hacia dónde vamos</span>
                            </div>

                        </div>
                    </article>
                    </Reveal>

                </div>
            </div>
        </section>
    );
}