"use client"

import React, { useEffect, useState } from "react"
import { ChevronRight, Facebook, Menu, Phone, X } from "lucide-react"

import { brand, navLinks as siteNavLinks } from "@/lib/site-config"

const navLinks = siteNavLinks.map((link) => ({ ...link, href: `/${link.href}` }))

const sections = [
  {
    title: "Titolare del Trattamento",
    content: `${brand.name}\n${brand.primaryLocation}\n${brand.secondaryLocation}\n${brand.cityLine}\nTelefono: ${brand.phone}`,
  },
  {
    title: "Dati Raccolti",
    content: "Il presente sito web raccoglie i seguenti dati personali forniti volontariamente dall'utente tramite il modulo di contatto:\n\n- Nome e cognome\n- Indirizzo email\n- Numero di telefono\n- Corso di interesse\n- Messaggio\n\nQuesti dati vengono utilizzati esclusivamente per rispondere alle richieste di informazioni e non vengono ceduti a terzi.",
  },
  {
    title: "Cookie",
    content: "Questo sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento delle pagine. Non vengono utilizzati cookie di profilazione, cookie di tracciamento o cookie pubblicitari.\n\nI cookie tecnici non richiedono il consenso dell'utente ai sensi della normativa vigente.",
  },
  {
    title: "Base Giuridica del Trattamento",
    content: "Il trattamento dei dati personali e basato sul consenso dell'utente (Art. 6, lett. a, GDPR) espresso al momento dell'invio del modulo di contatto.",
  },
  {
    title: "Conservazione dei Dati",
    content: "I dati personali forniti tramite il modulo di contatto vengono conservati per il tempo strettamente necessario a gestire la richiesta e comunque non oltre 12 mesi.",
  },
  {
    title: "Diritti dell'Utente",
    content: "In conformita al GDPR, l'utente ha diritto a:\n\n- Accedere ai propri dati personali\n- Richiedere la rettifica o la cancellazione dei dati\n- Opporsi al trattamento\n- Richiedere la portabilita dei dati\n\nPer esercitare questi diritti e possibile contattarci telefonicamente o tramite il modulo di contatto del sito.",
  },
  {
    title: "Servizi di Terze Parti",
    content: "Il sito utilizza Formspree (formspree.io) per la gestione del modulo di contatto. I dati inviati tramite il modulo sono soggetti anche alla Privacy Policy di Formspree, disponibile su formspree.io/legal/privacy-policy",
  },
  {
    title: "Modifiche alla Privacy Policy",
    content: "Il Titolare si riserva il diritto di modificare la presente Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con l'aggiornamento della data in cima al documento.",
  },
]

export default function PrivacyPolicyPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "border-b border-[#C9980A44] bg-[#0F0E0A]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between py-4 sm:h-28 lg:h-24">
            <a href="/" className="z-[60] flex flex-col space-y-0">
              <span className="font-serif text-3xl font-semibold tracking-wide text-[#F5EDD8]">{brand.shortName}</span>
            </a>

            <div className="hidden items-center gap-10 lg:flex">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-sm font-medium text-[#F5EDD8] transition-colors hover:text-[#C9980A]">
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="/#contatti"
                className="rounded-sm bg-[#C9980A] px-7 py-3 text-sm font-bold text-[#0F0E0A] transition-all hover:scale-105 hover:bg-[#C9980A]/90 active:scale-95"
              >
                Iscriviti Ora
              </a>
            </div>

            <button
              className="z-[9520] rounded-full border border-[#C9980A]/35 bg-[#12060E]/95 p-2 text-[#F5EDD8] shadow-lg shadow-black/40 backdrop-blur-md lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 z-[9500] flex min-h-[100dvh] w-screen items-center justify-center bg-[rgba(8,3,6,0.98)] px-4 py-20 backdrop-blur-xl transition-all duration-300 lg:hidden ${
            mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={`w-[calc(100%-32px)] max-w-[420px] rounded-[1.35rem] border border-[#C9980A]/25 bg-[#12060E]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] transition-all duration-300 sm:p-7 ${
              mobileMenuOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 border-b border-[#C9980A]/15 pb-5 text-center">
              <p className="text-[9px] font-medium tracking-[0.32em] text-[#F5EDD8]/65 uppercase">SCUOLA DI DANZA</p>
              <p
                className="mt-1 font-serif text-[2.35rem] leading-[0.9] font-semibold tracking-wide text-[#F5EDD8]"
                style={{ textShadow: "0 0 22px rgba(212,168,83,0.22)" }}
              >
                {brand.shortName}
              </p>
              <p className="mt-2 text-[9px] font-semibold tracking-[0.28em] text-[#C9980A]/85 uppercase">{brand.tagline}</p>
            </div>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-14 items-center justify-between rounded-xl border border-[#C9980A]/20 bg-[#1A0B10]/90 px-4 py-3.5 text-base font-semibold tracking-wide text-[#F5EDD8] shadow-sm shadow-black/20 transition-all hover:border-[#C9980A]/55 hover:bg-[#241014] active:scale-[0.99]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={17} className="text-[#C9980A]/70 transition-transform group-hover:translate-x-0.5 group-hover:text-[#C9980A]" />
                </a>
              ))}
              <a
                href="/#contatti"
                className="mt-5 rounded-full bg-[#C9980A] px-6 py-4 text-center text-lg font-bold text-[#0F0E0A] shadow-lg shadow-[#C9980A]/25 transition-transform hover:bg-[#D4A853] active:scale-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                Iscriviti Ora
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-24">
        <a href="/" className="mb-8 block font-sans text-sm" style={{ color: "#C9980A" }}>
          Torna al sito
        </a>

        <h1 className="mb-4 font-serif text-4xl" style={{ color: "#F5EDD8" }}>
          Privacy Policy
        </h1>
        <p className="mb-12 font-sans text-sm" style={{ color: "#B8A080" }}>
          Ultimo aggiornamento: Aprile 2025
        </p>

        {sections.map((section, index) => (
          <div key={section.title}>
            <h2 className="mb-3 font-serif text-xl" style={{ color: "#C9980A" }}>
              {section.title}
            </h2>
            <p className="mb-8 whitespace-pre-line font-sans text-sm leading-relaxed" style={{ color: "#B8A080" }}>
              {section.content}
            </p>
            {index < sections.length - 1 && <div style={{ borderBottom: "1px solid #2A2010" }} className="mb-8" />}
          </div>
        ))}
      </main>

      <footer className="border-t border-[#C9980A33] bg-card pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <a href="/" className="mb-6 flex items-center gap-3">
                <span className="font-serif text-3xl font-semibold tracking-wide text-[#F5EDD8]">{brand.shortName}</span>
              </a>
              <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-[#B8A080]">{brand.tagline}</p>
            </div>

            <div>
              <h4 className="mb-6 text-sm font-semibold tracking-wider text-[#F5EDD8] uppercase">Link Rapidi</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="inline-block text-sm text-[#B8A080] transition-all duration-200 hover:translate-x-0.5 hover:text-[#C9980A]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-sm font-semibold tracking-wider text-[#F5EDD8] uppercase">Seguici</h4>
              <div className="flex gap-5">
                <a href={brand.facebookHref} target="_blank" rel="noopener noreferrer" className="text-[#B8A080] transition-colors hover:text-[#C9980A]" aria-label="Facebook">
                  <Facebook size={26} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#2A2010] pt-8 text-center text-xs text-[#B8A080]">{brand.copyright}</div>
        </div>
      </footer>

      <div className="fixed right-0 bottom-0 left-0 z-50 flex h-14 items-center border-t border-[#2A2010] bg-[#0F0E0A] md:hidden">
        <div className="flex w-full">
          <a href={brand.phoneHref} className="flex flex-1 items-center justify-center gap-2 bg-transparent font-semibold text-[#F5EDD8] transition-colors">
            <Phone size={18} />
            Chiamaci
          </a>
          <a href="/#contatti" className="flex flex-1 items-center justify-center bg-[#C9980A] font-semibold text-[#0A0905] transition-colors">
            Iscriviti Ora
          </a>
        </div>
      </div>
    </div>
  )
}
