import {
  dotnetEvidence,
  foundationSkills,
  projectSkills,
  trainingSkills,
} from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

type Status = "used" | "partial" | "none" | "yes" | "goal";

const pill: Record<Status, { label: string; className: string }> = {
  used: {
    label: "Used in a project",
    className: "border-accent/40 bg-accent-soft text-accent",
  },
  partial: {
    label: "Partly",
    className: "border-accent/40 text-accent",
  },
  none: {
    label: "Not yet",
    className: "border-line text-muted",
  },
  yes: {
    label: "In DEPI training",
    className: "border-accent/40 bg-accent-soft text-accent",
  },
  goal: {
    label: "Learning goal",
    className: "border-dashed border-accent/60 text-accent",
  },
};

function StatusPill({ status }: { status: Status }) {
  const p = pill[status];
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[0.7rem] ${p.className}`}
    >
      {p.label}
    </span>
  );
}

function Chip({
  children,
  variant = "solid",
}: {
  children: React.ReactNode;
  variant?: "solid" | "goal";
}) {
  return (
    <li
      className={`rounded-lg border px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent ${
        variant === "goal"
          ? "border-dashed border-accent/60 text-accent"
          : "border-line bg-surface-2 text-fg"
      }`}
    >
      {children}
    </li>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical skills"
      title={
        <>
          What I&apos;ve <em className="text-accent">used</em>, and what I&apos;m{" "}
          <em className="text-accent">learning</em>.
        </>
      }
      intro="My .NET skills come from structured training. My project experience so far is in other stacks. Here is exactly where each technology stands."
    >
      {/* .NET evidence matrix */}
      <Reveal>
        <div className="card overflow-hidden">
          <div className="border-b border-line px-6 py-5 sm:px-8">
            <h3 className="font-display text-2xl">The .NET picture</h3>
            <p className="mt-1 text-sm text-muted">
              Project evidence vs. training, technology by technology.
            </p>
          </div>
          <ul className="divide-y divide-line">
            {dotnetEvidence.map((row) => (
              <li
                key={row.tech}
                className="grid gap-4 px-6 py-5 sm:px-8 md:grid-cols-[13rem_1fr_1fr] md:items-start md:gap-8"
              >
                <p className="font-medium">{row.tech}</p>
                <div>
                  <p className="eyebrow !text-muted">In a project</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <StatusPill status={row.project.status} />
                  </div>
                  <p className="mt-2 text-sm text-muted">{row.project.text}</p>
                </div>
                <div>
                  <p className="eyebrow !text-muted">In training</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <StatusPill status={row.training.status} />
                  </div>
                  <p className="mt-2 text-sm text-muted">{row.training.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Three groups */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-1">
          <div className="card h-full p-7">
            <p className="eyebrow">Used in projects</p>
            <h3 className="mt-2 font-display text-2xl">Technologies in my projects</h3>
            <div className="mt-6 space-y-6">
              {projectSkills.map((group) => (
                <div key={group.project}>
                  <p className="text-sm font-medium">
                    {group.project}{" "}
                    <span className="font-normal text-muted">· {group.kind}</span>
                  </p>
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="card h-full p-7">
            <p className="eyebrow">Learning now</p>
            <h3 className="mt-2 font-display text-2xl">DEPI Full Stack .NET track</h3>
            <p className="mt-3 text-sm text-muted">
              Covered by my ongoing six-month training program. Training, not
              professional experience.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {trainingSkills.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">Personal learning goal:</p>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              <Chip variant="goal">{trainingSkills.goal}</Chip>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="card h-full p-7">
            <p className="eyebrow">Foundations &amp; tools</p>
            <h3 className="mt-2 font-display text-2xl">Listed on my CV</h3>
            <p className="mt-3 text-sm text-muted">{foundationSkills.note}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {foundationSkills.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
