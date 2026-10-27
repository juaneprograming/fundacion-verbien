"use client";

import { useState } from "react";
import {
    motion,
    useReducedMotion,
    type Variants,
} from "motion/react";
import {
    ArrowDownRight,
    ArrowRight,
    Brain,
    Gift,
    HandHeart,
    HeartHandshake,
    Utensils,
    Users,
    Sparkles,
    CheckCircle2,
} from "lucide-react";
import Reveal from "./Reveal";

const PHONE_NUMBER = "573188681400";

const services = [
    {
        number: "01",
        category: "Bienestar empresarial",
        title: "Capacitaciones y bienestar laboral",
        description:
            "Experiencias orientadas al bienestar de los equipos, la comunicación y el desarrollo de entornos laborales positivos.",
        items: [
            "Gestión del estrés y prevención del burnout",
            "Clima laboral y comunicación asertiva",
            "Ergonomía y pausas activas",
            "Liderazgo empático e inteligencia emocional",
        ],
        icon: Brain,
        image: "/images/gallery/capacitaciones.jpg",
        color: "#079DD9",
        tint: "#079DD9",
    },
    {
        number: "02",
        category: "Desarrollo humano",
        title: "Programas para jóvenes y población vulnerable",
        description:
            "Espacios de formación que promueven el desarrollo personal, las habilidades sociales y la preparación para el mundo laboral.",
        items: [
            "Proyecto de vida y liderazgo juvenil",
            "Habilidades blandas para la empleabilidad",
            "Regulación emocional",
            "Resiliencia y desarrollo de fortalezas",
        ],
        icon: HandHeart,
        image: "/images/gallery/jovenes.jpg",
        color: "#F27B35",
        tint: "#F27B35",
    },
    {
        number: "03",
        category: "Integración de equipos",
        title: "Actividades recreativas y team building",
        description:
            "Jornadas participativas para fortalecer la integración, la colaboración y la comunicación entre los equipos.",
        items: [
            "Olimpiadas y retos de integración",
            "Talleres vivenciales",
            "Risoterapia y musicoterapia",
            "Dinámicas de comunicación grupal",
        ],
        icon: Users,
        image: "/images/gallery/team-building.jpg",
        color: "#079DD9",
        tint: "#079DD9",
    },
    {
        number: "04",
        category: "Experiencias gastronómicas",
        title: "Servicios gastronómicos corporativos",
        description:
            "Alternativas de alimentación y organización para reuniones empresariales, capacitaciones y jornadas recreativas.",
        items: [
            "Desayunos corporativos",
            "Almuerzos corporativos",
            "Pasadías recreativos",
            "Logística y alimentación para jornadas",
        ],
        icon: Utensils,
        image: "/images/gallery/gastronomicos.jpg",
        color: "#F27B35",
        tint: "#F27B35",
    },
    {
        number: "05",
        category: "Detalles con propósito",
        title: "Regalos corporativos y reconocimientos",
        description:
            "Detalles personalizados para fortalecer la identidad corporativa, reconocer logros y acompañar fechas especiales.",
        items: [
            "Agendas, bolsos, termos y gorras",
            "Kits de bienestar y cumpleaños",
            "Detalles para fechas especiales",
            "Regalos de Navidad e incentivos",
        ],
        icon: Gift,
        image: "/images/gallery/regalos.jpg",
        color: "#079DD9",
        tint: "#079DD9",
    },
];

function createWhatsAppUrl(serviceName: string) {
    const message = encodeURIComponent(
        `Hola, quisiera recibir más información sobre el servicio "${serviceName}" de la Fundación Ver Bien. Me gustaría conocer las opciones disponibles y solicitar una cotización.`
    );

    return `https://wa.me/${PHONE_NUMBER}?text=${message}`;
}

export default function Services() {
    const [activeService, setActiveService] = useState<string | null>(null);
    const reduceMotion = useReducedMotion();

    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: reduceMotion ? 0 : 24,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduceMotion ? 0 : 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            id="servicios"
            className="relative isolate overflow-hidden bg-[#F7F9FB] py-24 sm:py-28 lg:py-32"
        >
            {/* Fondos decorativos */}
            <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-[#079DD9]/10 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 bottom-20 -z-10 h-96 w-96 rounded-full bg-[#F27B35]/10 blur-3xl" />

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                {/* Encabezado */}
                <Reveal>
                    <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#079DD9]/10 bg-white px-4 py-2 text-sm font-semibold text-[#079DD9] shadow-sm">
                            <Sparkles size={15} />
                            Nuestro portafolio
                        </span>

                        <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#252525] sm:text-4xl lg:text-5xl">
                            Servicios que generan{" "}
                            <span className="text-[#079DD9]">
                                bienestar e impacto
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5A6068] sm:text-lg sm:leading-8">
                            En Fundación Ver Bien desarrollamos soluciones para
                            organizaciones, equipos de trabajo y comunidades.
                            Conoce nuestro portafolio y conversemos sobre lo que
                            necesitas.
                        </p>
                    </div>
                </Reveal>

                {/* Tarjetas */}
                <motion.div
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: reduceMotion ? 0 : 0.09,
                            },
                        },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.08 }}
                    className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
                >
                    {services.map((service) => {
                        const Icon = service.icon;
                        const expanded = activeService === service.number;

                        return (
                            <motion.article
                                key={service.number}
                                variants={cardVariants}
                                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-[#079DD9]/30 hover:shadow-xl hover:shadow-[#252525]/5 sm:p-7"
                            >
                                {/* Acento superior */}
                                <div
                                    className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                                    style={{ backgroundColor: service.color }}
                                />

                                {/* Imagen de referencia */}
                                <div className="-mx-6 -mt-6 mb-6 aspect-[3/2] overflow-hidden bg-gray-100 sm:-mx-7 sm:-mt-7">
                                    <img
                                        src={service.image}
                                        alt=""
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                                    />
                                </div>

                                <div className="flex items-start justify-between gap-3">
                                    <div
                                        className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                                        style={{
                                            backgroundColor: `${service.tint}12`,
                                            color: service.color,
                                        }}
                                    >
                                        <Icon size={27} strokeWidth={1.8} />
                                    </div>

                                    <span className="text-sm font-semibold tracking-widest text-gray-300">
                                        {service.number}
                                    </span>
                                </div>

                                <p
                                    className="mt-6 text-xs font-bold uppercase tracking-[0.13em]"
                                    style={{ color: service.color }}
                                >
                                    {service.category}
                                </p>

                                <h3 className="mt-2 text-xl font-bold leading-snug text-[#252525] sm:text-2xl">
                                    {service.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#5A6068]">
                                    {service.description}
                                </p>

                                {/* Detalles desplegables */}
                                <div className="mt-5 border-t border-gray-100 pt-4">
                                    <button
                                        type="button"
                                        aria-expanded={expanded}
                                        aria-controls={`service-details-${service.number}`}
                                        onClick={() =>
                                            setActiveService(
                                                expanded ? null : service.number
                                            )
                                        }
                                        className="flex w-full items-center justify-between gap-3 py-1 text-left text-sm font-semibold text-[#252525] transition-colors hover:text-[#079DD9]"
                                    >
                                        <span>
                                            {expanded
                                                ? "Ocultar servicios"
                                                : "¿Qué incluye?"}
                                        </span>

                                        <span
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${expanded ? "rotate-45" : ""
                                                }`}
                                            style={{
                                                backgroundColor: `${service.tint}12`,
                                                color: service.color,
                                            }}
                                        >
                                            <ArrowRight size={17} />
                                        </span>
                                    </button>

                                    <div
                                        id={`service-details-${service.number}`}
                                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${expanded
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <ul className="space-y-3 pt-4">
                                                {service.items.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex items-start gap-2.5 text-sm leading-6 text-[#5A6068]"
                                                    >
                                                        <CheckCircle2
                                                            size={17}
                                                            className="mt-0.5 shrink-0"
                                                            style={{
                                                                color: service.color,
                                                            }}
                                                        />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <a
                                    href={createWhatsAppUrl(service.title)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto flex items-center justify-between gap-3 rounded-xl border border-gray-200 px-4 py-3.5 text-sm font-semibold text-[#252525] transition-all duration-300 hover:border-transparent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079DD9] focus-visible:ring-offset-2"
                                    style={{
                                        marginTop: "1.5rem",
                                    }}
                                    onMouseEnter={(event) => {
                                        event.currentTarget.style.backgroundColor =
                                            service.color;
                                    }}
                                    onMouseLeave={(event) => {
                                        event.currentTarget.style.backgroundColor =
                                            "transparent";
                                    }}
                                >
                                    <span>Consultar este servicio</span>
                                    <ArrowDownRight size={18} />
                                </a>
                            </motion.article>
                        );
                    })}
                </motion.div>

                {/* Bloque de impacto social */}
                <Reveal delay={0.1}>
                    <div className="relative mt-12 overflow-hidden rounded-3xl bg-[#079DD9] p-7 text-white shadow-xl shadow-[#079DD9]/10 sm:mt-16 sm:p-10 lg:p-12">
                        <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border-[35px] border-white/10" />

                        <div className="pointer-events-none absolute -bottom-24 -left-12 h-56 w-56 rounded-full border-[30px] border-[#F27B35]/40" />

                        <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
                            <div className="max-w-2xl">
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white">
                                    <HeartHandshake size={15} />
                                    Contratar también es contribuir
                                </span>

                                <h3 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
                                    Tu organización puede ser parte del cambio.
                                </h3>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
                                    Al contratar nuestros servicios, contribuyes
                                    directamente al apoyo de jóvenes en situación
                                    de vulnerabilidad, de acuerdo con nuestro
                                    compromiso social.
                                </p>
                            </div>

                            <a
                                href={createWhatsAppUrl(
                                    "Portafolio completo de servicios"
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#F27B35] px-6 py-4 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#e96d27] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#079DD9] sm:w-auto"
                            >
                                Solicitar información
                                <ArrowRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}