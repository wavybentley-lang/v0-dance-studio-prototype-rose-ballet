"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { courseCategories } from "@/lib/site-config"
import { useStagger } from "@/hooks/use-stagger"
import { useTilt } from "@/hooks/use-tilt"

type AnimatedSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
}

type ClassesSectionProps = AnimatedSectionProps & {
  coursesExpanded: boolean
  setCoursesExpanded: (expanded: boolean) => void
}

function TiltCourseCard({ course, isHiddenOnMobile, staggerVisible }: {
  course: typeof courseCategories[number]["courses"][number]
  isHiddenOnMobile: boolean
  staggerVisible: boolean
}) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useTilt(5)
  const Icon = course.Icon

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card group rounded-[1.5rem] border border-primary/10 bg-card p-5 shadow-sm shadow-primary/5 transition-[border-color,background,shadow,opacity,transform] duration-300 hover:border-primary/30 hover:bg-[var(--template-card-hover)] hover:shadow-xl hover:shadow-primary/10 ${isHiddenOnMobile ? "hidden md:block" : "block"} ${staggerVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
      style={{ transitionDuration: "600ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="tilt-spotlight rounded-[1.5rem]" />
      <div className="relative z-[2] mb-6 h-48 w-full overflow-hidden rounded-[1.15rem] bg-secondary">
        {course.image ? (
          <Image src={course.image} alt={course.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-transparent"><Icon className="h-8 w-8 text-primary" /></div>
        )}
      </div>
      <div className="relative z-[2]">
        <div className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{course.age}</div>
        <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">{course.title}</h3>
        <p className="mb-4 text-pretty text-muted-foreground">{course.description}</p>
        <a href="#contatti" className="inline-flex items-center font-medium text-primary transition-colors hover:text-primary/80">
          Richiedi Info <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}

export function ClassesSection({ isVisible, setSectionRef, coursesExpanded, setCoursesExpanded }: ClassesSectionProps) {
  const totalCourses = courseCategories.reduce((acc, c) => acc + c.courses.length, 0)
  const { ref: staggerRef, visibleCount } = useStagger(totalCourses, 100)

  return (
    <section
      id="corsi"
      ref={(element) => {
        setSectionRef("corsi", element)
        if (staggerRef) (staggerRef as React.MutableRefObject<HTMLElement | null>).current = element
      }}
      style={{ background: "radial-gradient(ellipse at 80% 20%, #0F0F0F 0%, #080808 60%, #050505 100%)" }}
      className={`py-20 transition-all duration-700 sm:py-28 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
          <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">I Nostri Corsi</h2>
          <p className="max-w-none text-lg text-pretty text-foreground lg:mx-auto lg:max-w-2xl">Dalla danza classica al movimento contemporaneo, offriamo un percorso completo per ogni età e livello</p>
        </div>
        {courseCategories.map((category, categoryIndex) => {
          const previousCoursesCount = courseCategories.slice(0, categoryIndex).reduce((count, item) => count + item.courses.length, 0)
          const isCategoryHiddenOnMobile = !coursesExpanded && previousCoursesCount >= 6
          return (
            <div key={category.label} className={`${categoryIndex > 0 ? "mt-12" : ""} ${isCategoryHiddenOnMobile ? "hidden md:block" : "block"}`}>
              <div className="mb-4 inline-flex rounded-full border border-primary/15 bg-secondary/60 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase">{category.label}</div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.courses.map((course, index) => {
                  const globalIndex = previousCoursesCount + index
                  const isHiddenOnMobile = !coursesExpanded && globalIndex >= 6
                  return <TiltCourseCard key={course.title} course={course} isHiddenOnMobile={isHiddenOnMobile} staggerVisible={globalIndex < visibleCount} />
                })}
              </div>
            </div>
          )
        })}
        {!coursesExpanded && (
          <div className="mt-12 text-center md:hidden">
            <button onClick={() => setCoursesExpanded(true)} className="mx-auto flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:bg-[#D4A8BC] active:scale-95">
              Vedi tutti i corsi <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
