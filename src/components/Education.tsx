import { education } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education() {
  const { degree, training } = education;

  return (
    <Section
      id="education"
      eyebrow="Education & training"
      title={
        <>
          A degree, and a <em className="text-accent">.NET track</em> alongside
          it.
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="card h-full p-7 sm:p-8">
            <p className="eyebrow">Degree · {degree.status}</p>
            <h3 className="mt-3 font-display text-3xl leading-tight">
              {degree.title}
            </h3>
            <p className="mt-2 text-fg">{degree.school}</p>
            <p className="text-muted">{degree.place}</p>
            <p className="mt-5 inline-block rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
              {degree.dates}
            </p>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <article className="card h-full p-7 sm:p-8">
            <p className="eyebrow">Training · {training.status}</p>
            <h3 className="mt-3 font-display text-3xl leading-tight">
              {training.title}
            </h3>
            <p className="mt-2 text-fg">{training.school}</p>
            <p className="text-muted">{training.format}</p>
            <p className="mt-4 text-muted">{training.body}</p>
            <p className="mt-5 inline-block rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
              {training.dates}
            </p>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
