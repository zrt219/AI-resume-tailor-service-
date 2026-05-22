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

## On-Chain Systems Portfolio

Core XRPL EVM systems plus related public product and AI repositories from the same portfolio.

<table>
  <thead>
    <tr>
      <th>Project</th>
      <th>Description</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/zrt219/Zuc-Mine-Command-Center">ZUC Mine Command Center</a></td>
      <td>On-chain uranium mining operations dashboard with real-time reserve tracking, miner registry, and direct contract interaction through a frontend-only control surface.</td>
      <td><a href="https://zuc-mine-command-center.vercel.app/">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/-U235-Fuel-Cycle-">U235 Fuel Cycle</a></td>
      <td>Deterministic XRPL EVM fuel-cycle pipeline that tracks uranium batches from ore to enriched fuel rod with full on-chain traceability.</td>
      <td><a href="https://u235-fuel-cycle.vercel.app/">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/ISR-Network">ISR Network</a></td>
      <td>In-situ recovery control system with on-chain asset tracking, lifecycle state transitions, and operator-facing industrial simulation.</td>
      <td><a href="https://isr-network.vercel.app/">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/Dark-Matter-Farm">Dark Matter Farm</a></td>
      <td>XRPL EVM staking protocol with three orbit tiers, lock-period yield mechanics, and event-driven reward emissions.</td>
      <td><a href="https://dark-matter-farm.vercel.app/">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/Cohr-Lab">Cohr Lab</a></td>
      <td>Semiconductor laser fabrication lifecycle modeled as an immutable on-chain state machine from crystal growth to final pigtail.</td>
      <td><a href="https://cohr-lab.vercel.app">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/ForgeX">ForgeX</a></td>
      <td>Foundry-powered XRPL EVM deployment console that combines a natural-language UI, Node CLI orchestration, and realtime shader-based visuals.</td>
      <td><a href="https://forgex-theta.vercel.app">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/DatumX">DatumX</a></td>
      <td>Verification protocol for AI-transformed industrial data with deterministic lineage, validator review, and XRPL EVM finalization.</td>
      <td><a href="https://datumx.vercel.app">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/Ethex-Lottery-Game">Ethex Lottery Game</a></td>
      <td>Foundry plus Next.js betting workflow that modernizes the EthexLoto lifecycle for XRPL EVM reviewer-facing execution.</td>
      <td>Public Repo</td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/3DMoonX">3DMoonX</a></td>
      <td>Cinematic lunar industrial-base experience that combines Blender source assets with a React Three Fiber web runtime.</td>
      <td><a href="https://3dmoonx.vercel.app">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/Unknown002">Unknown002</a></td>
      <td>Browser-based 3D engineering viewer for a nuclear-electric propulsion spacecraft concept with staged prompt-pack support.</td>
      <td>Public Repo</td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/AI-Engineering-Evidence-Engine">AI Engineering Evidence Engine</a></td>
      <td>Interactive evidence dashboard that turns local engineering proof into a reviewer-facing systems narrative.</td>
      <td><a href="https://zhane-grey-evidence-dashboard.vercel.app/">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/Build-Doctor">Build Doctor</a></td>
      <td>Codex-style build diagnosis harness for failed Next.js and Vercel builds with deterministic failure analysis.</td>
      <td><a href="https://vercel-build-doctor-agent.vercel.app">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/ai-gateway-failover-playground">AI Gateway Failover Playground</a></td>
      <td>Public-facing sandbox for request routing, provider fallback, and resilient AI gateway behavior.</td>
      <td><a href="https://ai-gateway-failover-playground.vercel.app">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/enterprise-agent-workflow-studio">Enterprise Agent Workflow Studio</a></td>
      <td>Public-facing studio for approval-gated enterprise agent workflows, risk scoring, and audit-oriented design.</td>
      <td><a href="https://enterprise-agent-workflow-studio.vercel.app">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/resume-evidence-rag-auditor">Resume Evidence RAG Auditor</a></td>
      <td>Public-facing proof surface for claim verification, evidence retrieval, and grounded resume bullet generation.</td>
      <td><a href="https://resume-evidence-rag-auditor.vercel.app">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/AI-resume-tailor-service-">AI Resume Tailor Service</a></td>
      <td>Static Vercel-ready application for evidence-backed resume, cover-letter, and job-packet tailoring.</td>
      <td><a href="https://ai-resume-tailor-service.vercel.app">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/Fuji">Fuji</a></td>
      <td>Cinematic Next.js Fuji gallery atlas for portfolio storytelling and visual system design.</td>
      <td><a href="https://fuji-byzrt.vercel.app">Live</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/ld-2-0-website">LD 2.0 Website</a></td>
      <td>Next.js speaker website for Lornette Daye.</td>
      <td>Public Repo</td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/ai-agents-for-beginners">AI Agents for Beginners</a></td>
      <td>Lesson repository for getting started building AI agents.</td>
      <td>Public Repo</td>
    </tr>
    <tr>
      <td><a href="https://github.com/zrt219/agentic-rag-memory-digital-twin-edge-system">Agentic RAG Memory Digital Twin Edge System</a></td>
      <td>Public-facing landing page for an agentic RAG, memory, and digital-twin edge-system portfolio project.</td>
      <td><a href="https://agentic-rag-memory-digital-twin-edg.vercel.app">Live</a></td>
    </tr>
  </tbody>
</table>

## License / Usage

This repo currently has no explicit license file.

Treat it as a private portfolio/workflow project unless you intentionally add an open-source license later.
