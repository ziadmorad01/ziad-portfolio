import Image from "next/image";
import { hero, site, snapshot } from "@/lib/content";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
} from "./Icons";
import Reveal from "./Reveal";

export default function Hero({ hasCv }: { hasCv: boolean }) {
  return (
    <>
      <section
        id="top"
        aria-labelledby="hero-title"
        className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40"
      >
        {/* Decorative background */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_20%,#000,transparent_70%)]" />
          <div
            className="glow -left-24 -top-24 h-[28rem] w-[28rem]"
            style={{ background: "var(--glow-a)" }}
          />
          <div
            className="glow -right-20 top-40 h-[22rem] w-[22rem]"
            style={{ background: "var(--glow-b)", animationDelay: "-6s" }}
          />
        </div>

        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p
              className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur"
              style={{ ["--d" as string]: "0ms" }}
            >
              <span
                aria-hidden
                className="h-2 w-2 rounded-full bg-accent"
              />
              {hero.status}
            </p>

            <p
              className="rise eyebrow mt-8"
              style={{ ["--d" as string]: "80ms" }}
            >
              {site.role} · {site.headline}
            </p>

            <h1
              id="hero-title"
              className="rise mt-3 font-display text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.95] tracking-tight"
              style={{ ["--d" as string]: "160ms" }}
            >
              {site.name}
            </h1>

            <p
              className="rise mt-6 max-w-2xl font-display text-3xl leading-tight text-fg/90 sm:text-4xl"
              style={{ ["--d" as string]: "260ms" }}
            >
              {hero.tagline.before}
              <em className="text-accent">{hero.tagline.accent}</em>
            </p>

            <p
              className="rise mt-6 max-w-2xl text-lg text-muted"
              style={{ ["--d" as string]: "360ms" }}
            >
              {hero.summary}
            </p>

            <div
              className="rise mt-9 flex flex-wrap items-center gap-3"
              style={{ ["--d" as string]: "460ms" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-solid px-6 py-3 font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                View projects
                <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 font-medium text-fg transition-colors hover:border-accent hover:text-accent"
              >
                Get in touch
              </a>
              {hasCv && (
                <a
                  href={`/${site.cvFile}`}
                  download
                  className="inline-flex items-center gap-2 rounded-full px-4 py-3 font-medium text-muted transition-colors hover:text-fg"
                >
                  <DownloadIcon />
                  CV (PDF)
                </a>
              )}
            </div>

            <ul
              className="rise mt-8 flex items-center gap-3"
              aria-label="Social links"
              style={{ ["--d" as string]: "540ms" }}
            >
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in a new tab)"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-fg transition-colors hover:border-accent hover:text-accent"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in a new tab)"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-fg transition-colors hover:border-accent hover:text-accent"
                >
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>

          <div
            className="rise mx-auto w-full max-w-sm lg:max-w-none"
            style={{ ["--d" as string]: "300ms" }}
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-solid/40 via-transparent to-transparent blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface p-2">
                <Image
                  src="/images/ziad-morad.jpg"
                  alt="Portrait of Ziad Morad"
                  width={900}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 384px, 90vw"
                  className="aspect-square w-full rounded-[1.25rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter snapshot */}
      <section
        id="snapshot"
        aria-label="Snapshot"
        className="relative scroll-mt-20 pb-8"
      >
        <div className="container-x">
          <Reveal>
            <dl className="card grid gap-px overflow-hidden bg-line p-0 sm:grid-cols-2 lg:grid-cols-3">
              {snapshot.map((item) => (
                <div key={item.label} className="bg-surface px-6 py-5">
                  <dt className="eyebrow !text-muted">{item.label}</dt>
                  <dd className="mt-1.5 font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
