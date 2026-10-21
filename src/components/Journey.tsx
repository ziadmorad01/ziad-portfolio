import { journey } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

const stateLabel = {
  done: "Done",
  ongoing: "In progress",
  goal: "Goal",
} as const;

export default function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Learning journey"
      title={
        <>
          No formal experience yet. Here&apos;s how I&apos;m{" "}
          <em className="text-accent">building it.</em>
        </>
      }
      intro="University, hands-on projects and structured training, in the order they happened."
    >
      <ol className="relative max-w-3xl space-y-10 border-l border-line pl-8 sm:pl-10">
        {journey.map((step, i) => (
          <li key={step.title} className="relative">
            <span
              aria-hidden
              className={`absolute -left-[2.55rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 sm:-left-[3.05rem] ${
                step.state === "goal"
                  ? "border-dashed border-accent bg-bg"
                  : "border-accent bg-accent"
              }`}
            />
            <Reveal delay={i * 60}>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {step.when}{" "}
                <span className="ml-2 rounded-full border border-line px-2 py-0.5 normal-case tracking-normal text-accent">
                  {stateLabel[step.state]}
                </span>
              </p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-2 text-muted">{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
