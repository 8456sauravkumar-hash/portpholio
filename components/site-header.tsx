"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: "Home" },
  { href: "/experience", label: "Experience", icon: "Experience" },
  { href: "/work", label: "Work", icon: "Work" },
  { href: "/saurav_kumar.pdf", label: "Resume", icon: "Resume", target: "_blank" },
];

function navClass(isActive: boolean) {
  return [
    "flex-1 rounded-full px-3 py-1.5 text-center text-xs font-semibold transition sm:flex-none",
    isActive
      ? "bg-slate-800 text-white"
      : "text-slate-300 hover:bg-slate-800/80 hover:text-white",
  ].join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mb-5 rounded-2xl border border-white/5 bg-gradient-to-r from-slate-900/80 to-slate-800/80 px-4 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.4)] backdrop-blur-xl sm:px-5">
      <nav className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
        <Link href="/" className="flex items-center gap-2 transition hover:opacity-80">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
            <span className="text-xs font-bold">SK</span>
          </span>
          <span>
            <span className="block text-xs font-bold uppercase tracking-wider text-cyan-300">
              Saurav
            </span>
            <span className="block text-[10px] text-slate-400">Frontend Developer</span>
          </span>
        </Link>

        <div className="flex w-full items-center justify-center gap-1 rounded-full border border-slate-700/50 bg-slate-950/60 px-2 py-1 text-sm shadow-inner sm:w-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.target}
              rel={item.target ? "noreferrer" : undefined}
              aria-current={pathname === item.href ? "page" : undefined}
              aria-label={item.label}
              className={navClass(pathname === item.href)}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
