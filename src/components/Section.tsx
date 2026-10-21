import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-20 py-20 sm:py-28"
    >
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id={`${id}-title`}
            className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl"
          >
            {title}
          </h2>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>
          )}
        </Reveal>
        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
