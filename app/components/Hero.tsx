import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-white"
        >
            {/* Decoración de fondo */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#04B2D9]/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#F2A477]/15 blur-3xl" />

            <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

                {/* Contenido */}
                <Reveal className="relative z-10 max-w-2xl">

                   

                    <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-[#252525] sm:text-6xl lg:text-7xl">
                        Fundación{" "}
                        
                        <span className="relative inline-block text-[#079DD9]">
                            VerBien
                            <span className="absolute -bottom-2 left-0 h-1.5 w-2/3 rounded-full bg-[#F27B35]" />
                            
                        </span>
                    </h1>

                     <div className="mb-6 mt-6 inline-flex items-center gap-2 rounded-full bg-[#079DD9]/10 px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-[#F27B35]" />

                        <span className="text-sm font-medium text-[#079DD9]">
                            La luz de tus ojos
                        </span>
                    </div>

                    <p className="mt-7 max-w-xl text-lg leading-8 text-[#4A4A4A] sm:text-xl">
                        Trabajamos para contribuir al bienestar y la salud visual,
                        construyendo oportunidades para que más personas puedan
                        disfrutar de una mejor calidad de vida.
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                        <a
                            href="#nosotros"
                            className="inline-flex items-center justify-center rounded-full bg-[#079DD9] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#079DD9]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#058dc4] hover:shadow-xl"
                        >
                            Conócenos
                        </a>

                        <a
                            href="#donar"
                            className="inline-flex items-center justify-center rounded-full border-2 border-[#F27B35] px-7 py-3.5 text-sm font-semibold text-[#F27B35] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F27B35] hover:text-white"
                        >
                            Quiero ayudar
                        </a>

                    </div>

                    {/* Pequeño indicador */}
                    <div className="mt-10 flex items-center gap-3 text-sm text-gray-500">
                        <span className="h-px w-10 bg-[#F2A477]" />
                        <span>Una mirada que transforma</span>
                    </div>
                </Reveal>

                {/* Elemento visual */}
                <Reveal className="relative flex items-center justify-center lg:justify-end">

                    {/* Círculos decorativos */}
                    <div className="absolute h-[320px] w-[320px] rounded-full border border-[#079DD9]/20 sm:h-[430px] sm:w-[430px]" />

                    <div className="absolute h-[250px] w-[250px] rounded-full border border-[#F27B35]/20 sm:h-[340px] sm:w-[340px]" />

                    {/* Tarjeta principal */}
                    <div className="relative flex h-[330px] w-[330px] items-center justify-center rounded-[3rem] bg-gradient-to-br from-[#079DD9] to-[#04B2D9] shadow-2xl shadow-[#079DD9]/25 sm:h-[430px] sm:w-[430px]">

                        {/* Decoración */}
                        <div className="absolute -right-5 top-10 h-16 w-16 rounded-2xl bg-[#F27B35] shadow-lg rotate-12" />

                        <div className="absolute -bottom-5 left-12 h-12 w-12 rounded-full bg-[#F2A477]" />

                        {/* Logo */}
                        <div className="relative flex h-[250px] w-[250px] items-center justify-center rounded-full bg-white/95 p-10 shadow-xl sm:h-[320px] sm:w-[320px]">

                            <Image
                                src="/images/Logo.png"
                                alt="Fundación VerBien"
                                width={300}
                                height={160}
                                className="h-auto w-full object-contain"
                                priority
                            />

                        </div>
                    </div>

                </Reveal >
            </div>

            {/* Indicador inferior */}
            <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                    Descubre más
                </span>

                <span className="h-8 w-px bg-[#079DD9]/40" />
            </div>
        </section>
    );
}