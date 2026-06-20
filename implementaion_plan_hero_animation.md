I need you to add a subtle floating bokeh bubble animation to the hero section 
of my Next.js/TypeScript landing page (app/page.tsx).

The animation uses an HTML5 canvas element with floating translucent 
pink/rose/purple circles that drift upward slowly, like the bokeh light 
effect. It should be completely subtle and non-distracting — the hero text 
must remain fully readable on top.

Here are the exact steps:

─────────────────────────────────────────
STEP 1 — ADD THE CANVAS ELEMENT
─────────────────────────────────────────
Inside the Hero <section> (the one with id/className containing "hero" 
or "min-h-screen"), add this canvas tag as the FIRST child inside the 
section, before any other divs:

<canvas
  id="bokehCanvas"
  className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
/>

─────────────────────────────────────────
STEP 2 — FIX Z-INDEX ON HERO CONTENT
─────────────────────────────────────────
The hero already has a content div with className containing "relative z-10". 
Make sure it stays at z-10 or higher. The background gradient divs should 
stay at z-0. The canvas sits at z-[1] between them. No other z-index 
changes needed.

─────────────────────────────────────────
STEP 3 — ADD THE useEffect
─────────────────────────────────────────
Add this useEffect block inside the LAteneoDanzaLanding component, 
alongside the existing useEffect blocks at the top of the component. 
Do NOT remove or modify any existing useEffects:

useEffect(() => {
  const canvas = document.getElementById('bokehCanvas') as HTMLCanvasElement
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const resize = () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()

  const COLORS = [
    'rgba(220,130,180,ALPHA)',
    'rgba(190,90,160,ALPHA)',
    'rgba(240,160,200,ALPHA)',
    'rgba(200,110,190,ALPHA)',
    'rgba(255,200,230,ALPHA)',
    'rgba(160,80,150,ALPHA)',
  ]

  const rand = (a: number, b: number) => a + Math.random() * (b - a)

  type Bubble = {
    x: number
    y: number
    r: number
    speedY: number
    speedX: number
    alpha: number
    colorTemplate: string
    wobble: number
    wobbleSpeed: number
  }

  const createBubble = (forceBottom = false): Bubble => ({
    x: rand(0, canvas.width),
    y: forceBottom ? canvas.height + 40 : rand(-40, canvas.height + 40),
    r: rand(8, 38),
    speedY: rand(0.18, 0.55),
    speedX: rand(-0.12, 0.12),
    alpha: rand(0.04, 0.18),
    colorTemplate: COLORS[Math.floor(Math.random() * COLORS.length)],
    wobble: rand(0, Math.PI * 2),
    wobbleSpeed: rand(0.004, 0.014),
  })

  const bubbles: Bubble[] = Array.from({ length: 38 }, () => createBubble())
  let raf: number

  const drawBubble = (b: Bubble) => {
    ctx.beginPath()
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
    ctx.fillStyle = b.colorTemplate.replace('ALPHA', b.alpha.toFixed(2))
    ctx.fill()

    const grd = ctx.createRadialGradient(
      b.x - b.r * 0.3,
      b.y - b.r * 0.35,
      b.r * 0.05,
      b.x,
      b.y,
      b.r
    )
    grd.addColorStop(0, `rgba(255,255,255,${(b.alpha * 1.4).toFixed(2)})`)
    grd.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.beginPath()
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
    ctx.fillStyle = grd
    ctx.fill()
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const b of bubbles) {
      b.wobble += b.wobbleSpeed
      b.x += b.speedX + Math.sin(b.wobble) * 0.18
      b.y -= b.speedY
      drawBubble(b)
      if (b.y + b.r < 0) Object.assign(b, createBubble(true))
    }
    raf = requestAnimationFrame(animate)
  }

  animate()
  window.addEventListener('resize', resize)

  return () => {
    cancelAnimationFrame(raf)
    window.removeEventListener('resize', resize)
  }
}, [])

─────────────────────────────────────────
STEP 4 — VERIFY
─────────────────────────────────────────
After making changes, confirm:
- No TypeScript errors
- No existing useEffect blocks were removed or modified
- The hero text (h1, p, buttons) is still fully visible above the animation
- The canvas has pointer-events-none so buttons are still clickable
- The file still compiles cleanly

Only modify app/page.tsx. Do not touch any other files.

Tips before you run it:

The prompt is intentionally very explicit — Codex agents do better with step-by-step instructions than open-ended ones
If your hero section has a different component name than LAteneoDanzaLanding, tell the agent the correct name before pasting
After it runs, if the bubbles feel too strong or too fast, you can ask it to tweak: rand(0.04, 0.18) → lower for more subtle, 38 bubble count → lower for fewer