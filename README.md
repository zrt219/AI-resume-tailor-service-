# AI Resume Tailor Service

Static Vercel-ready job-intelligence app for evidence-based AI engineering applications.

Live site:
[ai-resume-tailor-service.vercel.app](https://ai-resume-tailor-service.vercel.app/)

Related proof:
[zhane-grey-evidence-dashboard.vercel.app](https://zhane-grey-evidence-dashboard.vercel.app/)

Repository:
[zrt219/AI-resume-tailor-service-](https://github.com/zrt219/AI-resume-tailor-service-)

## What It Does

This app packages three things into one lightweight frontend:

- A `100` item job-lead library
- A top `10` tailored resume and cover-letter packet view
- A static security audit report

The goal is speed and reviewability, not fake automation. The app is deliberately static, transparent, and safe to deploy without secrets.

## Proof Context

This app is part of a broader AI engineering proof stack.

- Resume tailor app: role triage, packet drafting, and job-link review
- Evidence dashboard: recruiter-facing system proof and claim anchoring
- Resume source: recruiter-safe summary and public links

Use this project as the application surface and the evidence dashboard as the supporting proof surface.

## Truth Boundary

This project does **not** pretend all `100` leads are exact job postings.

- `exact` means the URL points to a specific role posting
- `search` means the URL points to a targeted search result or lead source

That distinction is visible in the UI and preserved in the data model. This keeps the app honest while still giving you a large working lead set.

The app also does **not**:

- auto-apply to jobs
- store credentials
- submit personal information
- claim unsupported experience
- run hidden backend enrichment

## Current Data Model

The core app state lives in [src/data.ts](C:/Users/Zhane/Documents/2018%20resume/2025+%20AFTER%20DIARY%20QUEEN/AI%20Engineer/AI-resume-tailor-service-/src/data.ts).

Main exports:

- `jobLeads`
- `topPackets`
- `securityAudit`
- `buildTailoredPacket()`

`jobLeads` contains:

- `id`
- `company`
- `role`
- `url`
- `location`
- `kind`
- `keywords`

`kind` is the main safety field because it marks each entry as `exact` or `search`.

## App Structure

- [src/main.tsx](C:/Users/Zhane/Documents/2018%20resume/2025+%20AFTER%20DIARY%20QUEEN/AI%20Engineer/AI-resume-tailor-service-/src/main.tsx)
  UI composition and state
- [src/data.ts](C:/Users/Zhane/Documents/2018%20resume/2025+%20AFTER%20DIARY%20QUEEN/AI%20Engineer/AI-resume-tailor-service-/src/data.ts)
  Job leads, scoring, tailored packet generation, audit content
- [src/styles.css](C:/Users/Zhane/Documents/2018%20resume/2025+%20AFTER%20DIARY%20QUEEN/AI%20Engineer/AI-resume-tailor-service-/src/styles.css)
  App styling
- [package.json](C:/Users/Zhane/Documents/2018%20resume/2025+%20AFTER%20DIARY%20QUEEN/AI%20Engineer/AI-resume-tailor-service-/package.json)
  Scripts and dependencies

## Local Development

From the project root:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview the built app locally:

```bash
npm run preview
```

## Deployment

This project is deployed on Vercel as:

- Project slug: `ai-resume-tailor-service`
- Production alias: [ai-resume-tailor-service.vercel.app](https://ai-resume-tailor-service.vercel.app/)
- Supporting proof app: [zhane-grey-evidence-dashboard.vercel.app](https://zhane-grey-evidence-dashboard.vercel.app/)

The deployment path used here was:

```bash
npx vercel link --project ai-resume-tailor-service --yes
npx vercel deploy --prod --yes
```

## How Tailoring Works Right Now

The current tailoring logic is heuristic and local.

It scores roles using:

- keyword overlap
- a bounded evidence vocabulary
- explicit exact/search labeling

It then generates:

- a fit score
- resume draft bullets
- cover-letter draft bullets
- a small evidence list

This is useful for fast triage, but it is **not** a full RAG or embeddings pipeline.

## Known Limits

- The top-10 packet generator is template-based, not LLM-generated
- Search leads are useful but weaker than exact postings
- There is no persistence layer yet
- There is no backend crawler, refresh job, or approval workflow yet

## Strong Next Steps

1. Replace part of `jobLeads` with `100` exact postings only
2. Add a refresh pipeline that rewrites `src/data.ts` from verified job scans
3. Add a proper evidence index for resume claims instead of static evidence strings
4. Add packet export to markdown or PDF
5. Add a recruiter-facing diff view between default and tailored packet output

## Verification

Verified during the current build cycle:

- `npm install`
- `npm run build`
- local preview returned `200 OK`
- production alias returned `200 OK`
- GitHub remote pushed successfully

## License / Usage

This repo currently has no explicit license file.

Treat it as a private portfolio/workflow project unless you intentionally add an open-source license later.
