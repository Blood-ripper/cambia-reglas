const opportunities = [
  { type: "INTERNSHIP · REMOTE", title: "Frontend Intern", org: "Pixel Labs", stipend: "₹15k / month", match: 92, proof: 88, skill: "TypeScript" },
  { type: "STARTUP · HYBRID", title: "Founding Designer", org: "CampusCart", stipend: "Equity + certificate", match: 84, proof: 76, skill: "Product design" },
  { type: "FELLOWSHIP · ON CAMPUS", title: "AI for Social Good", org: "Sangam Labs", stipend: "₹10k grant", match: 78, proof: 91, skill: "Python" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-black tracking-tight">sangam<span className="text-[var(--blue)]">.</span></div>
        <div className="hidden gap-7 text-sm font-semibold md:flex"><a href="#opportunities">Opportunities</a><a href="#ideas">Idea Lab</a><a href="#trust">Trust system</a></div>
        <button className="rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-bold text-white">Join Sangam</button>
      </nav>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-12 md:grid-cols-[1.1fr_.9fr] md:items-center">
        <div><p className="mb-5 inline-block rounded-full bg-[#d9f4ed] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[var(--teal)]">Proof, not promises.</p><h1 className="max-w-2xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">Where talent, ideas and opportunities <span className="text-[var(--blue)]">meet.</span></h1><p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">One verified network for students, founders, mentors and recruiters. Discover real opportunities, build the skills you need and turn ideas into ventures.</p><div className="mt-8 flex flex-wrap gap-3"><button className="rounded-full bg-[var(--blue)] px-6 py-4 font-bold text-white">Explore opportunities →</button><button className="rounded-full border border-black/15 bg-white px-6 py-4 font-bold">Post an idea</button></div></div>
        <div className="rounded-[2rem] bg-[#17202a] p-5 text-white shadow-2xl"><div className="mb-5 flex items-center justify-between"><span className="text-sm font-bold text-white/60">YOUR SANGAM FEED</span><span className="rounded-full bg-[#d9f4ed] px-3 py-1 text-xs font-bold text-[var(--teal)]">3 new matches</span></div><div className="space-y-3">{opportunities.map((item) => <article key={item.title} className="rounded-2xl bg-white p-5 text-[var(--ink)]"><div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-black tracking-widest text-[var(--blue)]">{item.type}</p><h2 className="mt-2 text-lg font-black">{item.title}</h2><p className="text-sm text-[var(--muted)]">{item.org} · {item.stipend}</p></div><div className="text-right"><p className="text-2xl font-black text-[var(--blue)]">{item.match}%</p><p className="text-[10px] font-bold text-[var(--muted)]">MATCH</p></div></div><div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3 text-xs"><span>Hire-Proof <b>{item.proof}</b>/100</span><span className="rounded-full bg-[#fff4cc] px-2 py-1 font-bold">Gap: {item.skill}</span></div></article>)}</div></div>
      </section>
      <section id="trust" className="border-y border-black/10 bg-white"><div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3"><div><p className="text-4xl font-black">5</p><p className="mt-2 text-sm text-[var(--muted)]">roles, one verified network</p></div><div><p className="text-4xl font-black">100%</p><p className="mt-2 text-sm text-[var(--muted)]">reviews tied to real interactions</p></div><div><p className="text-4xl font-black">₹0</p><p className="mt-2 text-sm text-[var(--muted)]">free paths to close your skill gap</p></div></div></section>
      <section id="ideas" className="mx-auto max-w-6xl px-6 py-20"><p className="text-sm font-black uppercase tracking-widest text-[var(--teal)]">Next: Idea Lab</p><h2 className="mt-3 text-4xl font-black">Test before you build.</h2><p className="mt-4 max-w-xl text-[var(--muted)]">Post a problem, collect community votes and unlock co-founder and mentor matching when your Idea Pulse is strong.</p></section>
    </main>
  );
}
