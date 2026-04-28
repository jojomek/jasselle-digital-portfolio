import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight, Instagram, Linkedin, Youtube, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

const reveal = {
  initial: { opacity: 0, y: 30, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-surface-alt">
      <div className="container-editorial">
        <motion.div {...reveal} className="flex items-center gap-4 mb-10">
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
            04 — Let's work together
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div
            {...reveal}
            className="lg:col-span-7 rounded-4xl bg-surface p-8 md:p-12 shadow-soft"
          >
            <h2 className="font-display font-semibold text-4xl md:text-6xl text-primary leading-[1.05] text-balance">
              Have a story to tell? <br />
              <span className="italic text-accent">Let's edit it together.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl text-pretty">
              I'm currently open to internships, freelance edits, brand collaborations, and
              entry-level creative roles. Drop a note — I reply within 1–2 days.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground pl-7 pr-3 py-3 text-base font-semibold hover:bg-primary-hover transition-colors"
            >
              {profile.email}
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground group-hover:rotate-45 transition-transform duration-300 ease-editorial">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </motion.div>

          <motion.div {...reveal} className="lg:col-span-5 grid grid-cols-1 gap-6">
            <div className="rounded-4xl bg-secondary text-secondary-foreground p-8 shadow-soft">
              <Mail className="w-6 h-6 text-secondary-foreground" />
              <div className="mt-6 text-xs uppercase tracking-wider text-secondary-foreground/70 font-semibold">
                Email
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 block font-display text-xl md:text-2xl text-secondary-foreground hover:opacity-80 transition-opacity break-all"
              >
                {profile.email}
              </a>
            </div>

            <div className="rounded-4xl bg-surface p-8 shadow-soft">
              <MapPin className="w-6 h-6 text-accent" />
              <div className="mt-6 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Based in
              </div>
              <div className="mt-1 font-display text-xl md:text-2xl text-primary">
                {profile.location}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <SocialLink href={profile.socials.instagram} label="Instagram">
                  <Instagram className="w-4 h-4" />
                </SocialLink>
                <SocialLink href={profile.socials.linkedin} label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </SocialLink>
                <SocialLink href={profile.socials.youtube} label="YouTube">
                  <Youtube className="w-4 h-4" />
                </SocialLink>
                <SocialLink href={profile.socials.viber} label={`Viber ${profile.viber}`}>
                  <Phone className="w-4 h-4" />
                </SocialLink>
              </div>
              <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Viber
              </div>
              <a
                href={profile.socials.viber}
                className="mt-1 block font-display text-base md:text-lg text-primary hover:opacity-80 transition-opacity"
              >
                {profile.viber}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-alt text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
  >
    {children}
  </a>
);

export default Contact;
