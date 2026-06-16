import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, FileText, ImageIcon, ExternalLink } from "lucide-react";
import { topVideos, type ProjectItem } from "@/data/portfolio";

const reveal = {
  initial: { opacity: 0, y: 30, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const TopVideos = () => {
  const [active, setActive] = useState<number | null>(null);
  const activeItem = topVideos.find((v) => v.id === active);

  const handleOpen = (item: ProjectItem) => {
    if (item.type === "pdf" && item.pdfUrl) {
      window.open(item.pdfUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setActive(item.id);
  };

  const featured = topVideos.slice(0, 3);
  const rest = topVideos.slice(3);

  return (
    <section id="videos" className="py-20 md:py-32">
      <div className="container-editorial">
        <motion.div {...reveal} className="flex items-center gap-4 mb-10">
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
            03 — Sample Projects
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.div {...reveal} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="font-display font-semibold text-4xl md:text-6xl text-primary max-w-2xl text-balance leading-[1.05]">
            Selected work, <span className="italic text-accent">freshly cut.</span>
          </h2>
          <p className="text-muted-foreground max-w-md text-pretty">
            A mix of films, promotional cuts, posters, and editorial writing from the past year.
            Click any piece to view, watch, or read.
          </p>
        </motion.div>

        {/* Featured grid: first card large, two stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.button
            {...reveal}
            onClick={() => handleOpen(featured[0])}
            className="lg:col-span-7 group text-left rounded-4xl overflow-hidden bg-surface shadow-soft hover:shadow-lift transition-shadow duration-300 ease-editorial"
          >
            <ProjectCard item={featured[0]} large />
          </motion.button>

          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {featured.slice(1).map((v, i) => (
              <motion.button
                key={v.id}
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.1 * (i + 1) }}
                onClick={() => handleOpen(v)}
                className="group text-left rounded-4xl overflow-hidden bg-surface shadow-soft hover:shadow-lift transition-shadow duration-300 ease-editorial"
              >
                <ProjectCard item={v} />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Additional projects grid */}
        {rest.length > 0 && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((v, i) => (
              <motion.button
                key={v.id}
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.08 * i }}
                onClick={() => handleOpen(v)}
                className="group text-left rounded-4xl overflow-hidden bg-surface shadow-soft hover:shadow-lift transition-shadow duration-300 ease-editorial"
              >
                <ProjectCard item={v} />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-primary/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`relative w-full rounded-3xl overflow-hidden bg-primary shadow-editorial ${
                activeItem.type === "video" ? "max-w-5xl aspect-video" : "max-w-3xl max-h-[88vh]"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {activeItem.type === "video" && activeItem.embedUrl && (
                <iframe
                  src={activeItem.embedUrl}
                  title={activeItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
              {activeItem.type === "image" && activeItem.imageUrl && (
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="w-full h-full object-contain bg-primary"
                />
              )}
            </motion.div>
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:scale-95 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const TypeIcon = ({ type }: { type: ProjectItem["type"] }) => {
  if (type === "video") return <Play className="w-7 h-7 md:w-8 md:h-8 text-secondary-foreground fill-current ml-1" />;
  if (type === "pdf") return <FileText className="w-7 h-7 md:w-8 md:h-8 text-secondary-foreground" />;
  return <ImageIcon className="w-7 h-7 md:w-8 md:h-8 text-secondary-foreground" />;
};

const ProjectCard = ({ item, large = false }: { item: ProjectItem; large?: boolean }) => (
  <>
    <div className={`relative overflow-hidden ${large ? "aspect-[16/11]" : "aspect-[16/10]"}`}>
      <img
        src={item.thumbnail}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-editorial shadow-lift">
          <TypeIcon type={item.type} />
        </div>
      </div>
      <div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold text-primary">
        {item.year}
      </div>
      {item.type === "pdf" && (
        <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold text-primary">
          <ExternalLink className="w-3 h-3" /> PDF
        </div>
      )}
    </div>
    <div className="p-6 md:p-8">
      <div className="text-xs uppercase tracking-[0.18em] text-accent font-bold">{item.category}</div>
      <h3
        className={`mt-2 font-display font-semibold text-primary leading-tight ${
          large ? "text-3xl md:text-4xl" : "text-2xl"
        }`}
      >
        {item.title}
      </h3>
      <p className="mt-3 text-muted-foreground text-pretty text-sm md:text-base">{item.desc}</p>
    </div>
  </>
);

export default TopVideos;
