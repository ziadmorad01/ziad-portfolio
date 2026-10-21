import { site } from "@/lib/content";
import { ArrowUpIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-medium">{site.name}</p>
          <p className="text-sm text-muted">
            {site.role} · {site.location}
          </p>
          <p className="mt-1 text-sm text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
        <a
          href="#top"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          Back to top
          <ArrowUpIcon className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
