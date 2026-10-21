import Image from "next/image";
import { projects, type Project } from "@/lib/content";
import { ExternalIcon, GitHubIcon, ImageIcon } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

function Screenshot({ project }: { project: Project }) {
  if (project.screenshot) {
    return (
      <Image
        src={project.screenshot}
        alt={`Screenshot of ${project.title}`}
        width={1280}
        height={800}
        sizes="(min-width: 1024px) 560px, 100vw"
        className="aspect-[16/10] w-full rounded-xl border border-line object-cover"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Placeholder: no screenshot of ${project.title} has been added yet`}
      className="dots relative flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-line bg-surface-2 text-center"
    >
      <ImageIcon className="text-muted" />
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
        Screenshot placeholder
      </p>
      <p className="max-w-[16rem] text-xs text-muted">
        A real screenshot of {project.title} has not been added yet.
      </p>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;

  return (
    <Reveal>
      <article
        aria-labelledby={`${project.id}-title`}
        className="card group grid gap-8 p-6 transition-colors hover:border-accent/50 sm:p-8 lg:grid-cols-2 lg:gap-12"
      >
        <div className={flip ? "lg:order-2" : ""}>
          <Screenshot project={project} />
        </div>

        <div className={`flex flex-col ${flip ? "lg:order-1" : ""}`}>
          <p className="eyebrow">
            {String(index + 1).padStart(2, "0")} · {project.kind}
          </p>
          <h3
            id={`${project.id}-title`}
            className="mt-2 font-display text-3xl leading-tight sm:text-4xl"
          >
            {project.title}
          </h3>
          <p className="mt-1 text-muted">{project.subtitle}</p>

          <p className="mt-5">{project.goal}</p>

          <h4 className="mt-6 text-sm font-medium">Features</h4>
          <ul className="mt-2 grid gap-x-6 gap-y-1.5 text-sm text-muted sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-sm font-medium">What I&apos;m learning from it</h4>
          <p className="mt-1.5 text-sm text-muted">{project.learning}</p>

          <ul
            aria-label={`Technologies used in ${project.title}`}
            className="mt-6 flex flex-wrap gap-2"
          >
            {project.stack.map((s) => (
              <li
                key={s}
                className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-xs"
              >
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-7">
            {project.repo ? (
              <a
                href={project.repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-accent"
              >
                <GitHubIcon className="h-[18px] w-[18px]" />
                <span className="link-underline">{project.repo.label}</span>
                <ExternalIcon />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : null}
            <span className="text-sm text-muted">{project.repoNote}</span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Three projects, <em className="text-accent">three stacks.</em>
        </>
      }
      intro="Academic, team and personal projects, described by their goals, features and technologies. AI tools played a significant role in building them, and I don't claim individual contributions beyond what's stated here."
    >
      <div className="space-y-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
