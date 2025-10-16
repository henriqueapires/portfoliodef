import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="block">
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          {link ? (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src={image ?? "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute right-3 top-3 rounded-full bg-background/80 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <ExternalLink className="h-4 w-4 text-foreground" />
              </div>
            </Link>
          ) : (
            <Image
              src={image ?? "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="p-6">
          {link ? (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-balance text-xl font-semibold text-foreground hover:underline"
            >
              {title}
            </Link>
          ) : (
            <h3 className="mb-2 text-balance text-xl font-semibold text-foreground">
              {title}
            </h3>
          )}

          <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Badge
                key={`${tag}-${i}`}
                variant="secondary"
                className="bg-secondary text-secondary-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {linkGit && (
            <div className="mt-4">
              <Link
                href={linkGit}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Repositório GitHub
              </Link>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
