"use client"

import { Phone } from "lucide-react"
import { useEffect, useState } from "react"

import { brand } from "@/lib/site-config"

type FloatingActionsProps = {
  whatsappHover: boolean
  setWhatsappHover: (hover: boolean) => void
  cookieVisible: boolean
  cookieFading: boolean
  acceptCookies: () => void
}

export function FloatingActions({ whatsappHover, setWhatsappHover, cookieVisible, cookieFading, acceptCookies }: FloatingActionsProps) {
  const [showBadge, setShowBadge] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowBadge(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="fixed right-0 bottom-0 left-0 z-[80] flex h-16 items-center border-t border-primary/25 bg-[#12060E]/98 px-3 shadow-[0_-10px_30px_rgba(0,0,0,0.45)] backdrop-blur-md md:hidden">
        <div className="flex w-full gap-2">
          <a href={brand.phoneHref} className="flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/30 bg-[#21100B] px-4 py-3 font-semibold text-[#F5EDD8] transition-colors hover:border-primary/55 hover:bg-[#2B150E]"><Phone size={18} />Chiamaci</a>
          <a href="#contatti" className="flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-3 font-bold text-primary-foreground shadow-sm shadow-primary/30 transition-colors hover:bg-[#A93226]">Iscriviti Ora</a>
        </div>
      </div>
      <div className="h-16 md:hidden" />
      <div style={{ position: "fixed", zIndex: 9000 }} className={`right-4 flex items-center gap-2 md:right-6 ${cookieVisible ? "bottom-44 md:bottom-24" : "bottom-20 md:bottom-6"}`} onMouseEnter={() => setWhatsappHover(true)} onMouseLeave={() => setWhatsappHover(false)}>
        {whatsappHover && (<span className="hidden rounded-sm border border-border bg-[var(--template-nav-bg)] px-3 py-1 text-xs whitespace-nowrap text-foreground md:inline">Scrivici su WhatsApp</span>)}
        <a href={brand.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Scrivici su WhatsApp" className="relative flex h-14 w-14 items-center justify-center rounded-full" style={{ background: "#25D366", boxShadow: "0 0 0 1px rgba(255,255,255,0.18), 0 8px 22px rgba(37, 211, 102, 0.42)", transform: whatsappHover ? "scale(1.1)" : "scale(1)", transition: "transform 0.2s ease", cursor: "pointer" }} onClick={() => setShowBadge(false)}>
          <svg viewBox="0 0 24 24" fill="white" width={28} height={28}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          {showBadge && (<span className="animate-badge-bounce absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C0152A] text-[10px] font-bold text-white shadow-sm">1</span>)}
        </a>
      </div>
      {cookieVisible && (
        <div style={{ position: "fixed", left: 0, right: 0, zIndex: 8999, opacity: cookieFading ? 0 : 1, transition: cookieFading ? "opacity 0.3s ease" : "opacity 0.5s ease" }} className="bottom-16 flex flex-col items-start justify-between gap-3 border-t border-border bg-[var(--template-nav-bg)] px-6 py-3 md:bottom-0 md:flex-row md:items-center">
          <p className="line-clamp-2 max-w-2xl font-sans text-sm text-muted-foreground md:line-clamp-none">Questo sito utilizza cookie tecnici necessari al funzionamento. Continuando la navigazione accetti il loro utilizzo.</p>
          <div className="flex w-full flex-row gap-2 md:w-auto md:gap-3">
            <button onClick={acceptCookies} className="flex-1 rounded-sm bg-primary px-6 py-2 font-bold text-primary-foreground md:w-auto md:flex-none">Accetta</button>
            <a href="/privacy-policy" className="flex-1 rounded-sm border border-border bg-transparent px-6 py-2 text-center text-muted-foreground md:w-auto md:flex-none">Scopri di più</a>
          </div>
        </div>
      )}
    </>
  )
}
