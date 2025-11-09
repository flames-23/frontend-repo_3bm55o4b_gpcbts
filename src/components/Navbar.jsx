import { Calendar, User, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 grid place-items-center text-white">
              <Calendar size={20} />
            </div>
            <span className="font-semibold text-lg">Eventora</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-neutral-600 hover:text-neutral-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">
              <User size={16} /> Sign in
            </button>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95"
            >
              Book a Demo
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg border border-neutral-300" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-neutral-700">
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">
                <User size={16} /> Sign in
              </button>
              <a
                href="#contact"
                className="flex-1 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95"
              >
                Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
