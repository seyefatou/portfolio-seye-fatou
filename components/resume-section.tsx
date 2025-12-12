'use client'

import { useState } from 'react'
import { Sparkles } from "lucide-react"

export function ResumeSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [pausedCategory, setPausedCategory] = useState<string | null>(null)

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      direction: 'right-to-left',
      skills: [
        { name: 'React.js', icon: '/icons/react.svg', color: '#61DAFB' },
        { name: 'Next.js', icon: '/icons/nextjs.svg', color: '#000000' },
        { name: 'JavaScript', icon: '/icons/javascript.svg', color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', color: '#06B6D4' },
        { name: 'Bootstrap', icon: '/icons/bootstrap.svg', color: '#7952B3' },
      ],
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      direction: 'left-to-right',
      skills: [
        { name: 'Node.js', icon: '/icons/nodejs.svg', color: '#339933' },
        { name: 'Nest.js', icon: '/icons/nestjs.svg', color: '#E0234E' },
        { name: 'PostgreSQL', icon: '/icons/postgresql.svg', color: '#4169E1' },
        { name: 'Prisma', icon: '/icons/prisma.svg', color: '#2D3748' },
      ],
    },
    {
      title: 'Outils',
      color: 'from-purple-500 to-pink-500',
      direction: 'right-to-left',
      skills: [
        { name: 'Git', icon: '/icons/git.svg', color: '#F05032' },
        { name: 'GitHub', icon: '/icons/github.svg', color: '#181717' },
        { name: 'VS Code', icon: '/icons/vscode.svg', color: '#007ACC' },
        { name: 'Postman', icon: '/icons/postman.svg', color: '#FF6C37' },
        { name: 'Figma', icon: '/icons/figma.svg', color: '#F24E1E' },
        { name: 'phpMyAdmin', icon: '/icons/phpmyadmin.svg', color: '#6C78AF' },
        { name: 'Discord', icon: '/icons/discord.svg', color: '#5865F2' },
      ],
    },
  ]

  return (
    <div className="space-y-8 md:space-y-10">
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-left {
          animation: scrollLeft 20s linear infinite;
        }

        .marquee-right {
          animation: scrollRight 20s linear infinite;
        }

        .marquee-paused {
          animation-play-state: paused;
        }
      `}</style>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Skills</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-8">
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Ce que je maîtrise</h3>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${category.color}`} />
                <h4 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h4>
              </div>

              {/* Marquee Container */}
              <div
                className="relative overflow-hidden rounded-xl bg-secondary/30 py-4"
                onMouseEnter={() => setPausedCategory(category.title)}
                onMouseLeave={() => setPausedCategory(null)}
              >
                {/* Gradient overlays for smooth fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-secondary/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-secondary/80 to-transparent z-10 pointer-events-none" />

                {/* Scrolling content */}
                <div
                  className={`flex gap-4 md:gap-6 w-max ${
                    category.direction === 'right-to-left' ? 'marquee-left' : 'marquee-right'
                  } ${pausedCategory === category.title ? 'marquee-paused' : ''}`}
                >
                  {/* Double the items for seamless loop */}
                  {[...category.skills, ...category.skills, ...category.skills, ...category.skills].map((skill, skillIndex) => (
                    <div
                      key={`${skill.name}-${skillIndex}`}
                      className="group relative flex-shrink-0"
                      onMouseEnter={() => setHoveredSkill(`${skill.name}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div
                        className={`
                          relative overflow-hidden rounded-xl bg-card border border-border
                          p-4 md:p-5 transition-all duration-300 ease-out cursor-pointer
                          hover:border-transparent hover:shadow-xl hover:shadow-black/10
                          hover:-translate-y-2 hover:scale-110
                          min-w-[100px] md:min-w-[120px]
                          ${hoveredSkill === `${skill.name}-${skillIndex}` ? 'ring-2 ring-offset-2 ring-offset-background' : ''}
                        `}
                        style={{
                          ['--tw-ring-color' as string]: hoveredSkill === `${skill.name}-${skillIndex}` ? skill.color : 'transparent',
                        }}
                      >
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300"
                          style={{ backgroundColor: skill.color }}
                        />

                        <div className="flex flex-col items-center gap-3">
                          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-full h-full object-contain drop-shadow-lg"
                            />
                          </div>

                          <span className="text-xs md:text-sm font-medium text-foreground text-center whitespace-nowrap">
                            {skill.name}
                          </span>
                        </div>

                        <div
                          className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl"
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
