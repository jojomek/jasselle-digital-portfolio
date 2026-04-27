import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12 border-b border-primary-foreground/10">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] opacity-60 font-semibold">
              {profile.role}
            </div>
            <div className="mt-3 font-display italic text-2xl md:text-3xl text-secondary">
              "{profile.tagline}"
            </div>
          </div>
          <a
            href="#top"
            className="group self-start md:self-auto inline-flex items-center gap-3 rounded-full bg-secondary text-primary pl-6 pr-2 py-2 text-sm font-semibold hover:scale-95 transition-transform"
          >
            Back to top
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground">
              <ArrowUp className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Massive brand mark */}
        <h2
          className="font-display font-semibold leading-[0.85] mt-12 text-center text-[19vw] md:text-[16vw] tracking-tight"
          aria-hidden="true"
        >
          JASSELLE<span className="text-secondary">.</span>
        </h2>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs uppercase tracking-wider opacity-60">
          <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
          <div>{profile.university} · {profile.location}</div>
          <div>Made with warmth & Fraunces</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
