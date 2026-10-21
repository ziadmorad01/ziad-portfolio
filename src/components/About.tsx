import { about } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Backend-minded, and <em className="text-accent">honest</em> about
          where I am.
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 text-lg text-muted">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <aside
            aria-labelledby="ai-note-title"
            className="card relative h-fit overflow-hidden p-7"
          >
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-1 bg-accent-solid"
            />
            <h3
              id="ai-note-title"
              className="font-display text-2xl leading-tight"
            >
              {about.aiNote.title}
            </h3>
            <p className="mt-3 text-muted">{about.aiNote.body}</p>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
