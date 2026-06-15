const profile = [
  { label: "Name", value: "Saurav Kumar" },
  { label: "Role", value: "Frontend Developer" },
  { label: "Experience", value: "3+ Years" },
  { label: "Location", value: "Chandigarh, India" },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap 5",
  "Ant Design",
  "Material UI",
  "SCSS",
  "Figma",
];

const workHistory = [
  {
    role: "Frontend Developer",
    company: "Suffesscom solution",
    period: "24 October 2024 - Present",
    description:
      "Building responsive React and Next.js interfaces with clean UI implementation, Tailwind CSS, and user-focused frontend experiences.",
  },
  {
    role: "Frontend Developer",
    company: "Henceforth Solution",
    period: "14 January 2023 - 30 August 2024",
    description:
      "Developed responsive web applications, reusable React components, and polished interfaces from design requirements.",
  },
];

const education = [
  "Bachelor of Technology - Career point University, Himachal Pradesh",
  "Higher Secondary - Govt Sen. sec School Dhundla",
  "Secondary - Govt Sen. sec School Dhundla",
];

export default function Resume() {
  return (
    <>
      <section className="mb-4 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-800/60 px-4 py-5 shadow-[0_25px_70px_rgba(15,23,42,0.4)] sm:px-6 sm:py-6">
        <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">Resume</p>
        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-black text-white sm:text-4xl">Saurav Kumar</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Frontend Developer focused on responsive, modern, and user-friendly web
              experiences using React.js, Next.js, Tailwind CSS, and component-driven UI.
            </p>
          </div>
          <a
            href="/saurav_kumar.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40"
          >
            Open Resume PDF
          </a>
        </div>
      </section>

      <section className="mb-4 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-4 shadow-[0_25px_70px_rgba(15,23,42,0.4)] sm:p-6">
          <h2 className="text-xl font-black text-white">Profile</h2>
          <div className="mt-4 grid gap-3">
            {profile.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-700/50 bg-slate-950/50 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{item.label}</p>
                <p className="mt-1 text-sm font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-4 shadow-[0_25px_70px_rgba(15,23,42,0.4)] sm:p-6">
          <h2 className="text-xl font-black text-white">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-4 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-4 shadow-[0_25px_70px_rgba(15,23,42,0.4)] sm:p-6">
        <h2 className="text-xl font-black text-white">Work Experience</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {workHistory.map((item) => (
            <article key={`${item.company}-${item.period}`} className="rounded-xl border border-slate-700/50 bg-slate-950/50 p-4">
              <p className="text-sm font-bold text-white">{item.role}</p>
              <p className="mt-1 text-sm text-cyan-300">{item.company}</p>
              <p className="mt-2 text-xs font-semibold text-slate-400">{item.period}</p>
              <p className="mt-3 text-xs leading-5 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-4 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-4 shadow-[0_25px_70px_rgba(15,23,42,0.4)] sm:p-6">
        <h2 className="text-xl font-black text-white">Education</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {education.map((item) => (
            <div key={item} className="rounded-xl border border-slate-700/50 bg-slate-950/50 p-4 text-sm font-semibold text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
