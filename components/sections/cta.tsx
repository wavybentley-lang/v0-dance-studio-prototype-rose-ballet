type CtaBannerProps = {
  eyebrow?: string
  text: string
  buttonLabel: string
}

export function CtaBanner({ eyebrow, text, buttonLabel }: CtaBannerProps) {
  return (
    <section className="animate-gradient-shift border-t border-b border-primary/20 py-8 sm:py-10" style={{ background: "linear-gradient(135deg, #8B0E1E 0%, #C0152A 30%, #A93226 50%, #C0152A 70%, #8B0E1E 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-1 font-serif text-lg tracking-wide text-white sm:text-xl" dangerouslySetInnerHTML={{ __html: text }} />
        {eyebrow && <p className="mb-4 text-sm text-muted-foreground">{eyebrow}</p>}
        {!eyebrow && <div className="mb-4" />}
        <a href="#contatti" className="animate-pulse-glow-white inline-block rounded-full border-2 border-white px-10 py-3 font-semibold text-white transition-all hover:bg-white hover:text-[#C0152A]" style={{ background: "transparent" }}>
          {buttonLabel}
        </a>
      </div>
    </section>
  )
}
