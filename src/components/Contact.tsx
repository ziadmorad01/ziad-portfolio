import { contact, site } from "@/lib/content";
import {
  DownloadIcon,
  ExternalIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./Icons";
import Reveal from "./Reveal";

export default function Contact({ hasCv }: { hasCv: boolean }) {
  const rowClass =
    "group flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface px-5 py-4 transition-colors hover:border-accent";

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 py-20 sm:py-28"
    >
      <div className="container-x">
        <Reveal>
          <div className="card relative overflow-hidden p-8 sm:p-12 lg:p-16">
            <div
              aria-hidden
              className="glow -right-24 -top-24 h-80 w-80"
              style={{ background: "var(--glow-a)" }}
            />
            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="eyebrow">Contact</p>
                <h2
                  id="contact-title"
                  className="mt-3 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl"
                >
                  {contact.heading}
                </h2>
                <p className="mt-5 max-w-xl text-lg text-muted">
                  {contact.body}
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-solid px-6 py-3 font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  <MailIcon />
                  Email me
                </a>
              </div>

              <ul className="space-y-3">
                <li>
                  <a href={`mailto:${site.email}`} className={rowClass}>
                    <span className="flex min-w-0 items-center gap-3">
                      <MailIcon className="shrink-0 text-accent" />
                      <span className="min-w-0">
                        <span className="block text-xs text-muted">Email</span>
                        <span className="block truncate font-medium">
                          {site.email}
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={rowClass}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <LinkedInIcon className="shrink-0 text-accent" />
                      <span className="min-w-0">
                        <span className="block text-xs text-muted">LinkedIn</span>
                        <span className="block truncate font-medium">
                          linkedin.com/in/ziad-morad
                        </span>
                      </span>
                    </span>
                    <ExternalIcon className="shrink-0 text-muted" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={rowClass}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <GitHubIcon className="shrink-0 text-accent" />
                      <span className="min-w-0">
                        <span className="block text-xs text-muted">GitHub</span>
                        <span className="block truncate font-medium">
                          github.com/ziadmorad01
                        </span>
                      </span>
                    </span>
                    <ExternalIcon className="shrink-0 text-muted" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
                {hasCv && (
                  <li>
                    <a href={`/${site.cvFile}`} download className={rowClass}>
                      <span className="flex items-center gap-3">
                        <DownloadIcon className="shrink-0 text-accent" />
                        <span>
                          <span className="block text-xs text-muted">Résumé</span>
                          <span className="block font-medium">Download CV (PDF)</span>
                        </span>
                      </span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
