'use client'

import { useState } from 'react'

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
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
      skills: [
        { name: 'Git', icon: '/icons/git.svg', color: '#F05032' },
        { name: 'GitHub', icon: '/icons/github.svg', color: '#181717' },
        { name: 'VS Code', icon: '/icons/vscode.svg', color: '#007ACC' },
        { name: 'Postman', icon: '/icons/postman.svg', color: '#FF6C37' },
        { name: 'Figma', icon: '/icons/figma.svg', color: '#F24E1E' },
        { name: 'Canva', icon: '/icons/canva.svg', color: '#00C4CC' },
        { name: 'phpMyAdmin', icon: '/icons/phpmyadmin.svg', color: '#6C78AF' },
        { name: 'Discord', icon: '/icons/discord.svg', color: '#5865F2' },
      ],
    },
  ]

  return (
    <section id="skills" className="border-t border-border bg-gradient-to-b from-background to-secondary/20">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Mes Compétences
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Technologies et outils que je maîtrise
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{
                      animationDelay: `${(categoryIndex * 5 + skillIndex) * 100}ms`,
                    }}
                  >
                    <div className={`
                      relative overflow-hidden rounded-2xl bg-card border border-border
                      p-6 transition-all duration-300 ease-out
                      hover:border-transparent hover:shadow-xl hover:shadow-black/10
                      hover:-translate-y-2 hover:scale-105
                      ${hoveredSkill === skill.name ? 'ring-2 ring-offset-2 ring-offset-background' : ''}
                    `}
                    style={{
                      ['--tw-ring-color' as string]: hoveredSkill === skill.name ? skill.color : 'transparent',
                    }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        style={{ backgroundColor: skill.color }}
                      />

                      <div className="flex flex-col items-center gap-4">
                        <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain drop-shadow-lg"
                          />
                        </div>

                        <span className="text-sm font-medium text-foreground text-center transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>

                      <div
                        className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
