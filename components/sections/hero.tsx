"use client"

import { ChevronRight, MessageCircle } from "lucide-react"
import { useEffect, useRef } from "react"

import { brand, stats } from "@/lib/site-config"
import { useCounter } from "@/hooks/use-counter"

function StatCounter({ stat }: { stat: typeof stats[number] }) {
  const numericMatch = stat.number.match(/^(\d+)/)
  const numericPart = numericMatch ? parseInt(numericMatch[1], 10) : 0
  const suffix = stat.number.replace(/^(\d+)/, "")
  const { count, ref } = useCounter(numericPart, 1400)

  if (numericMatch) {
    return (
      <div ref={ref} className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 shadow-sm backdrop-blur-sm">
        <div className="mb-1 font-serif text-3xl font-semibold text-[#C0152A] sm:text-4xl">
          {count}{suffix}
        </div>
        <div className="text-xs font-medium tracking-[0.18em] text-white/50 uppercase sm:text-sm">{stat.label}</div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 shadow-sm backdrop-blur-sm">
      <div className="mb-1 font-serif text-3xl font-semibold text-[#C0152A] sm:text-4xl">{stat.number}</div>
      <div className="text-xs font-medium tracking-[0.18em] text-white/50 uppercase sm:text-sm">{stat.label}</div>
    </div>
  )
}

export function HeroSection({ mouseX = 0.5, mouseY = 0.5 }: { mouseX?: number; mouseY?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: mouseX, y: mouseY })

  useEffect(() => { mouseRef.current = { x: mouseX, y: mouseY } }, [mouseX, mouseY])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()

    const COLORS = [
      "rgba(192,21,42,ALPHA)", "rgba(139,14,30,ALPHA)", "rgba(212,36,59,ALPHA)",
      "rgba(160,18,35,ALPHA)", "rgba(220,80,90,ALPHA)", "rgba(100,10,20,ALPHA)",
    ]
    const rand = (a: number, b: number) => a + Math.random() * (b - a)

    type Bubble = { x: number; y: number; r: number; speedY: number; speedX: number; alpha: number; colorTemplate: string; wobble: number; wobbleSpeed: number; baseX: number }

    const createBubble = (forceBottom = false): Bubble => {
      const bx = rand(0, canvas.width)
      return { x: bx, y: forceBottom ? canvas.height + 40 : rand(-40, canvas.height + 40), r: rand(8, 38), speedY: rand(0.18, 0.55), speedX: rand(-0.12, 0.12), alpha: rand(0.04, 0.18), colorTemplate: COLORS[Math.floor(Math.random() * COLORS.length)], wobble: rand(0, Math.PI * 2), wobbleSpeed: rand(0.004, 0.014), baseX: bx }
    }

    const bubbles: Bubble[] = Array.from({ length: 38 }, () => createBubble())
    let raf: number

    const drawBubble = (b: Bubble) => {
      ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
      ctx.fillStyle = b.colorTemplate.replace("ALPHA", b.alpha.toFixed(2)); ctx.fill()
      const grd = ctx.createRadialGradient(b.x - b.r * 0.3, b.y - b.r * 0.35, b.r * 0.05, b.x, b.y, b.r)
      grd.addColorStop(0, `rgba(255,255,255,${(b.alpha * 1.4).toFixed(2)})`)
      grd.addColorStop(1, "rgba(255,255,255,0)")
      ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.fillStyle = grd; ctx.fill()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = mouseRef.current.x; const my = mouseRef.current.y
      const offsetX = (mx - 0.5) * -20; const offsetY = (my - 0.5) * -12
      for (const b of bubbles) {
        b.wobble += b.wobbleSpeed
        b.x = b.baseX + Math.sin(b.wobble) * 4 + b.speedX + offsetX * (b.r / 38)
        b.y -= b.speedY + offsetY * 0.02
        drawBubble(b)
        if (b.y + b.r < 0) { Object.assign(b, createBubble(true)); b.baseX = b.x }
      }
      raf = requestAnimationFrame(animate)
    }
    animate()
    window.addEventListener("resize", resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize) }
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" style={{ background: "radial-gradient(ellipse at 70% 30%, #5C1535 0%, #3D0D26 50%, #250818 100%)" }}>
      <canvas ref={canvasRef} id="bokehCanvas" className="pointer-events-none absolute inset-0 z-[1] h-full w-full" />
      <div className="grain-overlay absolute inset-0 z-[2] pointer-events-none" />
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at 75% 25%, rgba(192,21,42,0.22) 0%, rgba(139,14,30,0.12) 40%, transparent 65%), linear-gradient(135deg, rgba(15,15,15,0.98) 0%, rgba(22,22,22,0.95) 100%)" }} />
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(circle at 15% 80%, rgba(192,21,42,0.08) 0%, transparent 30%), radial-gradient(circle at 90% 15%, rgba(139,14,30,0.10) 0%, transparent 35%)" }} />
      <div className="absolute inset-y-0 right-0 z-0 w-full [background-position:center_8%] sm:[background-position:center_15%] lg:w-[62%]" style={{ backgroundImage: "url('/roseballet/hero.jpg')", backgroundPosition: "center 15%", backgroundSize: "cover" }}>
        <div className="pointer-events-none absolute inset-0 z-[2]" style={{ background: ["linear-gradient(to right, #0F0F0F 0%, #0F0F0F 2%, rgba(15,15,15,0.95) 15%, rgba(15,15,15,0.6) 35%, rgba(15,15,15,0.0) 55%)", "linear-gradient(to left, #0F0F0F 0%, rgba(15,15,15,0.95) 8%, rgba(15,15,15,0.4) 22%, transparent 40%)", "linear-gradient(to bottom, #0F0F0F 0%, rgba(15,15,15,0.8) 8%, transparent 25%)", "linear-gradient(to top, #0F0F0F 0%, rgba(15,15,15,0.9) 12%, rgba(15,15,15,0.3) 28%, transparent 45%)"].join(", ") }} />
      </div>
      <div className="relative z-10 ml-0 max-w-7xl px-4 pt-40 pb-24 text-left sm:px-6 sm:pt-44 sm:pb-28 lg:mx-auto lg:w-[44%] lg:max-w-[34rem] lg:-translate-x-24 lg:px-8 lg:pt-48 lg:pb-16">
        <div className="animate-clip-reveal mb-6 inline-flex items-center rounded-full border border-[#F5F5F5]/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[#F5F5F5]/85 uppercase backdrop-blur-sm" style={{ animationDelay: "0.05s" }}>
          Inizia a ballare con Rose Ballet
        </div>
        <h1 className="mb-6 text-left font-serif text-4xl leading-[1.02] font-bold text-balance text-[#F5F5F5] italic sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
          <span className="animate-clip-reveal inline-block">Inizia a ballare con Rose Ballet</span>
        </h1>
        <p className="animate-clip-reveal mb-10 max-w-none text-lg leading-relaxed font-light text-pretty text-[#B8B8B8] sm:text-xl lg:max-w-xl lg:text-2xl" style={{ animationDelay: "0.55s" }}>
          Danza Classica, Moderna, Contemporanea, Hip Hop, Heels e Pilates. Corsi per bambini, ragazzi e adulti nel centro di Napoli, a pochi passi dalla metro.
        </p>
        <div className="animate-clip-reveal flex flex-col justify-start gap-4 sm:flex-row" style={{ animationDelay: "0.7s" }}>
          <a href="#corsi" className="animate-pulse-glow inline-flex items-center justify-center gap-2 rounded-full border border-[#F5F5F5]/60 bg-transparent px-8 py-4 text-lg font-semibold text-[#F5F5F5] shadow-sm transition-all hover:bg-[#FFFFFF]/10">
            PRENOTA UNA LEZIONE DI PROVA <ChevronRight size={20} />
          </a>
          <a href={brand.whatsappHref} target="_blank" rel="noopener noreferrer" className="animate-pulse-glow rounded-full border border-[#F5F5F5]/60 bg-card/70 px-8 py-4 text-lg font-semibold text-[#F5F5F5] shadow-sm transition-all hover:bg-[#FFFFFF]/10">
            <span className="inline-flex items-center justify-center gap-2"><MessageCircle size={20} /> SCRIVICI SU WHATSAPP</span>
          </a>
        </div>
        <p className="animate-clip-reveal mt-6 max-w-none text-base leading-relaxed font-light text-pretty text-[#D7D7D7] sm:text-lg lg:max-w-xl" style={{ animationDelay: "0.85s" }}>
          Corsi per bambini, ragazzi e adulti  Insegnanti qualificati  Percorsi per ogni livello
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-foreground/50 pt-2">
          <div className="h-2 w-1 rounded-full bg-foreground/70 animate-scroll-dot" />
        </div>
      </div>
    </section>
  )
}

export function StatsStrip() {
  return (
    <section className="border-y border-[#D8B978]/18 py-10 sm:py-14" style={{ background: "linear-gradient(135deg, #141414 0%, #1A1A1A 50%, #141414 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3 text-center min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (<StatCounter key={stat.label} stat={stat} />))}
        </div>
      </div>
    </section>
  )
}
