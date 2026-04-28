import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Sparkle } from "lucide-react";
import { about, education, experience, profile } from "@/data/portfolio";

const reveal = {
  initial: { opacity: 0, y: 30, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container-editorial">
        <motion.div {...reveal} className="flex items-center gap-4 mb-10">
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
            01 — About
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Greeting + bio */}
          <motion.div
            {...reveal}
            className="lg:col-span-7 rounded-4xl bg-surface p-8 md:p-12 shadow-soft hover:shadow-card transition-shadow duration-300"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
              <Sparkle className="w-3.5 h-3.5" />
              {about.greeting}
            </div>
            <h2 className="mt-6 font-display font-semibold text-4xl md:text-5xl text-primary text-balance leading-[1.05]">
              An emerging digital editor with an editorial eye.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-lg text-pretty max-w-2xl">
              {about.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                Creative mission
              </div>
              <p className="mt-3 font-display italic text-xl md:text-2xl text-primary text-balance">
                "{about.mission}"
              </p>
            </div>
          </motion.div>

          {/* Education + meta */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <motion.div
              {...reveal}
              className="rounded-4xl bg-primary text-primary-foreground p-8 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <div className="text-xs uppercase tracking-[0.18em] font-semibold opacity-80">
                  Education
                </div>
              </div>
              {education.map((e) => (
                <div key={e.school} className="mt-5">
                  <div className="font-display text-2xl font-semibold leading-tight">
                    {e.school}
                  </div>
                  <div className="text-sm opacity-80 mt-1">{e.degree}</div>
                  <div className="text-xs uppercase tracking-wider mt-3 opacity-60">{e.period}</div>
                </div>
              ))}
            </motion.div>

            <motion.div {...reveal} className="rounded-4xl bg-surface-alt p-8 shadow-soft">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-display font-semibold text-primary tabular-nums">9+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    Projects
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-display font-semibold text-primary tabular-nums">
                    2026
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    Class of
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-display font-semibold text-primary">UE</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    Alma Mater
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-display font-semibold text-accent italic">∞</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    Curiosity
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience timeline */}
          <motion.div
            {...reveal}
            className="lg:col-span-12 rounded-4xl bg-surface p-8 md:p-12 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-secondary-foreground" />
              </span>
              <h3 className="font-display text-2xl font-semibold text-primary">
                Experience & Projects
              </h3>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experience.map((x, i) => (
                <li
                  key={i}
                  className="rounded-3xl bg-surface-alt p-6 hover:-translate-y-1 hover:shadow-card transition-all duration-300 ease-editorial"
                >
                  <div className="text-xs uppercase tracking-wider text-accent font-bold">
                    {x.period}
                  </div>
                  <div className="mt-3 font-display text-xl font-semibold text-primary">{x.role}</div>
                  <div className="text-sm text-muted-foreground mt-1">{x.org}</div>
                  <p className="mt-4 text-sm text-muted-foreground text-pretty">{x.desc}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
