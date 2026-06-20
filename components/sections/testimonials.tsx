"use client"

import { Star } from "lucide-react"

const reviews = [
  { name: "Tina Merolla", time: "2 anni fa", text: "Faccio questa recensione per elogiare il meraviglioso lavoro fatto dai maestri ogni giorno sui nostri figli. Un lavoro fatto di amore, dedizione, pazienza e rispetto. Rose Ballet e una scuola da consigliare per la bravura dei professionisti che ci lavorano e per lattenzione costante verso famiglie e allievi." },
  { name: "Amedeo Buono", time: "2 anni fa", text: "Sono il papa di una allieva e da quando mia figlia e iscritta a Rose Ballet ha una luce diversa negli occhi. La danza e sempre stata la sua passione, ma qui ha trovato un ambiente gentile, professionale e capace di farla crescere con entusiasmo." },
  { name: "Quirina Bruccoleri", time: "2 anni fa", text: "Ho letto una recensione negativa e ci tengo a evidenziare la professionalita e lumilta della maestra. Aiuta i suoi allievi fino alla fine, con correttezza, dedizione e grande attenzione. Ottima scuola, ottimi docenti." },
]

export function TestimonialsSection() {
  return (
    <section className="bg-[#050505] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 px-4 text-left lg:px-0 lg:text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">Recensioni Google verificate</p>
          <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">Dicono di noi</h2>
          <p className="max-w-none text-lg text-pretty text-muted-foreground lg:mx-auto lg:max-w-2xl">Le parole di chi vive ogni giorno l&apos;esperienza Rose Ballet.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex h-full flex-col rounded-xl border border-[rgba(212,175,55,0.25)] bg-[#0A0A0A] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex gap-1 text-[#D4AF37]" aria-label="5 stelle">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} size={17} fill="currentColor" />))}</div>
                <span className="rounded-full border border-[rgba(212,175,55,0.25)] px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#D4AF37] uppercase">Recensione Google</span>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/88">{review.text}</p>
              <div className="mt-6 border-t border-[rgba(212,175,55,0.15)] pt-4">
                <div className="font-serif text-xl font-semibold text-white">{review.name}</div>
                <div className="mt-1 text-xs font-medium tracking-[0.14em] text-white/45 uppercase">{review.time}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="https://maps.google.com/?q=Via+Salvator+Rosa+157E+Napoli+Italy" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border-2 border-[#D4AF37]/70 px-8 py-3 font-semibold text-white transition-all hover:bg-[#D4AF37] hover:text-[#050505]">Leggi tutte le recensioni su Google</a>
        </div>
      </div>
    </section>
  )
}
