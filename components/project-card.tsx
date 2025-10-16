import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  linkGit?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  linkGit,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card
      className={`group overflow-hidden border-border bg-card transition-all hover:shadow-lg ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <a
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {link && (
            <div className="absolute right-3 top-3 rounded-full bg-background/80 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <ExternalLink className="h-4 w-4 text-foreground" />
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-balance text-xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-secondary text-secondary-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {linkGit && (
              <a
                href={linkGit}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Repositório GitHub
              </a>
            )}
          </p>
        </div>
      </a>
    </Card>
  );
}
