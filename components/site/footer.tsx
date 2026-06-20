import { Clock, Map as MapIcon, Phone } from "lucide-react"
import { type ReactNode } from "react"

import { brand, type NavLink } from "@/lib/site-config"

export function Footer({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <footer className="relative overflow-hidden border-t border-white/20 bg-[#100B0D] pt-16 pb-12" style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #050505 100%)" }}>
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(216,185,120,0.12)_0%,rgba(158,111,111,0.07)_42%,transparent_72%)] blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(185,147,90,0.10)_0%,rgba(28,20,22,0.12)_48%,transparent_74%)] blur-2xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="relative mb-7 flex max-w-[300px] flex-col items-center leading-none md:items-start">
              <span className="pointer-events-none absolute -top-6 h-28 w-64 rounded-full bg-[radial-gradient(circle,rgba(216,185,120,0.16)_0%,rgba(158,111,111,0.08)_38%,transparent_72%)] blur-xl" />
              <span
                className="relative font-serif text-[2.8rem] leading-[0.82] font-semibold tracking-wide text-[#F7EFE5] italic"
                style={{ textShadow: "0 0 28px rgba(216,185,120,0.22)" }}
              >
                {brand.shortName}
              </span>
            </a>
            <p className="mt-2 max-w-[280px] text-center text-sm leading-relaxed text-[#F7EFE5]/58 md:text-left">{brand.tagline}</p>
          </div>

          <FooterColumn title="Link Rapidi">
            <ul className="space-y-3 text-center md:text-left">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-block text-sm text-[#F7EFE5]/58 transition-all duration-200 hover:translate-x-0.5 hover:text-white/80">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contatti">
            <ul>
              <FooterContact icon={<Phone size={14} />} href={brand.phoneHref} text={brand.phone} />
              <li className="mb-3">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="shrink-0 text-white/80" />
                  <span className="text-sm text-[#F7EFE5]/58">Orari in aggiornamento</span>
                </div>
                <span className="mt-2 block whitespace-pre-line text-sm text-[#F7EFE5]/58">{brand.hours}</span>
              </li>
            </ul>
          </FooterColumn>

          <FooterColumn title="Dove Siamo">
            <p className="mb-3 text-center text-sm leading-relaxed text-[#F7EFE5]/58 md:text-left">
              {brand.primaryLocation}, {brand.secondaryLocation}
              <br />
              {brand.cityLine}
            </p>
            <a
              href={brand.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-[#F7EFE5]"
            >
              <MapIcon size={14} />
              Vedi su Google Maps
            </a>
          </FooterColumn>
        </div>

        <div className="relative border-t border-white/20 pt-8 text-center text-xs text-[#F7EFE5]/45">{brand.copyright}</div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h4 className="mb-6 text-sm font-semibold tracking-[0.18em] text-[#F7EFE5] uppercase">{title}</h4>
      {children}
    </div>
  )
}

function FooterContact({ icon, href, text }: { icon: ReactNode; href: string; text: string }) {
  return (
    <li className="mb-3 flex items-center gap-2">
      <span className="shrink-0 text-white/80">{icon}</span>
      <a href={href} className="text-sm text-[#F7EFE5]/58 transition-colors duration-200 hover:text-white/80">
        {text}
      </a>
    </li>
  )
}


