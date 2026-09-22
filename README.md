# Mohamed Alalwan — portfolio

A static Astro portfolio for Mohamed Alalwan. Project data lives in one catalog; longer case studies are Markdown files. The site has no Firebase backend, database, account, analytics or runtime API.

## Work locally

Use Node.js 22 or newer:

```bash
npm ci
npm run dev -- --port 4322
```

Before committing, run `npm run check` and `npm run build`. Open the local preview and check the edited page at desktop and mobile widths.

## Update content

| To change | Edit |
| --- | --- |
| Project title, summary, contribution, technologies, category, links | `src/data/projects.ts` |
| Longer professional case study | `src/content/work/*.md` |
| Name, social links and site summary | `src/data/site.ts` |
| Experience and homepage introduction | `src/pages/index.astro` |
| Downloadable CV | `public/Mohamed_Alalwan_CV.pdf` |
| Layout and styles | `src/components/`, `src/layouts/`, `src/styles/global.css` |

Give each new project a unique `id`. Add an optional `caseStudy` path only when its Markdown page exists. Keep outcomes attributable and verifiable, and never commit employer code, confidential client details, private datasets or credentials. Check every external link and review the CV for personal information before publishing it.

## Publish

Open a branch, make the change, then open a pull request against `main`. The GitHub Actions workflow runs Astro's checks and build on the pull request. Merging to `main` builds and deploys the site with GitHub Pages. The repository's Pages source must be **GitHub Actions**. The custom-domain and email setup is tracked in [LAUNCH.md](docs/LAUNCH.md).

The `mohamed-alalwan.github.io` repository belongs to Mohamed's **personal** GitHub account. Do not push through a work account or shared Git credential. The current repo is a local draft until the personal-account deployment is verified.

The draft contact address is `hello@mohamedalalwan.com`. It must be tested as a working forward before this version is published.
