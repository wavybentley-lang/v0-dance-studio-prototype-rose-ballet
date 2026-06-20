"use client"

import Image from "next/image"
import { X } from "lucide-react"
import { useState } from "react"

import { featuredGalleryPhotos } from "@/lib/site-config"

const galleryFallbacks = Array.from({ length: 6 })

type GallerySectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  enlargedPhoto: string | null
  setEnlargedPhoto: (photo: string | null) => void
}

export function GallerySection({ isVisible, setSectionRef, enlargedPhoto, setEnlargedPhoto }: GallerySectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const handleOpen = (src: string) => { setEnlargedPhoto(src); requestAnimationFrame(() => setLightboxOpen(true)) }
  const handleClose = () => { setLightboxOpen(false); setTimeout(() => setEnlargedPhoto(null), 300) }

  return (
    <>
      <section id="gallery" ref={(element) => setSectionRef("gallery", element)} style={{ background: "radial-gradient(ellipse at 50% 30%, #0F0F0F 0%, #050505 60%, #080808 100%)" }} className={`pt-20 pb-20 transition-all duration-700 sm:pt-28 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
            <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">I Nostri Momenti</h2>
            <p className="max-w-none text-lg text-pretty text-foreground lg:mx-auto lg:max-w-2xl">Istantanee di passione, dedizione e gioia</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {featuredGalleryPhotos.length > 0
              ? featuredGalleryPhotos.map((image) => (
                  <button key={image.src} onClick={() => handleOpen(image.src)} className="ken-burns-hover group relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-sm">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/0" />
                  </button>
                ))
              : galleryFallbacks.map((_, index) => (<div key={index} className="aspect-square w-full rounded-sm border border-primary/15 bg-[linear-gradient(135deg,rgba(120,24,58,0.72),rgba(10,10,10,0.96))]" />))}
          </div>
        </div>
      </section>
      {enlargedPhoto && (
        <div className={`fixed inset-0 z-[10500] flex items-center justify-center transition-all duration-300 ${lightboxOpen ? "bg-black/95 backdrop-blur-xl" : "bg-black/0 backdrop-blur-none"}`} onClick={handleClose}>
          <button onClick={handleClose} className={`fixed top-6 right-6 z-[10510] text-3xl font-light text-foreground transition-all duration-300 hover:opacity-70 ${lightboxOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`} aria-label="Close photo"><X size={32} /></button>
          <div className={`relative h-[90vh] w-[90vw] transition-all duration-300 ${lightboxOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`} style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
            <Image src={enlargedPhoto} alt="Enlarged photo" fill className="object-contain" sizes="90vw" />
          </div>
        </div>
      )}
    </>
  )
}
