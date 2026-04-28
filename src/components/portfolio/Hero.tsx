import { motion } from "framer-motion";
import { ArrowDown, Play, Scissors, Sparkles, Camera } from "lucide-react";
import portrait from "@/assets/jasselle-portrait.jpg";
import { profile } from "@/data/portfolio";

const FloatingIcon = ({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6 + delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-grain">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: Typography */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
              Creative · Visual · Editorial
            </motion.div>

            <h1 className="mt-6 font-display font-semibold text-primary leading-[1.02] text-balance">
              <motion.span
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block text-2xl sm:text-3xl lg:text-4xl"
              >
                Hi! I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block italic whitespace-nowrap text-[2rem] sm:text-5xl lg:text-7xl"
              >
                Jasselle Malbas<span className="text-accent not-italic">.</span>
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold">
                {profile.role}
              </span>
              <span className="text-sm text-muted-foreground">
                {profile.university} · {profile.status}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty"
            >
              {profile.tagline} An emerging digital editor turning everyday footage into stories
              with warmth, rhythm, and intention.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#videos"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary-hover transition-all hover:scale-[0.98]"
              >
                <Play className="w-4 h-4 fill-current" />
                Watch the reel
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full bg-secondary text-primary px-6 py-3 text-sm font-semibold hover:bg-secondary/80 transition-all"
              >
                About me
              </a>
            </motion.div>

            {/* Floating icons */}
            <FloatingIcon className="absolute -top-4 right-2 lg:right-20 hidden sm:block" delay={0}>
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shadow-card rotate-[-8deg]">
                <Play className="w-6 h-6 text-primary fill-primary" />
              </div>
            </FloatingIcon>
            <FloatingIcon className="absolute top-32 -left-2 hidden md:block" delay={1.2}>
              <div className="w-12 h-12 rounded-2xl bg-accent/90 flex items-center justify-center shadow-card rotate-[10deg]">
                <Scissors className="w-5 h-5 text-primary-foreground" />
              </div>
            </FloatingIcon>
            <FloatingIcon className="absolute bottom-4 left-1/3 hidden lg:block" delay={0.6}>
              <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center shadow-card rotate-[-4deg]">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
            </FloatingIcon>
          </div>

          {/* Right: Portrait inside arched pill */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-[420px] lg:max-w-none"
            >
              {/* Butter offset background */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[180px] bg-secondary -z-0" />
              <div className="relative rounded-[180px] overflow-hidden bg-surface-alt shadow-lift">
                <img
                  src={portrait}
                  alt="Portrait of Jasselle Malbas, digital editor"
                  width={896}
                  height={1184}
                  className="w-full h-[480px] sm:h-[560px] lg:h-[620px] object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -left-2 lg:-left-8 bottom-10 bg-surface rounded-2xl shadow-lift p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Camera className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Available</div>
                    <div className="text-sm font-semibold text-primary">For projects</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 mx-auto flex w-max items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-colors"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.span>
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
