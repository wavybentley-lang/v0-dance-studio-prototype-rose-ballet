"use client"

import { Check, ChevronDown, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import Image from "next/image"
import { type Dispatch, type ReactNode, type SetStateAction, useState } from "react"

import { brand } from "@/lib/site-config"

const courseOptions = ["Gioco Danza", "Danza Classica", "Danza Moderna", "Danza Contemporanea", "Pas de Deux", "Storia della Danza", "Pilates"]

type ContactSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  formSubmitted: boolean
  setFormSubmitted: (submitted: boolean) => void
  formErrors: { [key: string]: boolean }
  setFormErrors: Dispatch<SetStateAction<{ [key: string]: boolean }>>
  formNetworkError: boolean
  setFormNetworkError: (error: boolean) => void
}

export function ContactSection({ isVisible, setSectionRef, formSubmitted, setFormSubmitted, formErrors, setFormErrors, formNetworkError, setFormNetworkError }: ContactSectionProps) {
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState("")
  const [fieldValid, setFieldValid] = useState<Record<string, boolean>>({})

  const validateField = (name: string, value: string) => {
    const trimmed = value.trim()
    let valid = false
    if (name === "email") valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
    else if (name === "telefono") valid = trimmed.length >= 6
    else valid = trimmed.length > 0
    setFieldValid((prev) => ({ ...prev, [name]: valid }))
  }

  return (
    <section id="contatti" ref={(element) => setSectionRef("contatti", element)} style={{ background: "radial-gradient(ellipse at 30% 70%, #141414 0%, #0F0F0F 55%, #0A0A0A 100%)" }} className={`relative border-t border-border bg-[#050505] transition-all duration-700 ${courseDropdownOpen ? "z-[10000]" : "z-10"} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
      <div className="relative overflow-hidden py-24">
        <Image src="/contactformimage.jpg" alt="" fill sizes="100vw" className="pointer-events-none object-cover object-center opacity-55" style={{ maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.2) 100%)" }} aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.85) 75%, #050505 100%)" }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
            <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-center">Vuoi provare un corso?</h2>
            <p className="max-w-none text-lg text-pretty text-foreground lg:mx-auto lg:max-w-2xl">Scrivici e ti aiutiamo a scegliere il percorso piu adatto a te a Rose Ballet. Ti rispondiamo con orari, disponibilita e prossimi passi per iniziare.</p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {formSubmitted ? (
              <div className="animate-float-up py-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8 16L14 22L24 10" stroke="#C0152A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-draw-check" />
                  </svg>
                </div>
                <p className="font-sans text-lg text-primary">Grazie! Il tuo messaggio e stato inviato. Ti risponderemo al piu presto.</p>
                <button onClick={() => setFormSubmitted(false)} className="mt-4 cursor-pointer font-sans text-sm text-muted-foreground underline">Invia un altro messaggio</button>
              </div>
            ) : (
              <form className="space-y-6" action="https://formspree.io/f/mqengdqy" method="POST" onSubmit={async (event) => {
                event.preventDefault()
                const form = event.currentTarget
                const nome = (form.elements.namedItem("nome") as HTMLInputElement).value.trim()
                const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim()
                const telefono = (form.elements.namedItem("telefono") as HTMLInputElement).value.trim()
                const corso = (form.elements.namedItem("corso") as HTMLInputElement).value
                const errors: { [key: string]: boolean } = {}
                if (!nome) errors.nome = true; if (!email) errors.email = true; if (!telefono) errors.telefono = true; if (!corso) errors.corso = true
                if (Object.keys(errors).length > 0) { setFormErrors(errors); return }
                setFormErrors({}); setFormNetworkError(false)
                const data = new FormData(form)
                try {
                  const response = await fetch("https://formspree.io/f/mqengdqy", { method: "POST", body: data, headers: { Accept: "application/json" } })
                  if (!response.ok) throw new Error("network")
                  setFormSubmitted(true); form.reset(); setSelectedCourse(""); setFieldValid({})
                } catch { setFormNetworkError(true) }
              }}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <TextInput id="name" name="nome" label="Nome" placeholder=" " hasError={formErrors.nome} isValid={fieldValid.nome} setFormErrors={setFormErrors} onValidate={validateField} />
                  <TextInput id="email" name="email" label="Email" placeholder=" " type="email" hasError={formErrors.email} isValid={fieldValid.email} setFormErrors={setFormErrors} onValidate={validateField} />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <TextInput id="phone" name="telefono" label="Telefono" placeholder=" " type="tel" hasError={formErrors.telefono} isValid={fieldValid.telefono} setFormErrors={setFormErrors} onValidate={validateField} />
                  <div>
                    <label htmlFor="course" className="mb-2 block text-[12px] font-semibold tracking-wider text-white uppercase">Corso di Interesse</label>
                    <div className="relative z-[10010]" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setCourseDropdownOpen(false) }}>
                      <input type="hidden" name="corso" value={selectedCourse} />
                      <button id="course" type="button" className="flex w-full items-center justify-between rounded-xl bg-[#0A0A0A] px-4 py-3 text-left text-white shadow-[0_12px_32px_rgba(0,0,0,0.32)] transition-[border-color,box-shadow] hover:border-[#D4AF37]/40 focus:border-[rgba(212,175,55,0.75)] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12),0_12px_32px_rgba(0,0,0,0.32)] focus:outline-none" style={{ border: `1px solid ${formErrors.corso ? "var(--template-error)" : "rgba(212,175,55,0.25)"}` }} onClick={() => { setCourseDropdownOpen((open) => !open); setFormErrors((previous) => ({ ...previous, corso: false })) }} aria-haspopup="listbox" aria-expanded={courseDropdownOpen}>
                        <span className={selectedCourse ? "text-white" : "text-white/60"}>{selectedCourse || "Seleziona un'opzione"}</span>
                        <ChevronDown size={16} className={`ml-3 shrink-0 text-[#D4AF37] transition-transform ${courseDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      {courseDropdownOpen && (
                        <div className="absolute right-0 left-0 z-[10020] mt-2 overflow-hidden rounded-xl bg-[#0A0A0A] shadow-[0_22px_60px_rgba(0,0,0,0.72)]" style={{ border: "1px solid rgba(212,175,55,0.25)" }} role="listbox">
                          {courseOptions.map((course) => (<button key={course} type="button" className="block min-h-12 w-full border-b border-[rgba(212,175,55,0.15)] bg-[#0A0A0A] px-4 py-3 text-left text-sm font-semibold tracking-wide text-white transition-colors duration-200 last:border-b-0 hover:bg-[rgba(212,175,55,0.14)] hover:text-white focus:bg-[rgba(212,175,55,0.14)] focus:text-white focus:outline-none" onClick={() => { setSelectedCourse(course); setCourseDropdownOpen(false); setFormErrors((previous) => ({ ...previous, corso: false })); validateField("corso", course) }} role="option" aria-selected={selectedCourse === course}>{course}</button>))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="floating-label-group">
                  <textarea id="message" name="messaggio" rows={4} className="w-full resize-none rounded-xl border bg-[#0A0A0A] px-4 py-3 text-white shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition-[border-color,box-shadow] placeholder:text-transparent focus:border-[rgba(212,175,55,0.75)] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12),0_12px_32px_rgba(0,0,0,0.28)] focus:outline-none" style={{ borderColor: "rgba(212,175,55,0.25)" }} placeholder=" " />
                  <label htmlFor="message">Messaggio</label>
                </div>
                <button type="submit" className="w-full cursor-pointer rounded-full bg-primary py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-[#A93226] hover:shadow-primary/35 active:translate-y-0 active:scale-[0.99]">Invia Messaggio</button>
                <a href={brand.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366] bg-[#25D366] py-4 text-lg font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 hover:bg-[#1DB954] hover:shadow-[#25D366]/35 active:translate-y-0 active:scale-[0.99]">
                  <MessageCircle size={20} /> Scrivici su WhatsApp
                </a>
                {formNetworkError && <p className="mt-3 font-sans text-sm text-[var(--template-error)]">Si e verificato un errore. Riprova o scrivici direttamente.</p>}
              </form>
            )}
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">Contatti</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4" id="sedi"><MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-primary" /><div><div className="mb-2 font-semibold text-foreground">Indirizzo</div><div className="text-foreground">{brand.primaryLocation}<br />{brand.secondaryLocation}<br />{brand.cityLine}</div></div></div>
                  <ContactLink href={brand.phoneHref} icon={<Phone className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-transform group-hover:scale-110" />} label="Telefono" value={brand.phone} />
                  <ContactLink href={brand.whatsappHref} icon={<MessageCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-transform group-hover:scale-110" />} label="WhatsApp" value={brand.phone} />
                  <ContactLink href={brand.emailHref} icon={<Mail className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-transform group-hover:scale-110" />} label="Email" value={brand.email} />
                  <ContactLink href={brand.facebookHref} icon={<MessageCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-transform group-hover:scale-110" />} label="Facebook" value="Rose Ballet" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 bg-[#050505] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">Dove Siamo</h3>
          <div className="aspect-video w-full overflow-hidden rounded-sm border border-border md:aspect-[21/9]">
            <iframe src={brand.mapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TextInput({ id, name, label, placeholder, hasError, isValid, setFormErrors, onValidate, type = "text" }: {
  id: string; name: string; label: string; placeholder: string; hasError?: boolean; isValid?: boolean; setFormErrors: Dispatch<SetStateAction<{ [key: string]: boolean }>>; onValidate: (name: string, value: string) => void; type?: string
}) {
  return (
    <div className="floating-label-group">
      <input type={type} id={id} name={name} className={`w-full rounded-xl bg-[#0A0A0A] px-4 py-3 pr-10 text-white shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition-[border-color,box-shadow] placeholder:text-transparent focus:border-[rgba(212,175,55,0.75)] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12),0_12px_32px_rgba(0,0,0,0.28)] focus:outline-none ${hasError ? "border-[var(--template-error)]" : ""}`} style={{ border: hasError ? undefined : "1px solid rgba(212,175,55,0.25)" }} onFocus={() => setFormErrors((previous) => ({ ...previous, [name]: false }))} onBlur={(e) => onValidate(name, e.currentTarget.value)} placeholder={placeholder} />
      <label htmlFor={id}>{label}</label>
      {isValid && !hasError && (<Check size={16} className="absolute right-3 top-3.5 text-[#25D366] transition-opacity" />)}
    </div>
  )
}

function ContactLink({ href, icon, label, value }: { href: string; icon: ReactNode; label: string; value: string }) {
  return (<a href={href} className="group flex cursor-pointer items-start gap-4">{icon}<div><div className="font-semibold text-foreground transition-colors group-hover:text-primary">{label}</div><div className="text-foreground transition-colors group-hover:text-primary">{value}</div></div></a>)
}
