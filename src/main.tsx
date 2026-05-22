import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { buildTailoredPacket, jobLeads, securityAudit, topPackets, type JobLead } from "./data";
import "./styles.css";

function App() {
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState<JobLead>(jobLeads[0]);
  const filtered = useMemo(() => {
    const q = filter.toLowerCase().trim();
    return jobLeads.filter((lead) => `${lead.company} ${lead.role} ${lead.location} ${lead.url}`.toLowerCase().includes(q));
  }, [filter]);
  const packet = buildTailoredPacket(selected);

  return (
    <main className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">AI RESUME TAILOR SERVICE</p>
          <h1>100 job leads, top-10 tailored packets, and a security audit</h1>
          <p className="lede">
            Static Vercel-ready app for evidence-based job matching. Exact live role links are mixed with labeled search leads so the list reaches 100 without fake postings.
          </p>
        </div>
        <div className="hero-stats">
          <div><strong>{jobLeads.length}</strong><span>job leads</span></div>
          <div><strong>{topPackets.length}</strong><span>tailored packets</span></div>
          <div><strong>{securityAudit.length}</strong><span>audit checks</span></div>
        </div>
      </header>

      <section className="panel">
        <div className="panel-head">
          <h2>Job Library</h2>
          <input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter company, role, location, or URL" />
        </div>
        <div className="job-grid">
          {filtered.map((lead) => (
            <button key={lead.id} className={`job-card ${lead.id === selected.id ? "active" : ""}`} onClick={() => setSelected(lead)}>
              <div className="job-top">
                <strong>{lead.company}</strong>
                <span className={`pill ${lead.kind}`}>{lead.kind}</span>
              </div>
              <div className="job-role">{lead.role}</div>
              <div className="job-meta">{lead.location}</div>
              <a href={lead.url} target="_blank" rel="noreferrer">{lead.url}</a>
            </button>
          ))}
        </div>
      </section>

      <section className="layout-2">
        <article className="panel">
          <div className="panel-head">
            <h2>Top 10 Tailored Packets</h2>
            <span className="note">Ranked by local evidence overlap</span>
          </div>
          <div className="packet-list">
            {topPackets.map((entry) => (
              <div key={entry.title} className="packet-card">
                <div className="job-top">
                  <strong>{entry.title}</strong>
                  <span className="score">{entry.fit}</span>
                </div>
                <div className="packet-cols">
                  <div>
                    <h3>Resume bullets</h3>
                    {entry.resume.map((line) => <p key={line}>{line}</p>)}
                  </div>
                  <div>
                    <h3>Cover letter bullets</h3>
                    {entry.coverLetter.map((line) => <p key={line}>{line}</p>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <aside className="panel">
          <div className="panel-head">
            <h2>Selected Lead Packet</h2>
            <span className="note">{packet.kind === "exact" ? "exact role" : "search lead"}</span>
          </div>
          <div className="selected-box">
            <h3>{packet.title}</h3>
            <p><strong>Fit:</strong> {packet.fit}</p>
            <p><strong>URL:</strong> <a href={packet.url} target="_blank" rel="noreferrer">{packet.url}</a></p>
            <h4>Resume draft</h4>
            <pre>{packet.resume.map((line) => `• ${line}`).join("\n")}</pre>
            <h4>Cover letter draft</h4>
            <pre>{packet.coverLetter.map((line) => `• ${line}`).join("\n")}</pre>
            <h4>Evidence</h4>
            <ul>{packet.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </aside>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>Security Audit Report</h2>
          <span className="note">Local static checks</span>
        </div>
        <ul className="audit-list">
          {securityAudit.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
