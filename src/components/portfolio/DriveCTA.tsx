import { motion } from "framer-motion";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import { profile } from "@/data/portfolio";

const DriveCTA = () => {
  return (
    <section id="drive" className="py-20 md:py-32">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-5xl bg-primary text-primary-foreground px-6 py-14 md:px-16 md:py-20"
        >
          {/* Decorative big type backdrop */}
          <div className="pointer-events-none absolute -bottom-10 -right-4 md:-right-10 select-none opacity-[0.08] font-display text-[180px] md:text-[280px] leading-none font-semibold">
            DRIVE
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                <FolderOpen className="w-3.5 h-3.5" />
                Full archive
              </div>
              <h2 className="mt-6 font-display font-semibold text-4xl md:text-6xl leading-[1.05] text-balance">
                Interested to see more? <br />
                <span className="italic text-secondary">Check my drive.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base md:text-lg opacity-80 text-pretty">
                A curated folder of edited reels, raw process files, posters, and behind-the-scenes
                cuts — refreshed regularly.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={profile.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-secondary text-secondary-foreground pl-7 pr-3 py-3 text-base font-semibold hover:scale-95 transition-transform duration-300 ease-editorial shadow-editorial"
              >
                Open Google Drive
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground group-hover:rotate-45 transition-transform duration-300 ease-editorial">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DriveCTA;
