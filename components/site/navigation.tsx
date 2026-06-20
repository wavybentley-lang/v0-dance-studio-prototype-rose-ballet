"use client"

import { ChevronRight, Menu, Sparkles, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { brand, type NavLink } from "@/lib/site-config"

type NavigationProps = {
  navLinks: NavLink[]
  activeSection: string | null
  isScrolled: boolean
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export function Navigation({ navLinks, activeSection, isScrolled, mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  const touchStartXRef = useRef<number | null>(null)
  const [announcementVisible, setAnnouncementVisible] = useState(false)
  const [announcementFading, setAnnouncementFading] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem("announcementDismissed")
    if (!dismissed) {
      setAnnouncementVisible(true)
      const timer = setTimeout(() => { setAnnouncementFading(true); setTimeout(() => { setAnnouncementVisible(false); sessionStorage.setItem("announcementDismissed", "true") }, 400) }, 8000)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismissAnnouncement = () => { setAnnouncementFading(true); setTimeout(() => { setAnnouncementVisible(false); sessionStorage.setItem("announcementDismissed", "true") }, 400) }
  const scrollOpacity = isScrolled ? 1 : 0

  return (
    <>
      {announcementVisible && (
        <div className={`fixed top-0 left-0 right-0 z-[60] border-b border-[#D4AF37]/30 transition-all duration-400 ${announcementFading ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`} style={{ background: "linear-gradient(90deg, #1A0A0A 0%, #2A0E1A 50%, #1A0A0A 100%)" }}>
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 sm:px-6 lg:px-8">
            <Sparkles size={14} className="text-[#D4AF37]" />
            <span className="text-center text-xs font-medium tracking-wide text-white/80 sm:text-sm">La prima lezione &egrave; gratuita &mdash; vieni a provare senza impegno</span>
            <button onClick={dismissAnnouncement} className="ml-2 text-white/40 transition-colors hover:text-white/80" aria-label="Dismiss"><X size={14} /></button>
          </div>
        </div>
      )}
      <nav className={`fixed left-0 right-0 transition-all duration-500 ${mobileMenuOpen ? "z-[9500]" : "z-50"} ${announcementVisible && !announcementFading ? "top-[36px]" : "top-0"}`} style={{ backgroundColor: `rgba(10,10,10,${0.05 + scrollOpacity * 0.95})`, backdropFilter: `blur(${isScrolled ? 16 : 4}px)`, borderBottom: isScrolled ? "1px solid rgba(192,21,42,0.2)" : "1px solid rgba(192,21,42,0.1)", boxShadow: isScrolled ? "0 18px 60px rgba(10,10,10,0.95)" : "none" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-28 items-center justify-between gap-5 py-5 sm:h-32 lg:h-32">
            <a href="#" className="relative z-[60] flex max-w-[260px] flex-col items-start leading-none sm:max-w-[320px]">
              <span className="pointer-events-none absolute -left-8 top-1/2 h-24 w-56 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,185,120,0.18)_0%,rgba(158,111,111,0.08)_38%,transparent_72%)] blur-xl" />
              <span className="relative font-serif text-[2.35rem] leading-[0.82] font-semibold tracking-wide text-[#F5F5F5] italic sm:text-[3.05rem]" style={{ textShadow: "0 0 28px rgba(216,185,120,0.22)" }}>{brand.shortName}</span>
            </a>
            <div className="hidden items-center gap-8 lg:flex">
              <div className="flex items-center gap-7">
                {navLinks.map((link) => (<a key={link.href} href={link.href} className={`relative py-2 text-[12px] font-semibold tracking-[0.16em] uppercase transition-all duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-white after:transition-all after:duration-300 ${activeSection === link.href.slice(1) ? "text-[#F5F5F5] after:w-full after:opacity-80" : "text-[#F5F5F5]/62 after:w-0 after:opacity-0 hover:text-[#F5F5F5] hover:after:w-full hover:after:opacity-55"}`}>{link.label}</a>))}
              </div>
              <a href="#contatti" className="animate-pulse-glow-white rounded-full border-2 border-white px-6 py-2 font-semibold text-white transition-all hover:bg-white hover:text-[#0F0F0F]">Iscriviti Ora</a>
            </div>
            <button className="z-[9520] rounded-full border border-[#C0152A]/30 bg-[#0F0F0F] p-2 text-[#F5F5F5] shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-300 hover:border-[#C0152A]/60 lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">{mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
          </div>
        </div>
        <div className={`fixed inset-0 z-[9500] flex min-h-[100dvh] w-screen items-center justify-center bg-[rgba(10,10,10,0.95)] px-4 py-20 backdrop-blur-xl transition-all duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setMobileMenuOpen(false)} onTouchStart={(event) => { touchStartXRef.current = event.touches[0].clientX }} onTouchEnd={(event) => { if (touchStartXRef.current !== null) { const delta = event.changedTouches[0].clientX - touchStartXRef.current; if (delta > 60) setMobileMenuOpen(false); touchStartXRef.current = null } }}>
          <div className={`relative w-[calc(100%-32px)] max-w-[430px] overflow-hidden rounded-[1.35rem] border border-white/20 bg-[#0F0F0F] p-6 shadow-[0_24px_70px_rgba(10,10,10,0.95)] transition-all duration-300 sm:p-7 ${mobileMenuOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"}`} onClick={(event) => event.stopPropagation()}>
            <div className="pointer-events-none absolute inset-x-8 top-0 h-36 rounded-full bg-[radial-gradient(circle,rgba(216,185,120,0.18)_0%,rgba(158,111,111,0.08)_42%,transparent_72%)] blur-2xl" />
            <div className="relative mb-6 border-b border-white/15 pb-6 text-center">
              <p className="mt-2 font-serif text-[2.75rem] leading-[0.82] font-semibold tracking-wide text-[#F5F5F5] italic" style={{ textShadow: "0 0 28px rgba(216,185,120,0.22)" }}>{brand.shortName}</p>
            </div>
            <div className="relative flex flex-col gap-2.5">
              {navLinks.map((link) => (<a key={link.href} href={link.href} className="group flex min-h-14 items-center justify-between rounded-xl border border-white/15 bg-[#1A1A1A]/88 px-4 py-3.5 text-sm font-semibold tracking-[0.14em] text-[#F5F5F5]/82 uppercase shadow-sm shadow-black/20 transition-all duration-300 hover:border-white/40 hover:bg-[#1A1A1A] hover:text-[#F5F5F5] active:scale-[0.99]" onClick={() => setMobileMenuOpen(false)}><span>{link.label}</span><ChevronRight size={17} className="text-white/60 transition-transform group-hover:translate-x-0.5 group-hover:text-white" /></a>))}
              <a href="#contatti" className="rounded-full border-2 border-white px-6 py-2 font-semibold text-white transition-all hover:bg-white hover:text-[#0F0F0F]" onClick={() => setMobileMenuOpen(false)}>Iscriviti Ora</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
