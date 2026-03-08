"use client";

import React, { useMemo, useState } from "react";
import {
  ChevronRight,
  Globe,
  Database,
  Workflow,
  Bot,
  Network,
  LineChart,
  ShieldCheck,
  Layers,
  BrainCircuit,
} from "lucide-react";

const copy = {
  es: {
    nav: {
      value: "Propuesta",
      problems: "Problemas",
      services: "Servicios",
      model: "Modelo",
      founders: "Founders",
      contact: "Contacto",
    },
    hero: {
      badge: "AI • Data • Automation",
      title: "Arquitecturas inteligentes para transformar operación, crecimiento y decisión.",
      subtitle:
        "Nexora ayuda a empresas medianas y grandes en Argentina a convertir CRM, datos y automatización en una capacidad comercial y operativa integrada. Diseñamos e implementamos soluciones que conectan Salesforce, ERP, canales y procesos críticos con foco en consultoría e implementación.",
      cta1: "Coordinar conversación",
      cta2: "Ver propuesta",
      tags: [
        "Salesforce + Data + Integración",
        "Consultoría e implementación senior",
        "IA aplicada a procesos reales",
      ],
    },
    value: {
      kicker: "Propuesta de valor",
      title: "No vendemos tecnología aislada. Construimos capacidad operativa y comercial.",
      text:
        "La mayoría de las empresas ya tiene herramientas. El problema real suele estar en otro lado: procesos rotos, datos fragmentados, ownership difuso, integraciones débiles y baja adopción. Nexora entra exactamente ahí. Ordena la arquitectura, conecta sistemas clave y lleva la automatización a procesos con impacto medible.",
      bullets: [
        "Transformamos Salesforce de sistema subutilizado a motor de ejecución comercial y operativa.",
        "Unificamos datos y eventos para que la dirección tenga visibilidad y el negocio pueda actuar más rápido.",
        "Diseñamos automatizaciones con IA cuando agregan valor real, no como demo sin aterrizaje.",
      ],
    },
    problems: {
      kicker: "Qué resolvemos",
      title: "Problemas típicos que atacamos",
      items: [
        {
          title: "CRM desconectado del negocio",
          text: "Salesforce existe, pero no gobierna el proceso comercial, de atención o de servicio de punta a punta.",
        },
        {
          title: "Datos dispersos y poca visibilidad",
          text: "La información vive en múltiples sistemas, sin una capa clara de decisión, reporting o activación.",
        },
        {
          title: "Procesos manuales y cuellos de botella",
          text: "Hay dependencia de Excel, correo, tareas ad hoc y retrabajo entre áreas críticas.",
        },
        {
          title: "IA sin base operativa",
          text: "Se exploran casos de uso, pero sin arquitectura, workflow ni gobierno para sostener impacto.",
        },
      ],
    },
    services: {
      kicker: "Servicios",
      title: "Qué hace Nexora",
      items: [
        {
          title: "Salesforce Strategy, Design & Implementation",
          text: "Roadmap, diseño funcional, implementación, rediseño de procesos, adopción y mejora continua sobre Salesforce.",
        },
        {
          title: "Data Architecture & Executive Intelligence",
          text: "Modelo de datos, integración, trazabilidad, métricas y tableros ejecutivos para decidir mejor.",
        },
        {
          title: "Automation & AI for Real Workflows",
          text: "Automatización de procesos, copilots, reglas de negocio y flujos inteligentes conectados a la operación.",
        },
        {
          title: "Systems Integration & Workflow Design",
          text: "Integración entre CRM, ERP, APIs y sistemas operativos para eliminar fricción entre áreas.",
        },
      ],
    },
    model: {
      kicker: "Modelo de trabajo",
      title: "Una forma simple de ejecutar bien",
      steps: [
        {
          title: "1. Diagnóstico estratégico",
          text: "Entendemos proceso, arquitectura, gaps de datos y quick wins. Cerramos alcance con criterio de negocio.",
        },
        {
          title: "2. Diseño y roadmap",
          text: "Definimos arquitectura objetivo, secuencia de entregas, dependencias y métricas de éxito.",
        },
        {
          title: "3. Implementación",
          text: "Ejecutamos con foco en integración, automatización, gobierno y adopción operativa.",
        },
        {
          title: "4. Optimización",
          text: "Consolidamos la solución y priorizamos mejoras, nuevas capacidades y escalabilidad.",
        },
      ],
    },
    useCases: {
      kicker: "Casos de uso",
      title: "Dónde podemos generar valor rápido",
      items: [
        "Rediseño de Salesforce para ordenar procesos comerciales y de atención.",
        "Integración entre CRM, ERP y reporting ejecutivo para reducir fricción y retrabajo.",
        "Arquitectura de datos y automatización para activar decisiones y procesos de punta a punta.",
      ],
    },
    outcomes: {
      kicker: "Resultado esperado",
      title: "Qué cambia cuando está bien hecho",
      items: [
        "Menos trabajo manual y menos retrabajo entre áreas.",
        "Mayor velocidad comercial y operativa.",
        "Más visibilidad ejecutiva sobre embudos, procesos y performance.",
        "Automatización escalable, no dependiente de héroes individuales.",
      ],
      note:
        "Los resultados concretos dependen del punto de partida, la calidad de datos y el nivel de adopción. Nexora prioriza casos con retorno claro antes de escalar.",
    },
    why: {
      kicker: "Por qué Nexora",
      title: "Consultoría e implementación senior, con criterio técnico y de negocio",
      items: [
        "Atención directa de founders y diseño con seniority real.",
        "Capacidad de conectar estrategia, arquitectura, datos e implementación.",
        "Foco en proyectos con impacto visible, no en vender horas sin dirección.",
        "Modelo boutique, liviano y escalable, con especialistas según necesidad.",
      ],
    },
    founders: {
      kicker: "Leadership",
      title: "Founding team",
      people: [
        {
          name: "Sergio Weinmann",
          role: "Founder",
          text: "Arquitectura de sistemas, integración y diseño de soluciones operables y escalables.",
          linkedin: "https://linkedin.com/in/sergioweinmann/",
        },
        {
          name: "Nicolás Martins",
          role: "Co-Founder",
          text: "Estrategia de datos, IA aplicada, Salesforce y transformación comercial orientada a impacto.",
          linkedin: "https://www.linkedin.com/in/nicohmartins",
        },
      ],
    },
    contact: {
      title: "Si ya tienen herramientas pero no una capacidad integrada, ahí entra Nexora.",
      text: "Podemos empezar con una conversación inicial para ordenar prioridades, arquitectura y oportunidades de implementación.",
      formTitle: "Contanos qué necesitan",
      formText:
        "Este formulario envía la consulta a los founders para una primera conversación sobre consultoría e implementación en Argentina.",
      name: "Nombre",
      email: "Email",
      company: "Empresa",
      message: "Qué quieren resolver",
      messagePlaceholder: "Contanos el problema, contexto y urgencia",
      send: "Enviar consulta",
    },
    footer: {
      line1: "NEXORA",
      line2: "Transforming Business with AI & Data",
    },
  },
  en: {
    nav: {
      value: "Value",
      problems: "Problems",
      services: "Services",
      model: "Model",
      founders: "Founders",
      contact: "Contact",
    },
    hero: {
      badge: "AI • Data • Automation",
      title: "Intelligent architectures to transform operations, growth, and decision-making.",
      subtitle:
        "Nexora helps mid-sized and large companies in Argentina turn CRM, data, and automation into an integrated commercial and operational capability. We design and implement solutions that connect Salesforce, ERP, channels, and critical workflows, with a consulting and implementation focus.",
      cta1: "Start the conversation",
      cta2: "See value proposition",
      tags: [
        "Salesforce + Data + Integration",
        "Senior consulting and implementation",
        "AI applied to real workflows",
      ],
    },
    value: {
      kicker: "Value proposition",
      title: "We do not sell isolated technology. We build operational and commercial capability.",
      text:
        "Most companies already have tools. The real issue is usually somewhere else: broken processes, fragmented data, unclear ownership, weak integrations, and low adoption. Nexora works exactly there. We structure the architecture, connect critical systems, and deploy automation where it creates measurable business value.",
      bullets: [
        "We turn Salesforce from an underused platform into a commercial and operational execution engine.",
        "We unify data and events so leadership can see clearly and the business can act faster.",
        "We design AI-enabled automation only when it improves outcomes, not as a disconnected showcase.",
      ],
    },
    problems: {
      kicker: "What we solve",
      title: "Common problems we address",
      items: [
        {
          title: "CRM disconnected from the business",
          text: "Salesforce exists, but it does not truly govern the end-to-end commercial, service, or support process.",
        },
        {
          title: "Scattered data and weak visibility",
          text: "Information lives across multiple systems with no clear decision, reporting, or activation layer.",
        },
        {
          title: "Manual processes and bottlenecks",
          text: "Teams still depend on spreadsheets, email, ad hoc tasks, and constant rework across critical areas.",
        },
        {
          title: "AI without operational foundation",
          text: "Use cases are explored, but there is no architecture, workflow, or governance model to sustain impact.",
        },
      ],
    },
    services: {
      kicker: "Services",
      title: "What Nexora does",
      items: [
        {
          title: "Salesforce Strategy, Design & Implementation",
          text: "Roadmap, functional design, implementation, process redesign, adoption, and continuous improvement across Salesforce.",
        },
        {
          title: "Data Architecture & Executive Intelligence",
          text: "Data model, integration, traceability, metrics, and executive dashboards for better decision-making.",
        },
        {
          title: "Automation & AI for Real Workflows",
          text: "Process automation, copilots, business rules, and intelligent workflows connected to real operations.",
        },
        {
          title: "Systems Integration & Workflow Design",
          text: "Integration across CRM, ERP, APIs, and operational systems to remove friction between teams.",
        },
      ],
    },
    model: {
      kicker: "Engagement model",
      title: "A simple way to execute well",
      steps: [
        {
          title: "1. Strategic diagnostic",
          text: "We assess process, architecture, data gaps, and quick wins. Scope is defined with business criteria.",
        },
        {
          title: "2. Design and roadmap",
          text: "We define the target architecture, delivery sequence, dependencies, and success metrics.",
        },
        {
          title: "3. Implementation",
          text: "We execute with focus on integration, automation, governance, and operational adoption.",
        },
        {
          title: "4. Optimization",
          text: "We stabilize the solution and prioritize improvements, new capabilities, and scalability.",
        },
      ],
    },
    useCases: {
      kicker: "Use cases",
      title: "Where we can create value fast",
      items: [
        "Redesigning Salesforce to organize commercial and service workflows.",
        "Integrating CRM, ERP, and executive reporting to reduce friction and rework.",
        "Designing data and automation architecture to activate end-to-end decisions and workflows.",
      ],
    },
    outcomes: {
      kicker: "Expected impact",
      title: "What changes when it is done right",
      items: [
        "Less manual work and less cross-team rework.",
        "Higher commercial and operational speed.",
        "Better executive visibility across funnels, workflows, and performance.",
        "Scalable automation, not dependent on individual heroes.",
      ],
      note:
        "Specific outcomes depend on the starting point, data quality, and adoption level. Nexora prioritizes use cases with clear return before scaling.",
    },
    why: {
      kicker: "Why Nexora",
      title: "Senior consulting and implementation with business and technical judgment",
      items: [
        "Direct founder involvement and real senior-level design.",
        "Ability to connect strategy, architecture, data, and implementation.",
        "Focus on projects with visible impact, not directionless billable hours.",
        "A lean, boutique model that scales with specialists when needed.",
      ],
    },
    founders: {
      kicker: "Leadership",
      title: "Founding team",
      people: [
        {
          name: "Sergio Weinmann",
          role: "Founder",
          text: "Systems architecture, integration, and scalable solution design.",
          linkedin: "https://linkedin.com/in/sergioweinmann/",
        },
        {
          name: "Nicolás Martins",
          role: "Co-Founder",
          text: "Data strategy, applied AI, Salesforce, and commercial transformation focused on impact.",
          linkedin: "https://www.linkedin.com/in/nicohmartins",
        },
      ],
    },
    contact: {
      title: "If you already have tools but not an integrated capability, this is where Nexora fits.",
      text: "We can start with an initial conversation to structure priorities, architecture, and implementation opportunities.",
      formTitle: "Tell us what you need",
      formText:
        "This form sends your inquiry to the founders for an initial conversation about consulting and implementation in Argentina.",
      name: "Name",
      email: "Email",
      company: "Company",
      message: "What are you trying to solve",
      messagePlaceholder: "Tell us the problem, context, and urgency",
      send: "Send inquiry",
    },
    footer: {
      line1: "NEXORA",
      line2: "Transforming Business with AI & Data",
    },
  },
};

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">{kicker}</p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">{title}</h2>
    </div>
  );
}

const serviceIcons = [Layers, Database, Bot, Workflow];
const capabilityIcons = [Network, LineChart, BrainCircuit, ShieldCheck];

export default function Page() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const t = useMemo(() => copy[lang], [lang]);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-fuchsia-600 text-white shadow-sm">
              <span className="text-lg font-bold">N</span>
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-slate-950">NEXORA</div>
              <div className="text-xs text-slate-500">AI • Data • Automation</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#value" className="hover:text-slate-950">{t.nav.value}</a>
            <a href="#problems" className="hover:text-slate-950">{t.nav.problems}</a>
            <a href="#services" className="hover:text-slate-950">{t.nav.services}</a>
            <a href="#model" className="hover:text-slate-950">{t.nav.model}</a>
            <a href="#founders" className="hover:text-slate-950">{t.nav.founders}</a>
            <a href="#contact" className="hover:text-slate-950">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 p-1">
            <button
              onClick={() => setLang("es")}
              className={`rounded-full px-3 py-1.5 text-sm ${lang === "es" ? "bg-slate-900 text-white" : "text-slate-600"}`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1.5 text-sm ${lang === "en" ? "bg-slate-900 text-white" : "text-slate-600"}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
            <div>
              <div className="inline-flex items-center rounded-full border border-violet-200 bg-white px-4 py-2 text-sm text-violet-700 shadow-sm">
                <Globe className="mr-2 h-4 w-4" /> {t.hero.badge}
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                {t.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t.hero.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-2xl bg-slate-900 px-6 py-4 text-base font-medium text-white hover:bg-slate-800"
                >
                  {t.hero.cta1}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#value"
                  className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-medium text-slate-900 hover:bg-slate-50"
                >
                  {t.hero.cta2}
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-600">
                {t.hero.tags.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-fuchsia-600 text-white">
                  <span className="text-xl font-bold">N</span>
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-slate-950">NEXORA</p>
                  <p className="text-sm text-slate-500">Transforming Business with AI & Data</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {[
                  { label: "Salesforce", value: lang === "es" ? "Estrategia, diseño e implementación" : "Strategy, design, and implementation" },
                  { label: "Data", value: lang === "es" ? "Arquitectura, métricas y visibilidad ejecutiva" : "Architecture, metrics, and executive visibility" },
                  { label: "Automation", value: lang === "es" ? "Workflow design, IA y reglas de negocio" : "Workflow design, AI, and business rules" },
                  { label: "Integration", value: lang === "es" ? "CRM, ERP, APIs y operación" : "CRM, ERP, APIs, and operations" },
                ].map((item, index) => {
                  const Icon = capabilityIcons[index];
                  return (
                    <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4">
                      <div className="mt-0.5 rounded-xl bg-slate-100 p-2 text-slate-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-950">{item.label}</p>
                        <p className="text-sm leading-6 text-slate-600">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="value" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle kicker={t.value.kicker} title={t.value.title} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <p className="text-lg leading-8 text-slate-600">{t.value.text}</p>
            <div className="space-y-4">
              {t.value.bullets.map((bullet) => (
                <div key={bullet} className="rounded-2xl border border-slate-200 p-5 text-slate-700 shadow-sm">
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="problems" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle kicker={t.problems.kicker} title={t.problems.title} />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {t.problems.items.map((item) => (
                <div key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-7">
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle kicker={t.services.kicker} title={t.services.title} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.services.items.map((item, index) => {
              const Icon = serviceIcons[index];
              return (
                <div key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="inline-flex rounded-2xl bg-gradient-to-br from-sky-500/10 to-fuchsia-500/10 p-3 text-slate-900">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="model" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle kicker={t.model.kicker} title={t.model.title} />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {t.model.steps.map((step) => (
                <div key={step.title} className="rounded-[24px] border border-white/10 bg-white/5 p-7">
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionTitle kicker={t.useCases.kicker} title={t.useCases.title} />
              <div className="mt-8 space-y-4">
                {t.useCases.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle kicker={t.outcomes.kicker} title={t.outcomes.title} />
              <div className="mt-8 space-y-4">
                {t.outcomes.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-slate-500">{t.outcomes.note}</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle kicker={t.why.kicker} title={t.why.title} />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {t.why.items.map((item) => (
                <div key={item} className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="founders" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle kicker={t.founders.kicker} title={t.founders.title} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {t.founders.people.map((person) => (
              <div key={person.name} className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-700">{person.role}</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">{person.name}</h3>
                <p className="mt-4 leading-7 text-slate-600">{person.text}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center text-sm font-medium text-violet-700 hover:text-violet-900"
                >
                  LinkedIn <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[32px] bg-gradient-to-r from-slate-950 via-slate-900 to-violet-900 p-10 text-white shadow-2xl">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.contact.title}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">{t.contact.text}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/nicohmartins"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-2xl bg-white px-6 py-4 text-base font-medium text-slate-950 hover:bg-slate-100"
                >
                  LinkedIn Nicolás
                </a>
                <a
                  href="https://linkedin.com/in/sergioweinmann/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-2xl border border-white/20 bg-transparent px-6 py-4 text-base font-medium text-white hover:bg-white/10"
                >
                  LinkedIn Sergio
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{t.contact.formTitle}</h3>
              <p className="mt-3 leading-7 text-slate-600">{t.contact.formText}</p>

              <form
                action="https://formsubmit.co/nicolashmartins@gmail.com"
                method="POST"
                className="mt-8 space-y-4"
              >
                <input type="hidden" name="_cc" value="weinmann.sergio@gmail.com" />
                <input
                  type="hidden"
                  name="_subject"
                  value={lang === "es" ? "Nuevo contacto desde Nexora" : "New contact from Nexora"}
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://nexora-site-kappa.vercel.app/" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">{t.contact.name}</label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                      placeholder={t.contact.name}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">{t.contact.email}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                      placeholder="nombre@empresa.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">{t.contact.company}</label>
                  <input
                    name="company"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                    placeholder={t.contact.company}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">{t.contact.message}</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center rounded-2xl bg-slate-900 px-6 py-4 text-base font-medium text-white hover:bg-slate-800"
                >
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-10 md:flex-row md:items-end md:justify-between lg:px-8">
          <div>
            <p className="text-xl font-bold tracking-tight text-slate-950">{t.footer.line1}</p>
            <p className="text-slate-500">{t.footer.line2}</p>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            {lang === "es"
              ? "Consultoría boutique en Salesforce, datos, automatización e integración para empresas en Argentina."
              : "Boutique consulting in Salesforce, data, automation, and integration for companies in Argentina."}
          </p>
        </div>
      </footer>
    </div>
  );
}
