const projects = [
  {
    title: "Pharma Swift",
    description: "Designed and developed a comprehensive pharmaceutical management platform with intuitive UI/UX. Built responsive components using React with modern design patterns and smooth interactions.",
    url: "https://pharma-swift.suffescom.dev/",
    tags: ["React", "Tailwind CSS", "UI/UX Design", "Responsive Design"],
    category: "Web Design & React",
    features: ["Modern UI Components", "Responsive Interfaces", "User-Centric Design", "Interactive Dashboard"],
    status: "Live",
  },
  {
    title: "PinkTix",
    description: "Crafted the user interface for an event ticketing platform with pixel-perfect designs. Implemented React components for ticket booking flow and seat selection interface.",
    url: "https://www.pinktix.live/",
    tags: ["React", "UI/UX", "Tailwind CSS", "Component Design"],
    category: "Web Design & React",
    features: ["Ticket Interface Design", "Seat Selection UI", "Payment Flow Design", "Event Listings"],
    status: "Live",
  },
  {
    title: "Fan GetChu",
    description: "Designed the creator dashboard and fan engagement interfaces using React. Built beautiful, functional components that enhance user experience and encourage interaction.",
    url: "https://fan.getchu.com/",
    tags: ["React", "Next.js", "Design System", "CSS Animations"],
    category: "Web Design & React",
    features: ["Creator Dashboard", "Fan Interface", "Design System", "Smooth Animations"],
    status: "Live",
  },
  {
    title: "Candy Fans",
    description: "Designed and developed the complete authentication and community interface using React. Created engaging UI components for user profiles, messaging, and content sharing.",
    url: "https://www.candyfans.co/auth/login",
    tags: ["React", "UI Components", "Tailwind CSS", "Authentication UI"],
    category: "Web Design & React",
    features: ["Auth Interface", "User Profiles", "Community Design", "Content UI"],
    status: "Live",
  },
  {
    title: "OriAI",
    description: "Built a clean invitation-only AI coaching platform experience focused on meaningful conversations, onboarding clarity, and practical personal and professional growth.",
    url: "https://ori-blue.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "Responsive UI"],
    category: "AI Platform & Frontend",
    features: ["Landing Experience", "Responsive Navigation", "Auth Entry Points", "Beta Onboarding UI"],
    status: "Live",
  },
  {
    title: "Notary Website",
    description: "Designed a professional notary service website with a polished frontend experience, clear service presentation, and responsive layouts for visitors across devices.",
    url: "https://notary-lemon.vercel.app/",
    tags: ["Next.js", "React", "Responsive UI", "Website Design"],
    category: "Service Website",
    features: ["Service Presentation", "Responsive Layout", "Clean UI", "Modern Landing Pages"],
    status: "Live",
  },
  {
    title: "Clinore System Admin",
    description: "Built an admin dashboard interface for the Clinore system with structured layouts, operational screens, and responsive frontend components for management workflows.",
    url: "https://admin.clinore.co/",
    tags: ["React", "Tailwind CSS", "Admin Dashboard", "Responsive UI"],
    category: "Admin Dashboard",
    features: ["Dashboard UI", "Management Screens", "Responsive Components", "Operational Layouts"],
    status: "Live",
  },
  {
    title: "TourismLang",
    description: "Developed a tourism and legal translation services website focused on professional interpretation, certified translation offerings, and multilingual service discovery.",
    url: "https://tourismlang.com/",
    tags: ["WordPress", "Elementor", "Responsive Design", "SEO"],
    category: "Business Website",
    features: ["Service Landing Pages", "Translation Services", "Responsive UI", "SEO-Friendly Structure"],
    status: "Live",
  },
  {
    title: "Naritya",
    description: "Built a social app marketing website for creators to connect, share, and earn, with sections for app features, downloads, FAQs, and creator-focused content.",
    url: "https://naritya.com/",
    tags: ["WordPress", "Bootstrap", "Responsive Design", "Marketing Website"],
    category: "Social App Website",
    features: ["App Landing Page", "Download CTAs", "Feature Sections", "Responsive Marketing UI"],
    status: "Live",
  },
];

const stats = [
  { label: "Projects", value: "9+" },
  { label: "Users Impacted", value: "10K+" },
  { label: "Avg Rating", value: "4.8/5" },
];

export default function Work() {
  return (
    <>
        {/* Hero */}
        <section className="mb-4 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-800/60 px-4 py-5 shadow-[0_25px_70px_rgba(15,23,42,0.4)] sm:px-6 sm:py-6">
          <p className="text-xs uppercase tracking-wider font-bold text-cyan-300">Portfolio</p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">Web Design &amp; React Projects</h1>
          <p className="mt-2 text-sm text-slate-300 max-w-2xl">
            Here are the projects where I designed and developed beautiful, responsive web interfaces using React. Each project showcases my expertise in modern UI/UX design and React development.
          </p>
        </section>

        {/* Stats */}
        <section className="mb-4 grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-5 text-center shadow-[0_25px_70px_rgba(15,23,42,0.4)] hover:border-cyan-400/30 transition">
              <p className="text-3xl font-black text-cyan-300">{stat.value}</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Projects Grid */}
        <section className="mb-4 grid items-start gap-4 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div key={idx} className="rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-800/60 overflow-hidden shadow-[0_25px_70px_rgba(15,23,42,0.4)] hover:border-cyan-400/30 transition">
              <div className="p-4 sm:p-6">
                <div className="mb-3 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-black text-white">{project.title}</h3>
                      <span className="inline-flex rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-400/20">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-xs text-cyan-300 mt-1">{project.category}</p>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40 xl:w-auto"
                  >
                    🔗 Visit Live
                  </a>
                </div>

                <p className="text-sm text-slate-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-400 mb-2">Key Features</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span key={feature} className="inline-flex rounded-full bg-slate-800/50 px-2.5 py-1 text-[10px] text-slate-300 border border-slate-600/50">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400 mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-flex rounded-lg bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold text-cyan-300 border border-cyan-400/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Case Studies CTA */}
        <section className="mb-4 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 shadow-[0_25px_70px_rgba(15,23,42,0.4)] sm:p-6">
          <div className="text-center">
            <h2 className="text-2xl font-black text-white">Want to explore more?</h2>
            <p className="mt-2 text-sm text-slate-300">Check out my live projects or reach out to discuss your next project.</p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="mailto:sauravkharyal@gmail.com" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40">
                📧 Start a Project
              </a>
              <a href="https://www.linkedin.com/in/saurav-kumar-88a283241" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg border border-cyan-400/30 bg-slate-950/50 px-6 py-2 text-xs font-bold text-cyan-200 transition hover:bg-cyan-500/10">
                in Let&apos;s Connect
              </a>
            </div>
          </div>
        </section>
    </>
  );
}
