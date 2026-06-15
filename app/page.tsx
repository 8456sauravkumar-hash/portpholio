import Image from "next/image";
import { linkedinUrl, whatsappUrl } from "@/components/contact-links";

const services = [
  {
    title: "Website Design",
    description: "Unique, visually appealing designs that reflect your brand.",
    icon: "🎨",
  },
  {
    title: "Responsive Design",
    description: "Mobile-friendly experiences across all devices.",
    icon: "📱",
  },
  {
    title: "React.js",
    description: "Reusable components, state-driven UI, and smooth interactive experiences.",
    icon: "⚛️",
    skills: [{ label: "React.js", value: 88 }],
  },
  {
    title: "Next.js",
    description: "Fast, SEO-friendly pages with modern routing and optimized performance.",
    icon: "N",
    skills: [{ label: "Next.js", value: 82 }],
  },
  {
    title: "Programming",
    description: "HTML, CSS, JavaScript foundations.",
    icon: "💻",
    skills: [
      { label: "Html", value: 95 },
      { label: "CSS", value: 93 },
      { label: "JavaScript", value: 65 },
    ],
  },
  {
    title: "FrameWorks",
    description: "Fast, maintainable, modern experiences.",
    icon: "🧩",
    skills: [
      { label: "Bootstrap 5", value: 95 },
      { label: "Tailwind", value: 90 },
      { label: "Antd", value: 93 },
      { label: "scss", value: 97 },
      { label: "Material UI", value: 95 },
    ],
  },
];

const stats = [
  { label: "Experience", value: "3+ Yrs" },
  { label: "Location", value: "India" },
  { label: "Address", value: "Chandigarh" },
];

export default function Home() {
  return (
    <>
        <section className="grid gap-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-7 shadow-2xl shadow-sky-950/30 sm:rounded-[2rem] sm:px-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0 max-w-2xl">
            <span className="inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300 sm:px-4 sm:text-xs sm:tracking-[0.35em]">UI Developer</span>
            <h1 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Saurav Kumar
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              I’m a passionate UI Developer transforming ideas into visually engaging, responsive, and user-focused websites. Skilled in blending creativity with functionality, I bring designs to life that not only look great but also deliver seamless user experiences.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:sauravkharyal@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/saurav-kumar-88a283241"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-950/90 px-5 py-3 text-sm text-slate-100 transition hover:border-sky-400"
              >
                LinkedIn
              </a>
              <a
                href="tel:+917876043241"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-950/90 px-5 py-3 text-sm text-slate-100 transition hover:border-emerald-400"
              >
                +91 78760 43241
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="min-w-0 rounded-2xl border border-sky-400/10 bg-slate-950/75 p-4 shadow-inner shadow-sky-950/30">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-sky-300">Experience</p>
                <p className="mt-2 text-base font-bold text-white sm:text-lg">3+ Years</p>
              </div>
              <div className="min-w-0 rounded-2xl border border-sky-400/10 bg-slate-950/75 p-4 shadow-inner shadow-sky-950/30">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-sky-300">Location</p>
                <p className="mt-2 text-base font-bold text-white sm:text-lg">India</p>
              </div>
              <div className="min-w-0 rounded-2xl border border-sky-400/10 bg-slate-950/75 p-4 shadow-inner shadow-sky-950/30">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-sky-300">Focus</p>
                <p className="mt-2 text-sm font-bold leading-snug text-white sm:text-base">UI Developer</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sky-500/10 to-transparent blur-3xl" />
            <div className="absolute -right-8 top-8 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-8 left-4 h-32 w-32 rounded-full bg-rose-400/10 blur-3xl" />
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950 shadow-[0_35px_90px_rgba(8,47,73,0.45)] ring-1 ring-white/10">
              <Image
                src="https://portfolio-alpha-ten-61.vercel.app/_next/static/media/profile_img.00c2ce84.jpg"
                alt="Saurav Kumar"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 380px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-10 grid items-start gap-6">
          <div className="min-w-0 self-start rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl sm:rounded-[2rem] sm:p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-300 sm:tracking-[0.35em]">About Me</p>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Hello! I’m Saurav Kumar.</h2>
            <p className="mt-6 text-sm leading-7 text-slate-300">
              I’m a creative and detail-oriented UI Developer with expertise in HTML, CSS, Bootstrap 5.3, Tailwind CSS, Ant Design, Material UI, React.js, and Next.js. I transform ideas into visually stunning, user-friendly digital experiences. Passionate about blending aesthetics with functionality, I thrive on crafting designs that not only look amazing but also feel intuitive to use. Let’s talk about bringing something truly unique to life together!
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="min-w-0 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:text-xs sm:tracking-[0.35em]">{item.label}</p>
                  <p className="mt-3 text-lg font-bold text-white sm:text-xl">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="min-w-0 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl sm:rounded-[1.5rem]">
                <div className="flex flex-col items-start gap-3 sm:flex-row">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-500/10 text-xl font-bold text-sky-200 sm:h-12 sm:w-12">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{service.title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">{service.description}</p>
                  </div>
                </div>

                {service.skills ? (
                  <div
                    className={`mt-3 ${
                      service.skills.length > 3 ? "grid gap-3 sm:grid-cols-2" : "space-y-2.5"
                    }`}
                  >
                    {service.skills.map((skill) => (
                      <div key={skill.label}>
                        <div className="flex items-center justify-between text-xs text-slate-300">
                          <span>{skill.label}</span>
                          <span>{skill.value}%</span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-800">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-rose-400"
                            style={{ width: `${skill.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl sm:rounded-[2rem] sm:p-8">
          <div className="grid gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-sky-300 sm:tracking-[0.35em]">Contact</p>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Ready to build something great?</h2>
            </div>
            <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <a href="mailto:sauravkharyal@gmail.com" className="min-w-0 rounded-3xl border border-slate-800 bg-slate-950/80 px-5 py-4 text-left transition hover:bg-slate-800">
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-2 break-all font-semibold text-white">sauravkharyal@gmail.com</p>
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="min-w-0 rounded-3xl border border-slate-800 bg-slate-950/80 px-5 py-4 text-left transition hover:bg-slate-800">
                <p className="text-sm text-slate-400">LinkedIn</p>
                <p className="mt-2 font-semibold text-white">Saurav kumar</p>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="min-w-0 rounded-3xl border border-slate-800 bg-slate-950/80 px-5 py-4 text-left transition hover:bg-slate-800">
                <p className="text-sm text-slate-400">Phone</p>
                <p className="mt-2 font-semibold text-white">+91 78760 43241</p>
              </a>
            </div>
          </div>
        </section>
    </>
  );
}
