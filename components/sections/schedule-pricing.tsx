"use client"

import { useState } from "react"

import {
  pricingCards, pricingHighlights, salaArmoniaSchedule,
  scheduleBookingServices, scheduleContactInfo, type ScheduleDay,
} from "@/lib/site-config"
import { useStagger } from "@/hooks/use-stagger"

type AnimatedSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
}

function ScheduleCard({ title, subtitle, schedule }: { title: string; subtitle: string; schedule: ScheduleDay[] }) {
  const [activeDayIndex, setActiveDayIndex] = useState(0)
  return (
    <div className="rounded-sm border border-border/80 bg-card p-5 shadow-sm sm:p-7">
      <h3 className="mb-1 text-center font-serif text-2xl font-bold text-primary">{title}</h3>
      <p className="mb-6 text-center text-sm text-muted-foreground">{subtitle}</p>
      <div className="md:hidden">
        <div className="grid grid-cols-7 gap-1 pb-4">
          {schedule.map((day, index) => (
            <button key={day.day} onClick={() => setActiveDayIndex(index)} className={`border py-2 text-[9px] font-bold tracking-tighter uppercase transition-all duration-300 ${activeDayIndex === index ? "border-primary bg-primary text-primary-foreground" : "border-border bg-transparent text-muted-foreground hover:border-primary/40"}`}>
              {day.day.substring(0, 3)}
            </button>
          ))}
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-2 mt-4 space-y-3 duration-500">
          {schedule[activeDayIndex].classes.map((classItem) => (
            <div key={`${classItem.time}-${classItem.name}`} className="grid grid-cols-[92px_1fr] items-baseline gap-3 border-b border-border/30 pb-3 last:border-0 last:pb-0">
              <span className="text-right font-sans text-[11px] font-bold text-primary">{classItem.time}</span>
              <span className="text-left text-[13px] font-medium leading-snug tracking-wide text-foreground uppercase">{classItem.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
        {schedule.map((day) => (
          <div key={day.day}>
            <div className="mb-2 border-b border-border pb-1 text-center font-sans text-xs font-semibold tracking-wide text-foreground uppercase">{day.day}</div>
            <div className="space-y-2">
              {day.classes.map((classItem) => (
                <div key={`${classItem.time}-${classItem.name}`} className="grid grid-cols-[92px_1fr] items-baseline gap-3 border-b border-border/25 pb-2 last:border-0 last:pb-0">
                  <span className="text-right font-sans text-xs font-bold text-primary">{classItem.time}</span>
                  <span className="text-left text-xs font-medium leading-snug tracking-wide text-foreground uppercase">{classItem.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ScheduleSection({ isVisible, setSectionRef }: AnimatedSectionProps) {
  return (
    <section id="orari" ref={(element) => setSectionRef("orari", element)} style={{ background: "radial-gradient(ellipse at 15% 50%, #111111 0%, #080808 60%, #0F0F0F 100%)" }} className={`py-20 transition-all duration-700 sm:py-28 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
          <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">Orari dei Corsi</h2>
          <p className="max-w-none text-lg text-pretty text-muted-foreground lg:mx-auto lg:max-w-2xl">Organizziamo i nostri corsi per adattarsi ai tuoi impegni</p>
        </div>
        <div className="grid gap-6"><ScheduleCard title="Orario Settimanale" subtitle="" schedule={salaArmoniaSchedule} /></div>
        <div className="mt-6 rounded-sm border border-border/80 bg-card p-5 text-center sm:p-6">
          <h3 className="font-serif text-xl font-bold text-primary">Servizi su prenotazione</h3>
          <div className="mt-4 grid gap-3 text-sm font-medium text-foreground md:grid-cols-3">
            {scheduleBookingServices.map((service) => (<div key={service} className="border-b border-border/30 pb-3 last:border-0 md:border-b-0 md:border-r md:last:border-r-0 md:pb-0">{service}</div>))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function PricingSection({ isVisible, setSectionRef }: AnimatedSectionProps) {
  const { ref: staggerRef, visibleCount } = useStagger(pricingCards.length, 120)
  return (
    <section id="prezzi" ref={(element) => { setSectionRef("prezzi", element); if (staggerRef) (staggerRef as React.MutableRefObject<HTMLElement | null>).current = element }} style={{ background: "radial-gradient(ellipse at 85% 40%, #161616 0%, #111111 60%, #080808 100%)" }} className={`bg-card py-24 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
          <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">Iscrizioni & Prezzi</h2>
          <p className="max-w-none text-lg text-pretty text-foreground lg:mx-auto lg:max-w-2xl">Scegli la formula piÃ¹ adatta a te. Per informazioni sui costi contattaci direttamente.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricingCards.map((card, index) => {
            const Icon = card.Icon
            return (
              <div key={card.title} className={`rounded-sm border border-border bg-card p-6 transition-all duration-500 hover:border-primary ${index < visibleCount ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`} style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
                <Icon size={32} className="mb-4 text-primary" />
                <h3 className="mb-3 font-serif text-lg font-bold text-foreground">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 rounded-sm border border-border bg-card p-6 md:grid-cols-2">
          {pricingHighlights.map((item) => { const Icon = item.Icon; return (<div key={item.title} className="flex gap-4"><Icon size={28} className="mt-1 shrink-0 text-primary" /><div><h4 className="mb-2 font-serif font-bold text-foreground">{item.title}</h4><p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p></div></div>) })}
        </div>
        <div className="mt-8 text-center">
          <p className="mb-4 text-sm text-muted-foreground italic">Vuoi sapere di piÃ¹? Contattaci per un preventivo personalizzato - la prima lezione Ã¨ gratuita.</p>
          <a href="#contatti" className="inline-block rounded-sm bg-primary px-8 py-3 font-bold text-primary-foreground">Richiedi Informazioni</a>
        </div>
      </div>
    </section>
  )
}
