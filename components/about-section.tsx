import { PenTool, Code, Smartphone, Zap, Download } from "lucide-react"
import { aboutData } from "@/lib/portfolio-data"

const iconMap = {
  Code,
  Zap,
  Smartphone,
  PenTool,
}

interface AboutSectionProps {
  data?: typeof aboutData
}

export function AboutSection({ data = aboutData }: AboutSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      {/* About Me */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">À Propos de Moi</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <a
          href="/cv-fatou-seye.pdf"
          download="CV-Fatou-Seye.pdf"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
          style={{ animationDelay: '200ms', animationFillMode: 'both' }}
        >
          <Download className="w-5 h-5" />
          Télécharger mon CV
        </a>
      </div>

      {/* What I'm Doing */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Ce que je fais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {data.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="flex gap-3 md:gap-4 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border hover:border-accent hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="w-full h-full text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}
