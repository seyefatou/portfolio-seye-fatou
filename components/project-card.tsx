import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  url?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  url,
}: ProjectCardProps) {
  const CardContent = (
    <>
      <div className="relative mb-4 overflow-hidden border border-border bg-card">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {url && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
              Accéder au site
            </span>
          </div>
        )}
      </div>
      <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-muted-foreground">
        {title}
      </h3>
      <p className="mb-4 text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  )

  if (url) {
    return (
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <article className="group cursor-pointer">
          {CardContent}
        </article>
      </Link>
    )
  }

  return (
    <article className="group cursor-pointer">
      {CardContent}
    </article>
  )
}
