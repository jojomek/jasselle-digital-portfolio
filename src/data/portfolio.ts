/**
 * ============================================================
 *  EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
 * ============================================================
 *  Every piece of text, every link, every email — change it
 *  here and it updates across the entire site. No need to
 *  touch component files unless you want to change layout.
 * ============================================================
 */

export const profile = {
  name: "Jasselle Malbas",
  firstName: "Jasselle",
  role: "Digital Editor",
  tagline: "Crafting visual stories that click.",
  location: "Manila, Philippines",
  university: "University of the East",
  status: "Graduating Class of 2026",
  email: "jssllmalbas@gmail.com",
  resumeUrl: "#",
  driveUrl: "https://drive.google.com/drive/folders/1vIyf6ItH_N0LUMMNq_OEKnNpZwomwkLY?usp=drive_link",
  socials: {
    instagram: "https://www.instagram.com/jassellemalbas/",
    linkedin: "https://www.linkedin.com/in/jasselle-malbas-a99a76376/",
    behance: "https://behance.net/",
    youtube: "https://www.youtube.com/@jassellem",
  },
};

export const about = {
  greeting: "Hello there!",
  bio: [
    "I'm Jasselle — an emerging Digital Editor from the University of the East with a passion for turning raw footage into stories that linger.",
    "From short-form social cuts to full brand films, I love the quiet craft of finding the rhythm in a scene. My work blends warm visual aesthetics, intentional pacing, and a love for storytelling that feels human.",
  ],
  mission:
    "To grow into a creative professional whose edits don't just look beautiful — they make people feel something.",
};

export const education = [
  {
    school: "University of the East",
    degree: "Bachelor's Program in Multimedia Arts / Digital Editing",
    period: "2021 — 2025",
  },
];

export const experience = [
  {
    role: "Freelance Video Editor",
    org: "Independent Projects",
    period: "2023 — Present",
    desc: "Short-form reels, vlogs, and brand cutdowns for student creators and small businesses.",
  },
  {
    role: "Editorial Intern",
    org: "Campus Media Org · UE",
    period: "2024",
    desc: "Edited weekly campus highlight videos and social motion graphics.",
  },
  {
    role: "Academic Capstone",
    org: "University of the East",
    period: "2024 — 2025",
    desc: "Co-directed and edited a documentary short exploring local creative communities.",
  },
];

export const skills = [
  { name: "Adobe Premiere Pro", category: "Video" },
  { name: "Adobe After Effects", category: "Motion" },
  { name: "Davinci Resolve", category: "Color" },
  { name: "Higgsfield", category: "AI" },
  { name: "CapCut", category: "Video" },
];

export const services = [
  {
    title: "Video Editing",
    desc: "Reels, vlogs, brand films, and short-form content with intentional pacing and clean cuts. Can create both nonlinear and visual effects editing.",
  },
  {
    title: "Graphic Design",
    desc: "Editorial layouts, posters, and social graphics with a warm, magazine-inspired touch.",
  },
  {
    title: "Content Creation",
    desc: "End-to-end concepting, shooting, and posting — content that actually feels like the brand.",
  },
  {
    title: "Visual Storytelling",
    desc: "Photography and motion that puts the story first, the format second.",
  },
];

/**
 * TOP 3 EDITED VIDEOS
 * — Replace `embedUrl` with a YouTube/Vimeo *embed* URL (e.g. https://www.youtube.com/embed/XXXX)
 * — Replace the imported thumbnail by editing `src/assets/video-1.jpg` etc.
 * — Or swap to a different image: import yourImg from "@/assets/your-file.jpg"
 */
import video1 from "@/assets/video-1.jpg";
import video2 from "@/assets/video-2.jpg";
import video3 from "@/assets/video-3.jpg";

export const topVideos = [
  {
    id: 1,
    title: "Golden Hour — A Short Film",
    category: "Documentary Short",
    year: "2025",
    desc: "An intimate portrait of three creatives chasing light at the edge of the city. Edited for warmth, mood, and a slow editorial pace.",
    thumbnail: video1,
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // ← replace
  },
  {
    id: 2,
    title: "Coast — Travel Vlog",
    category: "Vlog / Travel",
    year: "2024",
    desc: "A coastal weekend cut to feel like flipping through a polaroid album. Sound-led editing with no narration.",
    thumbnail: video2,
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // ← replace
  },
  {
    id: 3,
    title: "LLEMÓN — Brand Film",
    category: "Brand / Product",
    year: "2024",
    desc: "A 60-second brand film for a student-run skincare label. Color-graded for soft butter tones and editorial product beats.",
    thumbnail: video3,
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // ← replace
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Sample Projects", href: "#videos" },
  { label: "Drive", href: "#drive" },
  { label: "Contact", href: "#contact" },
];
