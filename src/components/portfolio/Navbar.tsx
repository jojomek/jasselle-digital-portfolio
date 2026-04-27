import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "w-full max-w-[920px] flex items-center justify-between gap-4 rounded-full pl-5 pr-2 py-2 transition-all duration-500 ease-editorial",
          scrolled
            ? "bg-background/80 backdrop-blur-md shadow-card border border-border"
            : "bg-background/40 backdrop-blur-sm border border-transparent",
        )}
      >
        <a href="#top" className="font-display text-lg font-semibold text-primary tracking-tight">
          Jasselle<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary-hover transition-colors"
        >
          Let's talk
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="absolute top-full mt-3 w-[calc(100%-2rem)] max-w-[920px] md:hidden rounded-3xl bg-background border border-border shadow-lift p-4 animate-fade-up">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-2xl"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-full justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold"
              >
                Let's talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
