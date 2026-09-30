import Reveal from "./Reveal";

export default function About() {
    return (
        <section
            id="nosotros"
            className="relative overflow-hidden bg-[#F2F2F2] py-24 lg:py-32"
        >
            {/* Decoración */}
            <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#079DD9]/5 blur-3xl" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    {/* Bloque visual */}
                    <Reveal className="relative">
                        <div className="relative mx-auto max-w-md">

                            {/* Fondo decorativo */}
                            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border-2 border-[#079DD9]/20" />

                            <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl">

                                <div className="flex aspect-square items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#079DD9]/10 to-[#04B2D9]/5">

                                    {/* Ojo estilizado */}
                                    <div className="relative flex h-48 w-48 items-center justify-center rounded-[50%] border-[12px] border-[#079DD9]">

                                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#04B2D9] shadow-lg">
                                            <div className="h-10 w-10 rounded-full bg-[#252525]" />
                                        </div>

                                        <div className="absolute -right-4 top-5 h-6 w-6 rounded-full bg-[#F27B35]" />
                                        <div className="absolute -bottom-2 left-8 h-4 w-4 rounded-full bg-[#F2A477]" />

                                    </div>

                                </div>

                                <div className="mt-6">
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#079DD9]">
                                        Fundación VerBien
                                    </p>

                                    <p className="mt-2 text-2xl font-bold text-[#252525]">
                                        Una mirada que transforma
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Reveal>

                    {/* Contenido */}
                    <div>
                        <div className="mb-5 inline-flex items-center gap-3">
                            <span className="h-1 w-10 rounded-full bg-[#F27B35]" />

                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#079DD9]">
                                Nosotros
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#252525] sm:text-5xl">
                            Una fundación con una{" "}
                            <span className="text-[#079DD9]">visión diferente</span>
                        </h2>

                        <div className="mt-7 space-y-5 text-base leading-8 text-[#4A4A4A]">
                            <p>
                                Fundación VerBien nace con el propósito de contribuir al
                                bienestar de las personas y generar oportunidades que
                                permitan transformar vidas.
                            </p>

                            <p>
                                A través de nuestra labor buscamos construir un impacto
                                positivo, poniendo a las personas en el centro y trabajando
                                por una sociedad con mayores oportunidades.
                            </p>
                        </div>

                        {/* Valores / características */}
                        <div className="mt-9 grid gap-5 sm:grid-cols-2">

                            <div className="rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#079DD9]/10">
                                    <span className="text-xl text-[#079DD9]">✦</span>
                                </div>

                                <h3 className="font-semibold text-[#252525]">
                                    Compromiso
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    Trabajamos con dedicación para generar un impacto positivo.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F27B35]/10">
                                    <span className="text-xl text-[#F27B35]">♥</span>
                                </div>

                                <h3 className="font-semibold text-[#252525]">
                                    Solidaridad
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    Creemos en la colaboración como motor de transformación.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}