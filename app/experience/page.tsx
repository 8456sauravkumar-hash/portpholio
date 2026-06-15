const experiences = [
  {
    role: "UI Developer",
    company: "Suffesscom solution",
    period: { start: "24 October 2024", end: "Present" },
    description: "Designing responsive, modern web interfaces with exceptional UI/UX. Creating interactive React components with Tailwind CSS and Figma designs that deliver seamless user experiences.",
    skills: ["React", "Figma", "Tailwind CSS", "UI/UX Design"],
  },
  {
    role: "UI Developer",
    company: "Henceforth Solution",
    period: { start: "14 January 2023", end: "30 August 2024" },
    description: "Developed React applications with focus on UI/UX implementation. Built responsive web interfaces using modern JavaScript and component-based architecture.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
  },
];

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "Career point University",
    location: "Himachal Pradesh",
    year: "August 2020",
    grade: "CGPA: 7.8/10",
  },
  {
    degree: "Higher Secondary",
    institution: "Govt Sen. sec School Dhundla",
    location: "Himachal Pradesh",
    year: "March 2016",
    percentage: "Percentage: 68%",
  },
  {
    degree: "Secondary",
    institution: "Govt Sen. sec School Dhundla",
    location: "Himachal Pradesh",
    year: "March 2014",
    percentage: "Percentage: 75%",
  },
];

const skills = [
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js"] },
  { category: "Design & Styling", items: ["Tailwind CSS", "Figma", "UI/UX Design", "Responsive Design"] },
  { category: "Tools", items: ["Git", "Visual Studio Code", "Figma", "Browser DevTools"] },
];

export default function Experience() {
  return (
    <>
        {/* Hero */}
        <section className="mb-4 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-800/60 px-4 py-5 shadow-[0_25px_70px_rgba(15,23,42,0.4)] sm:px-6 sm:py-6">
          <p className="text-xs uppercase tracking-wider font-bold text-cyan-300">Professional Journey</p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">Experience &amp; Expertise</h1>
          <p className="mt-2 text-sm text-slate-300 max-w-2xl">
            3+ years of crafting beautiful, functional digital experiences. From frontend development to UI/UX design, I bring ideas to life with code and creativity.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-4 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-4 shadow-[0_25px_70px_rgba(15,23,42,0.4)] sm:p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="text-2xl">💼</div>
            <h2 className="text-xl font-black text-white sm:text-2xl">Work Experience</h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {experiences.map((exp, idx) => (
              <div key={idx} className="rounded-xl border border-slate-700/50 bg-slate-950/50 p-4 hover:border-cyan-400/50 transition">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-bold text-white">{exp.role}</h3>
                    <p className="text-sm text-cyan-300">{exp.company}</p>
                  </div>
                  <div className="text-left text-xs text-slate-400 sm:text-right">
                    <p className="font-semibold">{exp.period.start}</p>
                    <p className="text-slate-500">{exp.period.end}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-300">{exp.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="inline-flex rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-300 border border-cyan-400/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-4 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-4 shadow-[0_25px_70px_rgba(15,23,42,0.4)] sm:p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="text-2xl">🎓</div>
            <h2 className="text-xl font-black text-white sm:text-2xl">Education</h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {education.map((edu, idx) => (
              <div key={idx} className="rounded-xl border border-slate-700/50 bg-slate-950/50 p-4 hover:border-cyan-400/50 transition">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-bold text-white">{edu.degree}</h3>
                    <p className="text-sm text-cyan-300">{edu.institution}</p>
                    <p className="text-xs text-slate-400 mt-1">{edu.location}</p>
                  </div>
                  <div className="text-left text-xs text-slate-400 sm:text-right">
                    <p className="font-semibold">{edu.year}</p>
                    <p className="text-slate-500 mt-1">{edu.grade || edu.percentage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills by Category */}
        <section className="mb-4 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-4 shadow-[0_25px_70px_rgba(15,23,42,0.4)] sm:p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="text-2xl">⚡</div>
            <h2 className="text-xl font-black text-white sm:text-2xl">Skills &amp; Technologies</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="rounded-xl border border-slate-700/50 bg-slate-950/50 p-4">
                <h3 className="font-bold text-white text-sm mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="inline-flex rounded-lg bg-slate-800/50 px-2.5 py-1 text-[10px] font-semibold text-slate-200 border border-slate-600/50 hover:border-cyan-400/50 transition">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-4 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-4 shadow-[0_25px_70px_rgba(15,23,42,0.4)] sm:p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-700/50 bg-slate-950/50 p-4 text-center hover:border-cyan-400/50 transition">
              <p className="text-3xl font-black text-cyan-300">3+</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-1">Years Experience</p>
            </div>
            <div className="rounded-xl border border-slate-700/50 bg-slate-950/50 p-4 text-center hover:border-cyan-400/50 transition">
              <p className="text-3xl font-black text-cyan-300">10+</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-1">Projects Completed</p>
            </div>
            <div className="rounded-xl border border-slate-700/50 bg-slate-950/50 p-4 text-center hover:border-cyan-400/50 transition">
              <p className="text-3xl font-black text-cyan-300">100%</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-1">Client Satisfaction</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-4 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 shadow-[0_25px_70px_rgba(15,23,42,0.4)] sm:p-6">
          <div className="text-center">
            <h2 className="text-xl font-black text-white sm:text-2xl">Interested in working together?</h2>
            <p className="mt-2 text-sm text-slate-300">Let&apos;s discuss how I can help bring your vision to life.</p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="mailto:sauravkharyal@gmail.com" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40">
                📧 Get in Touch
              </a>
              <a href="https://www.linkedin.com/in/saurav-kumar-88a283241" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg border border-cyan-400/30 bg-slate-950/50 px-6 py-2 text-xs font-bold text-cyan-200 transition hover:bg-cyan-500/10">
                in Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
    </>
  );
}
