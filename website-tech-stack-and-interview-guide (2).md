# Your websites: source code, tech stack, and interview guide

Prepared from the latest accessible source snapshots on 25 October 2026.

## Downloads

- **Texas Sign Studio** (the sign website you referred to): `texas-sign-source.zip`, containing 100 separate files. The same files are available individually in `texas-sign-source/`.
- **Quant Developer Portfolio**: `portfolio-source.zip`, containing 75 separate files. The same files are available individually in `portfolio-source/`.
- Source was copied without changes. Credentials, Git metadata, Lovable project metadata, internal agent notes, installed dependencies and build output were excluded. Local Texas Sign images are included. No live database records are included.

## 1. Tech stack you actually used

These are the versions declared in each project's package.json, not a claim about the currently deployed environment.

| Technology | Texas Sign Studio | Portfolio | How to explain it |
|---|---|---|---|
| React | ^19.2.0 | ^19.2.0 | Builds the interface from reusable pieces and handles interactive state. |
| TypeScript | ^5.8.3 | ^5.8.3 | Adds type checking to JavaScript, helping catch mistakes during development. |
| TanStack Start | 1.168.60 | 1.168.60 | Application framework supporting server rendering; the sign site also uses a server function. |
| TanStack Router | 1.170.41 | 1.170.41 | File-based, typed navigation between pages. |
| Tailwind CSS | ^4.2.1 | ^4.2.1 | Styles the layout and adapts it to different screen sizes. |
| Vite | 8.1.5 | 8.1.5 | Development server and production build tooling. |
| Reusable UI foundation | shadcn-style components / Radix UI | shadcn-style components / Radix UI | Shared controls; many supplied components are not used on the main page. |
| Lucide React | ^0.575.0 | ^0.575.0 | Interface icons. |
| Lovable | AI-assisted creation and configuration | AI-assisted creation and configuration | Helps generate and refine the implementation; be honest about your own contributions. |
| PostgreSQL through Lovable Cloud | Quote-request storage path implemented | No application database implemented | Stores sign enquiries, rather than the website's static service catalog. |
| Zod | Server-side quote validation (^3.25.76) | Installed; not evidence of portfolio form validation | Checks submitted fields before they are stored. |
| Vitest / Testing Library | Routing test files supplied | Routing test files supplied | Testing tools are included; tests were not run for this source export. |

Both projects include TanStack Query infrastructure, but the displayed service catalog and portfolio content are local/static. Do not describe those pages as fetching live data merely because a library is installed. Drizzle tooling is present in the sign project, but its schema file is blank; the implemented quote flow uses the Cloud client and the included SQL migration, not a demonstrated Drizzle ORM query.

## 2. Texas Sign Studio: what it does

A small-business sign website showing services, work examples, process information and a quote-request form. A data-driven service page uses a URL slug to select its content; an unknown slug produces a not-found page.

**Quote flow:** visitor fills the form → React gathers the fields → TanStack Start POST server function validates with Zod → a row is inserted into `quote_requests` → the interface shows success or an error.

**Important files to learn:**
- `src/routes/index.tsx`: main website.
- `src/routes/services.$slug.tsx`: individual service pages.
- `src/lib/services.ts`: local service catalog.
- `src/components/quote-form.tsx`: quote form and sending/success/error states.
- `src/lib/quote.functions.ts`: validation and storage request.
- `drizzle/migrations/0000_create_quote_requests.sql`: table and access-policy definition.
- `src/styles.css`: design tokens and styling.
- `package.json`: dependencies and available commands.

**Limits to disclose:** the source implements lead capture, not payments, an admin dashboard, a CMS, automated pricing, file uploads, or a sign-production system. Production quote delivery was not tested in this export. The displayed `(713) 000-0000` number is a placeholder, and business claims/work labels need confirmation.

### Short interview introduction

> “This is an AI-assisted small-business website project for a sign studio. It uses React, TypeScript, TanStack Start and Tailwind. The implementation includes a service catalog, individual service pages and a quote-request flow. The request is validated on the server before being stored in PostgreSQL through Lovable Cloud, and the interface includes sending, success and error states. Its scope is a business website and lead capture, not a complete operations platform.”

Add one truthful sentence about what **you personally** designed, changed, reviewed or tested. Do not say you tested the live database unless you actually did.

### Three likely questions

**How do the service pages work?** A single dynamic `/services/$slug` page looks up the slug in a shared catalog. This avoids duplicating a page for each service and provides consistent layout and not-found handling.

**Why validate on the server?** A visitor can bypass browser checks. The server checks required fields, email format and length limits before accepting the request. Validation does not replace spam protection or rate limits.

**How is customer information protected?** The supplied migration enables row-level security and an insert policy for quote requests. Review the exact migration before describing the policy; the exported source is not proof of the policies active in production. Never put privileged credentials in browser code.

## 3. Portfolio: what it does

A trading-terminal-inspired, single-page portfolio with Work, Stack, Experience and Contact sections. It has anchor navigation, project cards and a CSS-animated ticker.

**Important files to learn:**
- `src/routes/index.tsx`: portfolio sections, sample content, ticker and links.
- `src/routes/__root.tsx`: shared document shell, fonts and error views.
- `src/styles.css`: colors, layout and styling.
- `src/router.tsx`: router setup.
- `src/test/app-routing.test.tsx`: supplied routing test.
- `package.json`: dependencies and commands.

**Limits to disclose:** the ticker is hard-coded, not live market data. Project figures are sample presentation content, not verified trading results or benchmarks. Company/university names and contact destinations contain placeholders; the resume link points to `#`, not a downloadable resume. There is no portfolio-specific database, contact-submission form, brokerage connection, trading engine or backtesting engine implemented in this website. Skills listed on the page are not necessarily technologies used to build the website.

### Short interview introduction

> “This is an AI-assisted portfolio website built with React, TypeScript, TanStack Start and Tailwind. It organizes work, skills, experience and contact information into a single page with section navigation and a trading-terminal-inspired visual style. The ticker is a visual element driven by static data, not a live financial feed. Before sharing it as my finished portfolio, I would replace sample figures and placeholder links with accurate evidence of my work.”

Only describe listed finance projects, results or skills as your own when they are accurate and you can explain them independently.

### Three likely questions

**Is it a trading application?** No. It presents a portfolio using a financial visual theme. The website itself does not execute trades, fetch market prices or backtest strategies.

**Why one page?** It lets recruiters scan the work and experience quickly. Anchor links jump to sections without needing separate pages; detail pages could be added if projects need longer case studies.

**Why TypeScript and reusable components?** Types help catch incorrect values and props; shared controls keep behavior and styling consistent. Be prepared to show a real example from the code rather than only naming the tools.

## 4. How to explain your work confidently

Use this sequence in 45–60 seconds:
1. **Problem:** who the website is for and what they need.
2. **Solution:** show one central visitor journey.
3. **Your contribution:** exactly what you personally specified, edited, understood or tested.
4. **Technical choice:** explain one mechanism in plain language, such as a service slug or server validation.
5. **Boundary and next step:** name one real limitation and how you would address it.

**Honest AI-assistance answer:** “I used Lovable to help generate and refine the implementation. My personal contribution was [your actual work]. I can explain [the parts you genuinely understand], and I am still learning [the parts you have not worked through yet].”

Before the interview, run each project, open its main page file, trace one interaction, and make one small change you can explain. Practice showing the code that supports your answer. Do not claim you wrote every line, improved conversions, achieved trading performance, passed security testing or verified a deployment unless you have evidence. Confidence comes from understanding the implementation, not memorizing library names.

## 5. Running the source locally

Extract each ZIP and open that project's folder separately. Install Bun first if you want to use the included lockfile, then run:

```sh
bun install
bun run dev
```

The original README also offers `npm install` and `npm run dev`. The source includes `build`, `preview`, `lint` and `test` scripts. Installation, local builds and deployed behavior were not checked as part of this export. These projects retain the original Lovable Vite configuration and its package dependency; deployment elsewhere may require configuration changes.

**Texas Sign quote submissions require additional setup:** supply the appropriate Cloud environment values, including `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` on the server, and apply the included quote-table migration to the intended database. Generated browser client code reads `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` when used. These names are preserved from the original integration. The actual `.env` file and its values were intentionally not exported. Never put a service-role/privileged key in a `VITE_` variable or commit it to source control. Merely extracting the source does not transfer the hosted database or customer enquiries.

**Export verification:** both archives were inspected, their integrity checks passed, and their source-file lists were checked for excluded metadata, dependency folders and build output. This is a source audit and export—not an end-to-end test of either website.
