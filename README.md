# Ziad Morad — Portfolio

A fast, accessible, SEO-friendly portfolio for a Software Engineering student
pursuing Full Stack .NET development. Built with **Next.js (App Router)**,
**TypeScript** and **Tailwind CSS v4**. Fonts are self-hosted and there are no
third-party scripts or widgets.

This is a **new, standalone project**. It does not touch the existing
`ziadmorad.vercel.app` deployment or its repository.

## Features

- Sections: Hero, recruiter snapshot, About, Skills, Projects, Learning journey, Education & training, Contact
- Skills separated by evidence: used in projects, in DEPI training, and foundations
- A ".NET picture" table showing exactly where C#, ASP.NET Core, SQL Server, REST APIs and Entity Framework Core stand
- Dark/light theme toggle (saved, respects system preference, no flash on load)
- Responsive layout, keyboard-accessible navigation, skip link, visible focus states
- Motion that respects `prefers-reduced-motion`
- SEO: metadata, Open Graph / Twitter image, JSON-LD `Person`, sitemap, robots.txt
- Privacy guard: the build fails if a phone-number-like value appears in the source

## Requirements

- Node.js **20.9 or newer** (check with `node -v`)
- npm (comes with Node)

## Run locally

```bash
cd ziad-portfolio
npm install
npm run dev
```

Open <http://localhost:3000>.

Other commands:

```bash
npm run typecheck      # TypeScript check
npm run build          # production build (also runs the privacy check)
npm run start          # serve the production build on http://localhost:3000
npm run check:privacy  # run only the phone-number guard
```

## Where to edit things

| What | Where |
| --- | --- |
| All text, skills, projects, links | `src/lib/content.ts` |
| Colors and theme tokens | `src/app/globals.css` (top of file) |
| Profile photo | `public/images/ziad-morad.jpg` (replace, keep the filename) |
| Project screenshots | `public/images/projects/`, then set `screenshot` in `content.ts` |
| Page title / description / SEO | `src/lib/content.ts` (`site`) and `src/app/layout.tsx` |

### Adding your CV (important: privacy)

The CV button only appears if `public/Ziad-Morad-CV.pdf` exists. Your current
CV contains your phone number, so it is **not** included.

1. Export a copy of your CV **without the phone number**.
2. Save it as `public/Ziad-Morad-CV.pdf`.
3. Open the PDF and confirm there is no phone number in it, in any form.
4. Restart `npm run dev` (or rebuild). The "CV (PDF)" buttons will appear.

Anything placed in `public/` is downloadable by anyone, so only add files you
are happy to publish.

### Adding real project screenshots

1. Put real screenshots in `public/images/projects/` (about 1280×800).
2. In `src/lib/content.ts`, set the project's field, for example
   `screenshot: "/images/projects/skyreserve.png"`.

Until you do, the site shows a clearly labeled "Screenshot placeholder".

### Adding repository links

In `src/lib/content.ts`, replace `repo: null` with
`repo: { url: "https://github.com/...", label: "View repository" }` and update
`repoNote`.

## Deploy to Vercel

This deploys as a **new Vercel project** under a new URL. Your existing site is
unaffected.

### Option A: GitHub + Vercel dashboard (recommended)

1. Create a **new, empty** GitHub repository (for example `ziad-portfolio`). Do
   not reuse your existing v0 repository.
2. Push this project to it:
   ```bash
   cd ziad-portfolio
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ziadmorad01/ziad-portfolio.git
   git push -u origin main
   ```
3. Go to <https://vercel.com/new>, choose **Import Git Repository**, and select
   the new repository.
4. Vercel detects Next.js automatically. Keep the defaults:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Output directory: default
5. Click **Deploy**. When it finishes you get a URL like
   `https://ziad-portfolio.vercel.app`.

### Option B: Vercel CLI

```bash
npm i -g vercel
cd ziad-portfolio
vercel          # first run: answer the prompts, creating a NEW project
vercel --prod   # deploy to production
```

When asked "Link to existing project?", answer **No**.

### After the first deploy

- **Environment variable (optional):** On Vercel the production domain is
  detected automatically. If you add a custom domain, set
  `NEXT_PUBLIC_SITE_URL` (Project → Settings → Environment Variables) to that
  domain, for example `https://ziadmorad.dev`, then redeploy. This keeps the
  canonical URL, social previews, sitemap and robots.txt correct.
- **Check the result:**
  - `/sitemap.xml` and `/robots.txt` load
  - Share the URL in a chat app and confirm the preview card appears
  - Run Lighthouse in Chrome DevTools (Accessibility, Best Practices, SEO)

### Switching your main domain later (optional)

Once you are happy with the new site, you can point your preferred domain at
it in Project → Settings → Domains. Do this deliberately, because it replaces
what that domain currently shows. Nothing in this project does it for you.

## Content rules this project follows

- Everything comes from the CV and details supplied by Ziad. No invented
  experience, metrics, achievements or contributions.
- AI assistance is disclosed on the page. Projects are described by their goals,
  features and technologies only.
- Technologies are labeled by evidence: used in a project, covered by DEPI
  training, or listed as a foundation.
- No phone number appears anywhere. `npm run build` fails if one is added.

## Project structure

```
src/
  app/            layout, page, SEO files (sitemap, robots, OG image, icon)
  components/     Header, Hero, About, Skills, Projects, Journey, Education, Contact, Footer
  lib/            content.ts (all copy), siteUrl.ts
public/
  images/         profile photo, project screenshots
scripts/
  check-no-phone.mjs   privacy guard run before every build
```
