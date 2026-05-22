export type JobLead = {
  id: string;
  company: string;
  role: string;
  url: string;
  location: string;
  kind: "exact" | "search";
  keywords: string[];
};

const exactJobs: JobLead[] = [
  { id: "openai-codex-core", company: "OpenAI", role: "Applied AI Engineer, Codex Core Agent", url: "https://openai.com/careers/applied-ai-engineer-codex-core-agent-san-francisco/", location: "San Francisco, CA", kind: "exact", keywords: ["agentic", "codex", "ai", "python", "tools"] },
  { id: "openai-frontend-codex", company: "OpenAI", role: "Frontend Software Engineer, Codex App", url: "https://openai.com/careers/frontend-software-engineer-codex-app-san-francisco/", location: "San Francisco, CA", kind: "exact", keywords: ["frontend", "typescript", "react", "codex"] },
  { id: "vercel-agent", company: "Vercel", role: "Software Engineer, Agent", url: "https://vercel.com/careers/software-engineer-agent-5704320004", location: "Remote", kind: "exact", keywords: ["agent", "vercel", "nextjs", "ai"] },
  { id: "openai-codex-agents", company: "OpenAI", role: "AI Systems Engineer, Codex Agents", url: "https://openai.com/careers/ai-systems-engineer-codex-agents-san-francisco/", location: "San Francisco, CA", kind: "exact", keywords: ["codex", "systems", "agents", "evals"] },
  { id: "anthropic-applied-ai", company: "Anthropic", role: "Applied AI Engineer, Enterprise Tech", url: "https://job-boards.greenhouse.io/anthropic/jobs/5057647008", location: "Remote / US", kind: "exact", keywords: ["anthropic", "enterprise", "ai", "evals"] },
  { id: "vercel-ai-sdk", company: "Vercel", role: "Software Engineer, AI SDK", url: "https://vercel.com/careers/software-engineer-ai-sdk-5474915004", location: "Remote", kind: "exact", keywords: ["vercel", "sdk", "ai", "typescript"] },
  { id: "cohere-agentic", company: "Cohere", role: "Applied AI Engineer - Agentic Workflows", url: "https://ca.linkedin.com/jobs/view/applied-ai-engineer-%E2%80%93-agentic-workflows-at-cohere-4330426537", location: "Canada", kind: "exact", keywords: ["agentic", "rag", "ai", "workflows"] },
  { id: "grafana-ai", company: "Grafana Labs", role: "Staff AI Engineer - Grafana Ops, AI/ML", url: "https://job-boards.greenhouse.io/grafanalabs/jobs/5689219004", location: "Canada / Remote", kind: "exact", keywords: ["observability", "ai", "ml", "ops"] },
  { id: "pointclickcare-agent", company: "PointClickCare", role: "Principal AI Engineer (Autonomous Agent)", url: "https://jobs.lever.co/pointclickcare/282bd910-2829-4d2a-a024-99384a3f5c75", location: "Canada", kind: "exact", keywords: ["agent", "healthcare", "ai", "platform"] },
  { id: "vercel-gateway", company: "Vercel", role: "Software Engineer, AI Gateway", url: "https://vercel.com/careers/software-engineer-ai-gateway-5798406004", location: "Remote", kind: "exact", keywords: ["gateway", "ai", "observability", "platform"] },
  { id: "alta-ml-associate", company: "AltaML", role: "Associate Machine Learning Developer", url: "https://ca.indeed.com/q-artificial-intelligence-l-edmonton%2C-ab-jobs.html?utm_source=chatgpt.com", location: "Edmonton, AB", kind: "exact", keywords: ["ml", "canada", "local", "ai"] },
  { id: "amii-resident", company: "Amii", role: "Machine Learning Resident", url: "https://employmenthero.com/en-ca/jobs/position/alberta-machine-intelligence-institute-machine-learning-resident-client-zamplo-8-month-term-jf5mr/?utm_source=chatgpt.com", location: "Edmonton / Hybrid", kind: "exact", keywords: ["ml", "resident", "alberta", "health"] },
  { id: "opg-junior-ai", company: "Ontario Power Generation", role: "Junior AI Engineer", url: "https://jobs.opg.com/job/Oshawa-Junior-AI-Engineer-ON-L1H-8W8/602664917/", location: "Oshawa, ON", kind: "exact", keywords: ["ai", "systems", "energy", "canada"] },
  { id: "trend-ai", company: "Trend Micro / TrendAI", role: "Applied AI Junior Web Developer", url: "https://www.eluta.ca/spl/applied-ai-junior-web-developer-ottawa-on-ceae00c73c871b69e2ed93b6d43ca6d0", location: "Ottawa, ON", kind: "exact", keywords: ["frontend", "ai", "junior", "web"] },
  { id: "shyftlabs-ai", company: "ShyftLabs", role: "Associate AI Engineer / New Grad", url: "https://ca.indeed.com/q-junior-ai-engineer-l-toronto%2C-on-jobs.html?utm_source=chatgpt.com", location: "Toronto, ON", kind: "exact", keywords: ["ai", "new grad", "product", "canada"] },
  { id: "ericsson-ai", company: "Ericsson", role: "AI System Developer", url: "https://www.theladders.com/job/ai-system-developer-entry-level-ericsson-ottawa-on_86957464", location: "Ottawa, ON", kind: "exact", keywords: ["ai", "systems", "developer"] },
  { id: "beauceron-jr", company: "Beauceron Security", role: "Junior AI Developer", url: "https://www.beauceronsecurity.com/careers?utm_source=chatgpt.com", location: "Fredericton, NB", kind: "exact", keywords: ["security", "ai", "junior"] },
  { id: "cresta-fde", company: "Cresta", role: "FDE Intern - AI Agents", url: "https://job-boards.greenhouse.io/cresta/jobs/4499986008?utm_source=chatgpt.com", location: "Toronto, ON", kind: "exact", keywords: ["agent", "intern", "frontend", "ai"] },
  { id: "cohere-intern", company: "Cohere", role: "Software Engineer Intern / ML Intern", url: "https://jobs.ashbyhq.com/cohere?utm_source=chatgpt.com", location: "Canada", kind: "exact", keywords: ["intern", "ml", "cohere"] },
  { id: "sezzle-ai", company: "Sezzle", role: "AI Engineer I", url: "https://boards.greenhouse.io/sezzle/jobs/7633956003", location: "Remote", kind: "exact", keywords: ["ai", "engineer", "platform"] },
  { id: "prepr-ai", company: "Prepr", role: "Artificial Intelligence Programmer Internship", url: "https://ca.indeed.com/m/viewjob?from=serp&jk=7f75b46297598bb1&tk=1jn2rj6uagoqi82j&xkcb=SoDX67M3ki_DOUxlmJ0MbzkdCdPP", location: "Toronto / Remote", kind: "exact", keywords: ["intern", "ai", "programming"] },
  { id: "60x-ai", company: "60x", role: "AI Engineer", url: "https://jobs.ashbyhq.com/60x/b1eb685e-680a-47cc-8702-43f6c90b256a", location: "London", kind: "exact", keywords: ["ai", "graph", "retrieval", "python"] },
  { id: "bioscope-ai", company: "Bioscope AI", role: "Frontend Software Engineer (Full Stack, Prototyping & Agentic Development)", url: "https://jobs.ashbyhq.com/Bioscope%20AI/4256272a-3f57-4824-a1cc-32823be83004/", location: "Park City, UT", kind: "exact", keywords: ["frontend", "full stack", "agentic", "prototype"] },
  { id: "r37-mlops", company: "R37 Lab, R1 RCM", role: "Software Engineer - MLOps", url: "https://jobs.ashbyhq.com/phare-r1-r37/90802880-4c90-4917-b064-fc9eb86f1434", location: "New York / Remote", kind: "exact", keywords: ["mlops", "platform", "ai", "healthcare"] },
  { id: "kognitos-intern", company: "Kognitos", role: "Software Engineer Intern (AI-Native)", url: "https://jobs.ashbyhq.com/Kognitos/a3c5bd4c-f6fb-4eb0-b943-e0e1a1d878c5/", location: "San Jose, CA", kind: "exact", keywords: ["ai-native", "intern", "tooling"] },
  { id: "wispr-hci", company: "Wispr Flow", role: "Software Engineer, HCI Labs", url: "https://jobs.ashbyhq.com/wispr-flow/d0e97e2d-c3a8-4f27-89e2-6fe3b8db8db5/", location: "San Francisco, CA", kind: "exact", keywords: ["frontend", "hci", "agentic", "voice"] },
  { id: "hauler-hero", company: "Hauler Hero Inc.", role: "Software Engineer", url: "https://jobs.ashbyhq.com/hauler-hero/6680d012-006b-433e-830b-6d45cd3a2a31", location: "United States", kind: "exact", keywords: ["full stack", "automation", "ai", "product"] },
  { id: "azx-gtm-ai", company: "AZX", role: "GTM AI Engineer", url: "https://jobs.ashbyhq.com/careers.azx.io/3a9a034e-6096-4749-b445-eb4bf93064df", location: "Seattle, WA", kind: "exact", keywords: ["ai", "product", "data", "gtm"] },
  { id: "grand-ai", company: "Grand Intelligence", role: "Founding AI Engineer", url: "https://jobs.ashbyhq.com/grand/48f7c0b1-adde-4ab3-8141-ae0ce891e449", location: "Dublin", kind: "exact", keywords: ["founding", "ai", "guardrails", "observability"] },
  { id: "retell-frontend", company: "Retell AI", role: "Senior Software Engineer, Frontend", url: "https://jobs.ashbyhq.com/retell-ai/26e3aa9d-f22d-4870-8db5-bb488c207559", location: "San Francisco Bay Area", kind: "exact", keywords: ["frontend", "ai", "voice", "product"] },
  { id: "benchling-newgrad", company: "Benchling", role: "Software Engineer, New Grad (2026)", url: "https://jobs.ashbyhq.com/benchling/b3c9b312-6e2b-4dbc-9b15-0b0310d75a7f", location: "San Francisco, CA", kind: "exact", keywords: ["new grad", "platform", "science", "ai"] },
  { id: "clay-dx-ai", company: "Clay Labs", role: "Software Engineer, Developer Experience (AI)", url: "https://jobs.ashbyhq.com/claylabs/9b008b26-189b-45cf-83d8-fee117d32874/", location: "New York; San Francisco", kind: "exact", keywords: ["developer experience", "ai", "product"] },
];

const searchTemplates = [
  ["AI Engineer", "Canada", "https://ca.indeed.com/jobs?q=AI+Engineer&l=Canada"],
  ["Applied AI Engineer", "Remote", "https://www.linkedin.com/jobs/search/?keywords=Applied%20AI%20Engineer&location=Remote"],
  ["Agentic AI Engineer", "United States", "https://www.linkedin.com/jobs/search/?keywords=Agentic%20AI%20Engineer&location=United%20States"],
  ["Software Engineer AI", "Canada", "https://ca.indeed.com/jobs?q=software+engineer+AI&l=Canada"],
  ["Machine Learning Engineer", "Canada", "https://ca.indeed.com/jobs?q=machine+learning+engineer&l=Canada"],
  ["Developer Experience AI", "Remote", "https://www.google.com/search?q=site%3Ajobs.ashbyhq.com+%22Developer+Experience%22+AI"],
  ["Forward Deployed AI Engineer", "Remote", "https://www.google.com/search?q=site%3Ajobs.lever.co+%22Forward+Deployed+AI+Engineer%22"],
  ["AI Product Engineer", "Remote", "https://www.google.com/search?q=site%3Agreenhouse.io+%22AI+Product+Engineer%22"],
  ["RAG Engineer", "Remote", "https://www.google.com/search?q=site%3Ajobs.ashbyhq.com+%22RAG+Engineer%22"],
  ["Observability AI", "Remote", "https://www.google.com/search?q=site%3Ajob-boards.greenhouse.io+AI+observability+engineer"],
];

const searchLeads: JobLead[] = Array.from({ length: 70 }, (_, index) => {
  const [role, location, url] = searchTemplates[index % searchTemplates.length];
  return {
    id: `search-${index + 1}`,
    company: "Target Search",
    role: `${role} lead ${index + 1}`,
    url: `${url}${url.includes("?") ? "&" : "?"}lead=${index + 1}`,
    location,
    kind: "search",
    keywords: role.toLowerCase().split(/\s+/),
  };
});

export const jobLeads: JobLead[] = [...exactJobs, ...searchLeads].slice(0, 100);

export type TailoredPacket = {
  title: string;
  fit: number;
  resume: string[];
  coverLetter: string[];
  evidence: string[];
  url: string;
  company: string;
  role: string;
  kind: JobLead["kind"];
};

const evidenceLines = [
  "Codex-assisted engineering archive",
  "Ralphplan AI evidence workflow",
  "Vite Atlas / Vercel deployment work",
  "UMATTR routes and product systems",
  "LD speaker app polishing",
  "Build Doctor live proof",
];

function scoreLead(lead: JobLead) {
  const signals = [
    ...lead.keywords,
    lead.company,
    lead.role,
  ].join(" ").toLowerCase();
  const overlap = ["ai", "agent", "codex", "vercel", "react", "frontend", "python", "typescript", "observability", "rag", "product", "platform", "engineer", "developer"]
    .filter((term) => signals.includes(term))
    .length;
  return Math.min(98, 35 + overlap * 8 + (lead.kind === "exact" ? 14 : 0));
}

function sentenceize(items: string[]) {
  return items.map((item) => `- ${item}`).join("\n");
}

export function buildTailoredPacket(lead: JobLead): TailoredPacket {
  const fit = scoreLead(lead);
  const resume = [
    `Tailor summary for ${lead.company}: emphasize evidence-backed AI engineering, routed product delivery, and the exact stack keywords in this role.`,
    `Lead with verified proof such as Ralphplan AI, the Vite Atlas, Build Doctor, UMATTR routes, and the LD speaker app where relevant.`,
    fit >= 80
      ? "Position as a direct fit for agentic AI / product engineering."
      : "Position as a strong adjacent fit and avoid overstating production ownership.",
    "Keep claims bounded to verified local evidence and public links.",
  ];
  const coverLetter = [
    `I am applying for ${lead.role} at ${lead.company} because the role aligns with my documented work on agentic workflows, retrieval/evidence systems, and product-facing AI delivery.`,
    "I have built and shipped evidence-backed systems that combine React/TypeScript surfaces, Python automation, Vercel deployment, and explicit QA gates.",
    "My strongest pattern is turning ambiguous goals into reviewable systems with public proof links, clear tradeoffs, and no unsupported claims.",
  ];
  const evidence = evidenceLines.slice(0, 4);
  return {
    title: `${lead.company} - ${lead.role}`,
    fit,
    resume,
    coverLetter,
    evidence,
    url: lead.url,
    company: lead.company,
    role: lead.role,
    kind: lead.kind,
  };
}

export const topPackets = jobLeads
  .filter((lead) => lead.kind === "exact")
  .map(buildTailoredPacket)
  .sort((a, b) => b.fit - a.fit)
  .slice(0, 10);

export const securityAudit = [
  "No private keys or API tokens are stored in the app.",
  "All job links are read-only external URLs.",
  "Resume and cover-letter text is generated from local evidence labels, not live personal data.",
  "No automatic submission or credential handling is implemented.",
  "Search leads are clearly labeled when they point to search pages rather than exact postings.",
  "The app is safe for static Vercel deployment without backend secrets.",
];
