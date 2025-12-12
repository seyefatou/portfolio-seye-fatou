import { Mail, Phone, Calendar, MapPin } from "lucide-react"
import { Github, Linkedin, MessageCircle } from "lucide-react"
import { profileData } from "@/lib/portfolio-data"
import { StatsCounter } from "./stats-counter"

function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
    </svg>
  )
}

interface ProfileSidebarProps {
  data?: typeof profileData
}

export function ProfileSidebar({ data = profileData }: ProfileSidebarProps) {
  return (
    <aside className="w-full lg:w-80 xl:w-96 bg-card rounded-2xl border border-border p-4 md:p-6 lg:sticky lg:top-8 h-fit card-hover sparkle-border">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6 animate-float">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/40 via-accent/20 to-transparent animate-pulse-slow glow" />
          <div className="absolute inset-[2px] rounded-3xl bg-secondary overflow-hidden">
            <img src={data.avatar || "/placeholder.svg"} alt={data.name} className="w-full h-full object-cover object-top" />
          </div>
        </div>

        <h1 className="text-xl md:text-2xl font-bold gradient-text mb-1">{data.name}</h1>
        <p className="text-xs md:text-sm text-accent-foreground bg-gradient-to-r from-accent/80 to-accent px-4 md:px-5 py-1.5 rounded-full font-medium shadow-lg shadow-accent/20">
          {data.title}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-4 md:my-6" />

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground uppercase mb-1">Courriel</p>
            <a
              href={`mailto:${data.email}`}
              className="text-sm text-foreground hover:text-accent transition-colors break-all"
            >
              {data.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground uppercase mb-1">Téléphone</p>
            <a
              href={`tel:${data.phone.replace(/\s/g, "")}`}
              className="text-sm text-foreground hover:text-accent transition-colors"
            >
              {data.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
            <Calendar className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground uppercase mb-1">Date de naissance</p>
            <p className="text-sm text-foreground">{data.birthday}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground uppercase mb-1">Localisation</p>
            <p className="text-sm text-foreground">{data.location}</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 text-center">
          Mes Statistiques
        </h3>
        <StatsCounter />
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border">
        <a
          href={data.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-xl bg-secondary hover:bg-gradient-to-br hover:from-accent hover:to-accent/70 hover:text-accent-foreground transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={data.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-xl bg-secondary hover:bg-gradient-to-br hover:from-accent hover:to-accent/70 hover:text-accent-foreground transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={data.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-xl bg-secondary hover:bg-gradient-to-br hover:from-accent hover:to-accent/70 hover:text-accent-foreground transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href={data.social.snapchat}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-xl bg-secondary hover:bg-gradient-to-br hover:from-accent hover:to-accent/70 hover:text-accent-foreground transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
          aria-label="Snapchat"
        >
          <SnapchatIcon className="w-5 h-5" />
        </a>
      </div>
    </aside>
  )
}
