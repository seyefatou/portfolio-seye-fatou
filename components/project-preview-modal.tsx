"use client"

import { useEffect, useState } from "react"
import {
  X,
  ExternalLink,
  Car,
  FileCheck,
  User,
  LayoutDashboard,
  Globe,
  Settings,
  Users,
  Layout,
  Sparkles,
  MapPin,
  ChevronRight,
  CreditCard,
  Wrench,
  Shield,
  Building
} from "lucide-react"

interface PreviewFeatureItem {
  name: string
  desc: string
}

interface PreviewFeature {
  category: string
  icon: string
  items: PreviewFeatureItem[]
}

interface PreviewStat {
  label: string
  value: string
}

interface ProjectPreview {
  headline: string
  target: string
  features: PreviewFeature[]
  stats: PreviewStat[]
}

interface Project {
  title: string
  category: string
  image: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  preview?: ProjectPreview
}

interface ProjectPreviewModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  FileCheck,
  User,
  LayoutDashboard,
  Globe,
  Settings,
  Users,
  Layout,
  CreditCard,
  Wrench,
  Shield,
  Building,
}

export function ProjectPreviewModal({ project, isOpen, onClose }: ProjectPreviewModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      setActiveFeature(0)
      document.body.style.overflow = "hidden"
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      document.body.style.overflow = "unset"
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!isVisible || !project) return null

  const IconComponent = project.preview?.features[activeFeature]?.icon
    ? iconMap[project.preview.features[activeFeature].icon]
    : Globe

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />

      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-hidden bg-card rounded-3xl border border-border shadow-2xl transform transition-all duration-500 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="relative overflow-hidden">
          {/* Background gradient animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-shimmer-slow" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image & Info Header */}
          <div className="relative p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Project Image with glow */}
              <div className="relative group w-full md:w-64 flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/50 to-accent rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-slow" />
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="relative w-full h-40 md:h-36 object-cover rounded-xl border border-border"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-semibold bg-accent/20 text-accent rounded-full uppercase tracking-wider animate-pulse-slow">
                    {project.category}
                  </span>
                  {project.preview?.target && (
                    <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full">
                      <MapPin className="w-3 h-3" />
                      {project.preview.target}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {project.title}
                </h2>

                {project.preview?.headline && (
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {project.preview.headline}
                  </p>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary border border-border rounded-lg text-foreground hover:border-accent hover:bg-accent/10 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-280px)] p-6 md:p-8 pt-0">
          {/* Stats Section */}
          {project.preview?.stats && project.preview.stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {project.preview.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="relative group p-4 bg-secondary/50 rounded-2xl border border-border hover:border-accent transition-all duration-300 overflow-hidden stat-card"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-1 animate-number-pop">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Features Section */}
          {project.preview?.features && project.preview.features.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">Fonctionnalités</h3>
              </div>

              {/* Feature Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.preview.features.map((feature, index) => {
                  const FeatureIcon = iconMap[feature.icon] || Globe
                  return (
                    <button
                      key={feature.category}
                      onClick={() => setActiveFeature(index)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                        activeFeature === index
                          ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25 scale-105"
                          : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                      }`}
                    >
                      <FeatureIcon className="w-4 h-4" />
                      {feature.category}
                    </button>
                  )
                })}
              </div>

              {/* Active Feature Content */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/30 p-6">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />

                <div className="relative space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    {IconComponent && <IconComponent className="w-6 h-6 text-accent" />}
                    <h4 className="text-xl font-semibold text-foreground">
                      {project.preview.features[activeFeature]?.category}
                    </h4>
                  </div>

                  <div className="grid gap-3">
                    {project.preview.features[activeFeature]?.items.map((item, index) => (
                      <div
                        key={item.name}
                        className="group flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 transform hover:-translate-y-1"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: "fadeInUp 0.5s ease-out forwards",
                          opacity: 0,
                        }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                          <ChevronRight className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                            {item.name}
                          </h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer with CTA */}
        <div className="sticky bottom-0 p-6 bg-gradient-to-t from-card via-card to-transparent">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Visiter le site
            </a>
            <button
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary border border-border text-foreground rounded-xl font-semibold hover:bg-accent/10 hover:border-accent transition-all duration-300"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>

      {/* Inline keyframes for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer-slow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer-slow {
          animation: shimmer-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
