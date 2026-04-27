import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { topVideos } from "@/data/portfolio";

const reveal = {
  initial: { opacity: 0, y: 30, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const TopVideos = () => {
  const [active, setActive] = useState<number | null>(null);
  const activeVideo = topVideos.find((v) => v.id === active);

  return (
    <section id="videos" className="py-20 md:py-32">
      <div className="container-editorial">
        <motion.div {...reveal} className="flex items-center gap-4 mb-10">
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
            03 — Top 3 Edited Videos
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.div {...reveal} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="font-display font-semibold text-4xl md:text-6xl text-primary max-w-2xl text-balance leading-[1.05]">
            Selected work, <span className="italic text-accent">freshly cut.</span>
          </h2>
          <p className="text-muted-foreground max-w-md text-pretty">
            Three pieces I'm most proud of from the past year — a short film, a vlog, and a brand
            edit. Click any thumbnail to play.
          </p>
        </motion.div>

        {/* Featured grid: first card large, two stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Big feature */}
          <motion.button
            {...reveal}
            onClick={() => setActive(topVideos[0].id)}
            className="lg:col-span-7 group text-left rounded-4xl overflow-hidden bg-surface shadow-soft hover:shadow-lift transition-shadow duration-300 ease-editorial"
          >
            <VideoCard video={topVideos[0]} large />
          </motion.button>

          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {topVideos.slice(1).map((v, i) => (
              <motion.button
                key={v.id}
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.1 * (i + 1) }}
                onClick={() => setActive(v.id)}
                className="group text-left rounded-4xl overflow-hidden bg-surface shadow-soft hover:shadow-lift transition-shadow duration-300 ease-editorial"
              >
                <VideoCard video={v} />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeVideo && (
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
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-primary shadow-editorial"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
            <button
              aria-label="Close video"
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center hover:scale-95 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const VideoCard = ({
  video,
  large = false,
}: {
  video: (typeof topVideos)[number];
  large?: boolean;
}) => (
  <>
    <div className={`relative overflow-hidden ${large ? "aspect-[16/11]" : "aspect-[16/10]"}`}>
      <img
        src={video.thumbnail}
        alt={video.title}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      {/* Dim overlay on hover */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-editorial shadow-lift">
          <Play className="w-7 h-7 md:w-8 md:h-8 text-primary fill-primary ml-1" />
        </div>
      </div>
      {/* Year tag */}
      <div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold text-primary">
        {video.year}
      </div>
    </div>
    <div className="p-6 md:p-8">
      <div className="text-xs uppercase tracking-[0.18em] text-accent font-bold">{video.category}</div>
      <h3
        className={`mt-2 font-display font-semibold text-primary leading-tight ${
          large ? "text-3xl md:text-4xl" : "text-2xl"
        }`}
      >
        {video.title}
      </h3>
      <p className="mt-3 text-muted-foreground text-pretty text-sm md:text-base">{video.desc}</p>
    </div>
  </>
);

export default TopVideos;
