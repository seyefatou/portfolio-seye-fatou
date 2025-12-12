"use client"

import { useState } from "react"
import { ProfileSidebar } from "@/components/profile-sidebar"
import { AboutSection } from "@/components/about-section"
import { ResumeSection } from "@/components/resume-section"
import { PortfolioSection } from "@/components/portfolio-section"
// import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section-new"
import { ThemeToggle } from "@/components/theme-toggle"
import { profileData, aboutData, resumeData, portfolioData, contactData } from "@/lib/portfolio-data"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
      <div className="mx-auto max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
          <ProfileSidebar data={profileData} />

          {/* Main Content */}
          <main className="flex-1 bg-card rounded-xl md:rounded-2xl border border-border overflow-x-hidden overflow-y-auto max-h-[calc(100vh-2rem)] lg:max-h-[calc(100vh-6rem)]">
            {/* Navigation */}
            <nav className="sticky top-0 z-40 flex items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 border-b border-border/50 overflow-x-auto scrollbar-hide bg-card/80 backdrop-blur-xl shadow-sm">
              {[
                { id: "about", label: "À propos" },
                { id: "resume", label: "Skills" },
                { id: "portfolio", label: "Portfolio" },
                // { id: "blog", label: "Blog" },
                { id: "contact", label: "Contact" },
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeSection === section.id
                      ? "text-accent-foreground bg-gradient-to-r from-accent to-accent/80 shadow-lg shadow-accent/25 scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/80 hover:scale-102"
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                  )}
                </button>
              ))}
              <div className="ml-auto flex-shrink-0">
                <ThemeToggle />
              </div>
            </nav>

            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              {activeSection === "about" && <AboutSection data={aboutData} />}
              {activeSection === "resume" && <ResumeSection data={resumeData} />}
              {activeSection === "portfolio" && <PortfolioSection data={portfolioData} />}
               {/* {activeSection === "blog" && <BlogSection data={blogData} />} */}
              {activeSection === "contact" && <ContactSection data={contactData} />}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
