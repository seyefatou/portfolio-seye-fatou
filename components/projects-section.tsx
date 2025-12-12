import { ProjectCard } from './project-card'

const projects = [
  {
    title: 'Mysubito',
    description:
      'Plateforme de réservation de navettes aéroport et courses inter-villes au Sénégal et en Côte d\'Ivoire. Service de transport simplifié avec réservation en ligne.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    image: '/subito.png',
    url: 'https://mysubito.net/',
  },
]

export function ProjectsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Mes Projets
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
