# Implementation Plan: Enhanced Prototype Website

## Goal
Add subtle transitions, animations, and cool effects to impress prospects while keeping the main goal of converting visitors to clients.

---

## 1. Scroll-Driven Micro-Animations (Staggered Reveals & Counters)

- Staggered fade-in-up animations on individual elements (cards, list items) with 100-150ms delay between each
- Animated number counter for StatsStrip that counts up from 0 when visible
- Scale-up animation on About section owner photo when entering viewport

## 2. Hero Section Enhancements

- Shimmer/grain texture overlay on hero background (CSS animated noise at 2-3% opacity)
- Text-reveal animation for headline (clip-path mask wipe + blur resolve)
- Pulsing glow effect on CTA buttons (box-shadow pulse every 3s)
- Animated scroll indicator with traveling dot
- Mouse-responsive parallax on bokeh bubbles (move opposite to cursor)

## 3. Interactive Card & Gallery Effects

- 3D tilt/hover effect on course cards (5deg max rotation + spotlight gradient following cursor)
- Ken Burns (slow zoom + pan) CSS animation on gallery images on hover
- Enhanced lightbox with smooth scale-up transition from thumbnail position + backdrop blur intensification
- Gold/rose border glow on testimonial cards when entering viewport

## 4. Navigation & CTA Banner Polish

- Announcement bar above navigation (auto-dismiss after 8s, shows "La prima lezione e gratuita")
- Smooth scroll-linked nav background (transparent to solid gradient instead of binary switch)
- Subtle glow pulse on "Iscriviti Ora" nav button (every 5s)
- Moving gradient animation on CTA Banner background (10s CSS keyframe)

## 5. Contact Form & Conversion Flow

- Floating label animation on form inputs
- Green checkmark inline validation icons
- SVG stroke animation checkmark on form success
- WhatsApp button bounce notification badge after 10s
- Smooth scroll with ease-out-expo to contact section

## 6. Performance & Accessibility

- All animations respect `prefers-reduced-motion`
- GPU-accelerated transforms only (`will-change`, `transform`)
- Lightweight custom hooks for tilt and counter effects
- CSS-first approach where possible, minimal JS
