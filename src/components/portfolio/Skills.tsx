import { motion } from "framer-motion";
import { Film, Palette, Camera, Sparkles } from "lucide-react";
import { services, skills } from "@/data/portfolio";

const reveal = {
  initial: { opacity: 0, y: 30, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const icons = [Film, Palette, Sparkles, Camera];

const Skills = () => {
  // Duplicate the skills for a seamless marquee
  const marquee = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 md:py-32 bg-surface-alt">
      <div className="container-editorial">
        <motion.div {...reveal} className="flex items-center gap-4 mb-10">
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
            02 — Skills & Services
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.h2
          {...reveal}
          className="font-display font-semibold text-4xl md:text-6xl text-primary max-w-3xl text-balance leading-[1.05]"
        >
          What I bring to <span className="italic text-accent">the edit suite.</span>
        </motion.h2>

        {/* Services bento */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={s.title}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.05 }}
                className="group rounded-4xl bg-surface p-8 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 ease-editorial"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:rotate-[-6deg] transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground text-pretty">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Skills marquee */}
        <motion.div {...reveal} className="mt-16">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold mb-6">
            Software & Tools
          </div>
          <div className="relative overflow-hidden rounded-full bg-surface py-5 shadow-soft">
            <div className="flex gap-3 w-max animate-marquee">
              {marquee.map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full bg-surface-alt px-5 py-2 text-sm font-semibold text-primary whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {s.name}
                  <span className="text-muted-foreground font-normal">· {s.category}</span>
                </span>
              ))}
            </div>
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
