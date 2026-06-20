"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type AboutSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  bioOpen: boolean
  setBioOpen: (open: boolean) => void
}

export function AboutSection({ isVisible, setSectionRef }: AboutSectionProps) {
  const imageRef = useRef<HTMLDivElement>(null)
  const [imageScale, setImageScale] = useState(false)

  useEffect(() => {
    if (!imageRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setImageScale(true); observer.disconnect() } },
      { threshold: 0.3 },
    )
    observer.observe(imageRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="chi-siamo"
      ref={(element) => setSectionRef("chi-siamo", element)}
      style={{ background: "radial-gradient(ellipse at 20% 60%, #161616 0%, #111111 60%, #0A0A0A 100%)" }}
      className={`bg-card py-20 transition-all duration-700 sm:py-28 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div
            ref={imageRef}
            className={`transition-transform duration-1000 ${imageScale ? "scale-105" : "scale-100"}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] overflow-hidden rounded-sm border border-border bg-secondary">
              <Image src="/roseballet/chisiamo.jpg" alt="Rose Ballet chi siamo" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
          <div className="mx-auto flex max-w-xl flex-col justify-center self-center lg:mx-0 lg:py-6">
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">CHI SIAMO</p>
            <h2 className="mb-5 font-serif text-4xl font-bold text-foreground sm:text-5xl">Dove la passione per la danza prende vita</h2>
            <p className="mb-5 text-lg leading-relaxed text-pretty text-foreground">Un ambiente accogliente dove tecnica, espressione e crescita personale accompagnano ogni allievo nel proprio percorso artistico.</p>
            <div className="space-y-4 text-lg leading-relaxed text-pretty text-foreground">
              <p>Rose Ballet &egrave; uno spazio dedicato alla danza, alla crescita e all&apos;espressione personale, dove ogni allievo viene accolto con attenzione, passione e professionalit&agrave;.</p>
              <p>Da anni accompagniamo bambini, ragazzi e adulti in un percorso che va oltre l&apos;apprendimento dei passi e delle tecniche: crediamo che la danza sia uno strumento capace di sviluppare disciplina, fiducia, creativit&agrave; e consapevolezza di s&eacute;.</p>
              <p>La nostra scuola offre corsi adatti a tutte le et&agrave; e a diversi livelli di esperienza, creando un ambiente sereno e stimolante in cui ognuno pu&ograve; sentirsi libero di esprimere il proprio talento. Dalla danza classica alla danza moderna, dall&apos;hip hop al pilates, ogni disciplina viene insegnata con cura e attenzione alle esigenze di ogni allievo.</p>
              <p>Situata nel cuore di Napoli, Rose Ballet &egrave; un luogo dove passione, impegno e bellezza si incontrano ogni giorno, trasformando ogni lezione in un&apos;esperienza di crescita, condivisione ed emozione.</p>
              <p>Per noi la danza non &egrave; soltanto movimento: &egrave; arte, energia e un modo unico di raccontare s&eacute; stessi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
