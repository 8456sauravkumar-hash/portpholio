const contact = [
  { label: "Phone", value: "+91 78760 43241", href: "tel:+917876043241" },
  { label: "Email", value: "sauravkharyal@gmail.com", href: "mailto:sauravkharyal@gmail.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saurav-kumar-88a283241",
    href: "https://www.linkedin.com/in/saurav-kumar-88a283241",
  },
  {
    label: "Portfolio",
    value: "portpholio-iota.vercel.app",
    href: "https://portpholio-iota.vercel.app",
  },
  { label: "Location", value: "Chandigarh, India" },
];

const education = [
  {
    title: "Bachelor of Technology",
    place: "Career point University, Himachal Pradesh",
    detail: "CGPA: 7.8/10",
    year: "August 2020",
  },
  {
    title: "Higher Secondary",
    place: "Govt Sen. sec School Dhundla, Himachal Pradesh",
    detail: "Percentage: 68%",
    year: "March 2016",
  },
  {
    title: "Secondary",
    place: "Govt Sen. sec School Dhundla, Himachal Pradesh",
    detail: "Percentage: 75%",
    year: "March 2014",
  },
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
  "Git",
];

const experience = [
  {
    role: "UI Developer",
    company: "Suffesscom solution",
    period: "24 October 2024 - Present",
    points: [
      "Designing responsive, modern web interfaces with strong focus on clean UI and user experience.",
      "Creating interactive React components using Tailwind CSS and component-based architecture.",
      "Converting Figma designs into polished, responsive pages for production projects.",
    ],
  },
  {
    role: "UI Developer",
    company: "Henceforth Solution",
    period: "14 January 2023 - 30 August 2024",
    points: [
      "Developed React applications with reusable components and maintainable frontend patterns.",
      "Built responsive web interfaces using JavaScript, CSS, Bootstrap, and Tailwind CSS.",
      "Worked closely with design and development teams to deliver accurate UI implementations.",
    ],
  },
];

const projects = [
  { title: "Pharma Swift", href: "https://pharma-swift.suffescom.dev/" },
  { title: "PinkTix", href: "https://www.pinktix.live/" },
  { title: "Fan GetChu", href: "https://fan.getchu.com/" },
  { title: "Candy Fans", href: "https://www.candyfans.co/auth/login" },
  { title: "OriAI", href: "https://ori-blue.vercel.app/" },
  { title: "Clinore System Admin", href: "https://admin.clinore.co/" },
  { title: "TourismLang", href: "https://tourismlang.com/" },
  { title: "Naritya", href: "https://naritya.com/" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 border-b border-neutral-300 pb-2 text-[13px] font-black uppercase tracking-[0.35em] text-neutral-800">
      {children}
    </h2>
  );
}

export default function Resume() {
  return (
    <section className="rounded-2xl border border-white/10 bg-neutral-950/40 p-2 shadow-2xl sm:p-5">
      <article className="mx-auto max-w-5xl overflow-hidden rounded-[1.5rem] bg-neutral-50 text-neutral-800 shadow-[0_35px_90px_rgba(0,0,0,0.35)]">
        <header className="border-b border-neutral-300 px-6 py-8 text-center sm:px-10">
          <h1 className="font-serif text-4xl font-black uppercase tracking-[0.28em] text-neutral-800 sm:text-5xl">
            Saurav Kumar
          </h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">UI Developer</p>
        </header>

        <div className="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="space-y-9">
            <section>
              <SectionTitle>Contact</SectionTitle>
              <div className="space-y-3 text-sm">
                {contact.map((item) =>
                  item.href ? (
                    <a key={item.label} href={item.href} className="block transition hover:text-cyan-700">
                      <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-neutral-500">
                        {item.label}
                      </span>
                      <span className="break-words text-neutral-800">{item.value}</span>
                    </a>
                  ) : (
                    <div key={item.label}>
                      <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-neutral-500">
                        {item.label}
                      </span>
                      <span className="text-neutral-800">{item.value}</span>
                    </div>
                  ),
                )}
              </div>
            </section>

            <section>
              <SectionTitle>Education</SectionTitle>
              <div className="space-y-5">
                {education.map((item) => (
                  <div key={`${item.title}-${item.year}`}>
                    <h3 className="text-sm font-black uppercase text-neutral-900">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-neutral-600">{item.place}</p>
                    <p className="text-xs font-semibold text-neutral-700">{item.detail}</p>
                    <p className="text-xs text-neutral-500">{item.year}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle>Skills</SectionTitle>
              <ul className="space-y-2 text-sm text-neutral-700">
                {skills.map((skill) => (
                  <li key={skill} className="flex gap-2">
                    <span className="font-black text-neutral-900">-&gt;</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          <main className="space-y-9">
            <section>
              <SectionTitle>About Me</SectionTitle>
              <p className="text-sm leading-7 text-neutral-700">
                Creative and detail-oriented UI Developer with 3+ years of experience
                building responsive, visually engaging, and user-focused websites. Skilled in
                React.js, Next.js, Tailwind CSS, Bootstrap, Ant Design, Material UI, SCSS,
                and Figma. I enjoy transforming ideas and designs into smooth, functional,
                and polished digital experiences.
              </p>
            </section>

            <section>
              <SectionTitle>Work Experience</SectionTitle>
              <div className="space-y-7">
                {experience.map((item) => (
                  <article key={`${item.company}-${item.period}`}>
                    <h3 className="text-sm font-black uppercase text-neutral-900">{item.role}</h3>
                    <p className="mt-1 text-xs font-bold text-neutral-700">
                      {item.company} / {item.period}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-700">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle>Projects</SectionTitle>
              <p className="text-sm leading-7 text-neutral-700">
                Worked on responsive web interfaces and production UI for projects including:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {projects.map((project) => (
                  <a
                    key={project.href}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-neutral-300 px-3 py-1 text-xs font-bold text-neutral-800 transition hover:border-neutral-900"
                  >
                    {project.title}
                  </a>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-3 border-t border-neutral-300 pt-5 sm:flex-row">
              <a
                href="/saurav_kumar.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-neutral-700"
              >
                Open PDF
              </a>
              <a
                href="mailto:sauravkharyal@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-neutral-400 px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-neutral-800 transition hover:border-neutral-900"
              >
                Contact Me
              </a>
            </section>
          </main>
        </div>
      </article>
    </section>
  );
}
