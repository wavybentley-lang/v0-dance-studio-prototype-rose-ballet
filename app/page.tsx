"use client"

import { useEffect, useRef, useState } from "react"

import { AboutSection } from "@/components/sections/about"
import { ClassesSection } from "@/components/sections/classes"
import { ContactSection } from "@/components/sections/contact"
import { CtaBanner } from "@/components/sections/cta"
import { GallerySection } from "@/components/sections/gallery"
import { HeroSection } from "@/components/sections/hero"
import { PricingSection, ScheduleSection } from "@/components/sections/schedule-pricing"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FloatingActions } from "@/components/site/floating-actions"
import { Footer } from "@/components/site/footer"
import { Navigation } from "@/components/site/navigation"
import { navLinks } from "@/lib/site-config"

export default function DanceStudioTemplate() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const intersectingRef = useRef<Map<string, number>>(new Map())
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const [enlargedPhoto, setEnlargedPhoto] = useState<string | null>(null)
  const [bioOpen, setBioOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState<{ [key: string]: boolean }>({})
  const [formNetworkError, setFormNetworkError] = useState(false)
  const [cookieVisible, setCookieVisible] = useState(false)
  const [cookieFading, setCookieFading] = useState(false)
  const [whatsappHover, setWhatsappHover] = useState(false)
  const [coursesExpanded, setCoursesExpanded] = useState(false)
  const [mouseX, setMouseX] = useState(0.5)
  const [mouseY, setMouseY] = useState(0.5)

  const setSectionRef = (id: string, element: HTMLElement | null) => { sectionRefs.current[id] = element }

  useEffect(() => { if (!localStorage.getItem("cookieConsent")) setCookieVisible(true) }, [])

  const acceptCookies = () => { setCookieFading(true); setTimeout(() => { localStorage.setItem("cookieConsent", "accepted"); setCookieVisible(false); setCookieFading(false) }, 300) }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    let raf: number
    const handleMouseMove = (e: MouseEvent) => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { setMouseX(e.clientX / window.innerWidth); setMouseY(e.clientY / window.innerHeight) }) }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => { window.removeEventListener("mousemove", handleMouseMove); cancelAnimationFrame(raf) }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { intersectingRef.current.set(entry.target.id, entry.intersectionRatio); setVisibleSections((previous) => new Set([...previous, entry.target.id])) }
        else { intersectingRef.current.delete(entry.target.id) }
      })
      let best: string | null = null; let bestRatio = 0
      intersectingRef.current.forEach((ratio, id) => { if (ratio > bestRatio) { bestRatio = ratio; best = id } })
      setActiveSection(best)
    }, { threshold: [0.1, 0.25, 0.5] })
    Object.values(sectionRefs.current).forEach((ref) => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  useEffect(() => { document.body.style.overflow = enlargedPhoto ? "hidden" : ""; return () => { document.body.style.overflow = "" } }, [enlargedPhoto])

  useEffect(() => {
    if (!enlargedPhoto) return
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setEnlargedPhoto(null) }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [enlargedPhoto])

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ background: "radial-gradient(circle at 12% 18%, rgba(192,21,42,0.10), transparent 28%), radial-gradient(circle at 88% 42%, rgba(139,14,30,0.10), transparent 32%), var(--background)" }}>
      <Navigation navLinks={navLinks} activeSection={activeSection} isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection mouseX={mouseX} mouseY={mouseY} />
      <AboutSection isVisible={visibleSections.has("chi-siamo")} setSectionRef={setSectionRef} bioOpen={bioOpen} setBioOpen={setBioOpen} />
      <ClassesSection isVisible={visibleSections.has("corsi")} setSectionRef={setSectionRef} coursesExpanded={coursesExpanded} setCoursesExpanded={setCoursesExpanded} />
      <CtaBanner eyebrow="Scuola di Danza diretta da Melania e Rossella Mellino" text="La prima lezione &egrave; gratuita &mdash; vieni a trovarci" buttonLabel="Prenota Ora" />
      <ScheduleSection isVisible={visibleSections.has("orari")} setSectionRef={setSectionRef} />
      <PricingSection isVisible={visibleSections.has("prezzi")} setSectionRef={setSectionRef} />
      <GallerySection isVisible={visibleSections.has("gallery")} setSectionRef={setSectionRef} enlargedPhoto={enlargedPhoto} setEnlargedPhoto={setEnlargedPhoto} />
      <TestimonialsSection />
      <ContactSection isVisible={visibleSections.has("contatti")} setSectionRef={setSectionRef} formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} formErrors={formErrors} setFormErrors={setFormErrors} formNetworkError={formNetworkError} setFormNetworkError={setFormNetworkError} />
      <Footer navLinks={navLinks} />
      <FloatingActions whatsappHover={whatsappHover} setWhatsappHover={setWhatsappHover} cookieVisible={cookieVisible} cookieFading={cookieFading} acceptCookies={acceptCookies} />
    </div>
  )
}
