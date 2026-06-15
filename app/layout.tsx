import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saurav Kumar | UI Developer",
  description: "Saurav Kumar portfolio - UI Developer with 3+ years creating engaging, responsive websites.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-950 text-slate-100">
        <main className="portfolio-shell min-h-screen overflow-hidden">
          <div className="animated-backdrop" aria-hidden="true" />
          <div className="page-reveal relative z-10 mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
            <SiteHeader />
            {children}
            <footer className="mt-10 border-t border-white/5 pt-3 text-center text-xs text-slate-500">
              <p>© 2026 Saurav Kumar | UI Developer</p>
            </footer>
          </div>
          <WhatsAppButton />
        </main>
      </body>
    </html>
  );
}
