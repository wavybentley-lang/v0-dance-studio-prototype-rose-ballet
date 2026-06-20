import {
  Calendar,
  CalendarRange,
  Crown,
  Flame,
  Heart,
  Star,
  Tag,
  Ticket,
  Users,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react"

export type NavLink = {
  href: string
  label: string
}

export type Course = {
  title: string
  age: string
  description: string
  image: string
  Icon: LucideIcon
}

export type CourseCategory = {
  label: string
  courses: Course[]
}

export type ScheduleDay = {
  day: string
  classes: {
    time: string
    name: string
  }[]
}

export type TeamMember = {
  photo: string
  name: string
  role: string
  bio: string
}

export const brand = {
  name: "Rose Ballet",
  shortName: "Rose Ballet",
  tagline: "Scuola di Danza diretta da Melania e Rossella Mellino",
  logo: "",
  phone: "+39 327 444 6381",
  phoneHref: "tel:+393274446381",
  whatsappHref: "https://wa.me/393274446381",
  email: "stella.dancer@hotmail.it",
  emailHref: "mailto:stella.dancer@hotmail.it",
  instagramHref: "",
  facebookHref: "https://www.facebook.com/p/Rose-Ballet-100046372669027/",
  mapsHref: "https://maps.google.com/?q=Via+Salvator+Rosa+157E+Napoli+Italy",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.295770740642!2d14.236481699999999!3d40.851520799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b08f44d86575b%3A0x891fa179315b5fa7!2sRose%20Ballet!5e1!3m2!1sen!2sit!4v1781961841980!5m2!1sen!2sit",
  primaryLocation: "Via Salvator Rosa 157E",
  secondaryLocation: "Napoli, Italy",
  cityLine: "",
  hours: "",
  copyright: " 2026 Rose Ballet",
}

export const navLinks: NavLink[] = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#corsi", label: "Corsi" },
  { href: "#orari", label: "Orari" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contatti", label: "Contatti" },
]

export const stats = [
  { number: "7", label: "DISCIPLINE" },
  { number: "DAI 3 ANNI", label: "BAMBINI, RAGAZZI E ADULTI" },
  { number: "2", label: "SPETTACOLI ALLANNO" },
  { number: "CORSI", label: "BASE E AVANZATI" },
]

export const courseCategories: CourseCategory[] = [
  {
    label: "Dance",
    courses: [
      {
        title: "Danza Classica",
        age: "Tutti i livelli",
        description: "Tecnica, postura e disciplina per costruire basi solide nella danza classica.",
        image: "/imperial ballet/danzaclassica.jpg",
        Icon: Zap,
      },
      {
        title: "Danza Classica per Bambini",
        age: "Tutti i livelli",
        description: "Movimento, ritmo ed espressivita per interpretare coreografie moderne con energia.",
        image: "/imperial ballet/danzaclassicaperbambini.jpg",
        Icon: Flame,
      },
      {
        title: "Pilates",
        age: "Tutti i livelli",
        description: "Allenamento controllato per postura, tonificazione, stabilita e consapevolezza corporea.",
        image: "/imperial ballet/pilates.jpg",
        Icon: Wind,
      },
    ],
  },
]

export const featuredGalleryPhotos: { src: string; alt: string }[] = [
  { src: "/roseballet/nostrimomenti.jpg", alt: "Imperial Ballet momento in sala" },
  { src: "/roseballet/nostrimomenti2.jpg", alt: "Imperial Ballet gruppo danza" },
  { src: "/roseballet/nostrimomenti3.jpg", alt: "Imperial Ballet lezione di danza" },
]

export const allGalleryPhotos = [
  "/group_outside_.jpg", "/inside_school_children_lesson.jpg", "/male_female_duo.jpg",
  "/outside_event_students.jpg", "/solo_female_air_dance.jpg", "/student_green_dress.jpg",
  "/air_dance_student.jpg", "/collage_children_group.jpg", "/group_male_female_stuends_stage.jpg",
  "/IMG_8356.JPG.webp", "/IMG_8357.JPG.webp", "/IMG_8359.JPG.webp", "/IMG_8360.JPG.webp",
  "/IMG_8363.JPG.webp", "/IMG_8364.JPG.webp", "/IMG_8367.JPG.webp", "/IMG_8368.JPG.webp",
  "/IMG_8369.JPG.webp", "/IMG_8370.JPG.webp", "/IMG_8371.JPG.webp", "/IMG_8373.JPG.webp",
  "/IMG_8377.JPG.webp", "/IMG_8378.JPG.webp", "/IMG_8379.JPG.webp", "/IMG_8380.JPG.webp",
  "/IMG_8382.JPG.webp", "/IMG_8383.JPG.webp", "/IMG_8385.JPG.webp", "/IMG_8387.JPG.webp",
  "/IMG_8390.JPG.webp", "/IMG_8396.JPG.webp", "/IMG_8402.JPG.webp", "/IMG_8413.webp",
  "/additional/saggio-ateneo-agropoli-1.webp", "/additional/saggio-ateneo-agropoli-2.webp",
  "/additional/performance-ateneo-agropoli.webp", "/additional/spettacolo-fine-anno-ateneo-1.webp",
  "/additional/spettacolo-fine-anno-ateneo-3.webp", "/additional/spettacolo-fine-anno-ateneo.webp",
  "/additional/danza-femminile-sedia-agropoli.webp", "/additional/female-perform-sitting-chair.webp",
  "/additional/female-solo.webp", "/additional/females-group-perform.webp",
  "/additional/females-perform-stage.webp", "/additional/females-performs3.webp",
  "/additional/group-performance-4.webp", "/additional/group-performance-all-black.webp",
  "/additional/groupd-perform-1.webp", "/additional/kid-perform-solo.webp",
  "/additional/kid-solo-performance.webp", "/additional/kids-group-performance.webp",
  "/additional/kids-performance.webp", "/additional/kids-performance1.webp",
  "/additional/m-f-performa1.webp", "/additional/male-dancer.webp",
  "/additional/male-fdemale-performance4.webp", "/additional/male-female-ballet-1.webp",
  "/additional/coppia-balletto-ateneo-agropoli.webp",
  "/additional/coppia-balletto-ateneo-agropoli-3.webp",
  "/additional/duo-danza-ateneo-agropoli.webp", "/additional/gruppo-misto-performance-ateneo.webp",
  "/additional/coppia-performance-ateneo-cilento.webp",
  "/additional/coppia-danza-moderna-agropoli.webp",
  "/additional/coppia-danza-moderna-agropoli-1.webp",
  "/additional/coppia-danza-moderna-agropoli-2.webp",
  "/additional/coppia-danza-moderna-agropoli-4.webp",
  "/additional/coppia-performance-palcoscenico-1.webp",
  "/additional/coppia-performance-palcoscenico-2.webp",
  "/additional/coppia-performance-palcoscenico-3.webp",
  "/additional/coppia-danza-ateneo.webp", "/additional/gruppo-misto-danza-ateneo-3.webp",
  "/additional/danzatore-performance-agropoli-2.webp",
  "/additional/danzatore-solo-ateneo-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli-1.webp",
  "/additional/duo-misto-performance-ateneo.webp",
  "/additional/uomo-danza-performance-agropoli.webp",
  "/additional/performance-danza-ateneo-agropoli.webp",
  "/additional/due-ragazze-palcoscenico-ateneo.webp",
  "/additional/donna-danza-performance-agropoli-3.webp",
  "/additional/donna-danza-rosso-ateneo-agropoli.webp",
  "/additional/donne-performance-ateneo-agropoli-2.webp",
]

export const salaArmoniaSchedule: ScheduleDay[] = [
  {
    day: "LUNED\u00cc",
    classes: [
      { time: "10:00-11:00", name: "Gioco Danza" },
      { time: "11:00-12:00", name: "Danza Classica" },
      { time: "14:00-15:00", name: "Danza Moderna" },
      { time: "17:00-18:00", name: "Danza Contemporanea" },
      { time: "19:00-20:00", name: "Pas de Deux" },
      { time: "20:30-21:30", name: "Storia della Danza" },
      { time: "21:30-22:30", name: "Pilates" },
      { time: "22:30-23:30", name: "Gioco Danza" },
    ],
  },
  {
    day: "MARTED\u00cc",
    classes: [
      { time: "12:00-13:00", name: "Gioco Danza" },
      { time: "14:00-15:00", name: "Danza Classica" },
      { time: "17:00-18:00", name: "Danza Moderna" },
      { time: "18:00-19:00", name: "Danza Contemporanea" },
      { time: "19:30-20:30", name: "Pas de Deux" },
      { time: "20:30-21:30", name: "Storia della Danza" },
      { time: "21:30-22:30", name: "Pilates" },
      { time: "22:30-23:30", name: "Gioco Danza" },
    ],
  },
  {
    day: "MERCOLED\u00cc",
    classes: [
      { time: "11:30-12:30", name: "Pilates" },
      { time: "14:00-15:00", name: "Gioco Danza" },
      { time: "16:00-17:00", name: "Danza Classica" },
      { time: "18:00-19:00", name: "Danza Moderna" },
      { time: "19:00-20:00", name: "Danza Contemporanea" },
      { time: "20:30-21:30", name: "Pas de Deux" },
      { time: "21:30-22:30", name: "Storia della Danza" },
    ],
  },
  {
    day: "GIOVED\u00cc",
    classes: [
      { time: "10:00-11:00", name: "Pilates" },
      { time: "11:00-12:00", name: "Gioco Danza" },
      { time: "14:00-15:00", name: "Danza Classica" },
      { time: "17:00-18:00", name: "Danza Moderna" },
      { time: "18:30-19:30", name: "Danza Contemporanea" },
      { time: "19:30-20:30", name: "Pas de Deux" },
      { time: "20:30-21:30", name: "Storia della Danza" },
      { time: "21:30-22:30", name: "Pilates" },
      { time: "22:30-23:30", name: "Gioco Danza" },
    ],
  },
  {
    day: "VENERD\u00cc",
    classes: [
      { time: "14:00-15:00", name: "Danza Classica" },
      { time: "18:00-19:00", name: "Danza Moderna" },
      { time: "19:00-20:00", name: "Danza Contemporanea" },
      { time: "20:00-21:00", name: "Pas de Deux" },
      { time: "21:00-22:00", name: "Storia della Danza" },
      { time: "22:00-23:00", name: "Pilates" },
    ],
  },
  {
    day: "SABATO",
    classes: [
      { time: "11:00-12:00", name: "Gioco Danza" },
      { time: "15:30-16:30", name: "Danza Classica" },
      { time: "17:00-18:00", name: "Danza Contemporanea" },
    ],
  },
  {
    day: "DOMENICA",
    classes: [{ time: "10:00-12:30", name: "Pas de Deux" }],
  },
]

export const salaRitmoSchedule = salaArmoniaSchedule

export const scheduleBookingServices = [
  "Gioco Danza",
  "Danza Classica",
  "Danza Moderna",
  "Danza Contemporanea",
  "Pas de Deux",
  "Storia della Danza",
  "Pilates",
]

export const scheduleContactInfo = {
  address: "Via Salvator Rosa 157E, Napoli, Italy",
  phone: "+39 327 444 6381",
}

export const pricingCards = [
  { Icon: Ticket, title: "Lezione Singola", description: "Ideale per provare un corso prima di iscriverti. Nessun impegno, massima flessibilitÃ ." },
  { Icon: Calendar, title: "Abbonamento Mensile", description: "La soluzione piÃ¹ flessibile per chi vuole ballare con regolaritÃ  ogni mese." },
  { Icon: CalendarRange, title: "Abbonamento Semestrale", description: "Sei mesi di lezioni con un risparmio rispetto all'abbonamento mensile." },
  { Icon: Crown, title: "Abbonamento Annuale", description: "La scelta di chi vuole dare continuitÃ  al proprio percorso artistico. Massimo risparmio." },
]

export const pricingHighlights = [
  { Icon: Tag, title: "Tariffe Differenziate", description: "I costi variano in base al corso scelto e all'etÃ  dell'allievo. Contattaci per ricevere il preventivo personalizzato." },
  { Icon: Users, title: "Sconti Famiglia", description: "Sono previste riduzioni speciali per fratelli e/o sorelle e per mamme e figlie che si iscrivono insieme." },
]
