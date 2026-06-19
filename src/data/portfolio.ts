/**
 * ============================================================
 *  EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
 * ============================================================
 */

export const profile = {
  name: "Jasselle Malbas",
  firstName: "Jasselle",
  role: "Digital Professional",
  tagline: "Crafting visual stories that click.",
  location: "Manila, Philippines",
  university: "University of the East",
  status: "Batch 2026",
  email: "jssllmalbas@gmail.com",
  viber: "+63 969 085 6586",
  resumeUrl: "#",
  driveUrl: "https://drive.google.com/drive/folders/1vIyf6ItH_N0LUMMNq_OEKnNpZwomwkLY?usp=drive_link",
  socials: {
    instagram: "https://www.instagram.com/jassellemalbas/",
    linkedin: "https://www.linkedin.com/in/jasselle-malbas-a99a76376/",
    behance: "https://behance.net/",
    youtube: "https://www.youtube.com/@jassellem",
    viber: "viber://chat?number=%2B639690856586",
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
    degree: "Bachelor of Arts in Broadcasting — Summa Cum Laude",
    period: "2022 — 2026",
  },
];

export const experience = [
  {
    role: "Quality Assurance Manager · Stage Manager · Creative Director",
    org: "UE Drama Company",
    period: "2022 — 2024",
    desc: "Held multiple leadership roles across productions — overseeing quality assurance, stage management, and creative direction.",
  },
  {
    role: "Secretary · P.R.O. External · Video Editor (Ulat Mandirigma)",
    org: "Media Equipping — Association of Broadcasting Students",
    period: "2022 — 2026",
    desc: "Long-running involvement spanning officer roles and editing duties for Ulat Mandirigma broadcasts.",
  },
  {
    role: "Creatives · Video Editor",
    org: "Bukang-Liwayway Theater Musical Play",
    period: "2024",
    desc: "Part of the creatives team and lead video editor for the musical's promotional and supporting materials.",
  },
  {
    role: "Seminar Participant",
    org: "CMFR Jaime V. Ongpin Journalism Seminar with Ms. Kara David",
    period: "2024",
    desc: "Selected participant in a journalism seminar with veteran broadcaster Kara David.",
  },
  {
    role: "Silver Awardee · Best Director · Best Editing · Best Sound Design · Best Actress · Best Cinematography Nominee",
    org: "Gawad Silangan",
    period: "2025",
    desc: "Recognized across multiple craft categories including direction, editing, sound design, and acting.",
  },
  {
    role: "Digital Editor Intern · TJ Monterde 'Sarili Nating Mundo' Main Cam Op",
    org: "Cornerstone Entertainment, Inc.",
    period: "2025",
    desc: "Interned as a digital editor and operated main camera for TJ Monterde's 'Sarili Nating Mundo'.",
  },
  {
    role: "Member and Coverage",
    org: "Jessica Soho Storytellers' Academy",
    period: "2025",
    desc: "Accepted member of the Storytellers' Academy with on-ground coverage assignments.",
  },
  {
    role: "Coverage",
    org: "UAAP S88 Press Conference",
    period: "2025",
    desc: "Covered the UAAP Season 88 press conference.",
  },
  {
    role: "Director",
    org: "Batch '26 Final Live Prod Theater Musical Play",
    period: "2026",
    desc: "Directing the batch's final live theater musical production.",
  },
];

import logoPremiere from "@/assets/logos/premiere.png";
import logoAe from "@/assets/logos/ae.png";
import logoDavinci from "@/assets/logos/davinci.png";
import logoHiggsfield from "@/assets/logos/higgsfield.jpeg";
import logoCapcut from "@/assets/logos/capcut.jpg";

export const skills = [
  { name: "Adobe Premiere Pro", category: "Video", icon: logoPremiere },
  { name: "Adobe After Effects", category: "Motion", icon: logoAe },
  { name: "Davinci Resolve", category: "Color", icon: logoDavinci },
  { name: "Higgsfield", category: "AI", icon: logoHiggsfield },
  { name: "CapCut", category: "Video", icon: logoCapcut },
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

import video3 from "@/assets/video-3.jpg";
import closureNaBa from "@/assets/closure-na-ba.png";
import eastBound1 from "@/assets/east-bound-1.jpg";
import eastBound2 from "@/assets/east-bound-2.jpg";
import openAirPoster from "@/assets/open-air-poster.png";
import absCover from "@/assets/abs-cover.png";
import genderViolencePreview from "@/assets/gender-violence-preview.jpg";

export type ProjectItem = {
  id: number;
  title: string;
  category: string;
  year: string;
  desc: string;
  thumbnail: string;
  type: "video" | "image" | "pdf";
  embedUrl?: string;
  imageUrl?: string;
  pdfUrl?: string;
};

export const topVideos: ProjectItem[] = [
  {
    id: 1,
    title: "\"Open Air\"",
    category: "Short Film",
    year: "2025",
    desc: "A short film piece I'm most proud of from the past year.",
    thumbnail: "https://img.youtube.com/vi/lFHL8Y-02Co/maxresdefault.jpg",
    type: "video",
    embedUrl: "https://www.youtube.com/embed/lFHL8Y-02Co",
  },
  {
    id: 2,
    title: "ABS Promotional Video",
    category: "Promotional",
    year: "2025",
    desc: "A promotional video edit highlighting organization storytelling and pacing.",
    thumbnail: "https://img.youtube.com/vi/IbtADsth3p0/maxresdefault.jpg",
    type: "video",
    embedUrl: "https://www.youtube.com/embed/IbtADsth3p0",
  },
  {
    id: 3,
    title: "CFYV Sinag Documentary",
    category: "Documentary",
    year: "2025",
    desc: "A documentary cut centered on real stories with intentional rhythm.",
    thumbnail: video3,
    type: "video",
    embedUrl: "https://www.youtube.com/embed/GnJ5rbvl1LU",
  },
  {
    id: 8,
    title: "Open Air — Official Poster",
    category: "Film Poster",
    year: "",
    desc: "Official theatrical poster artwork for the short film \"Open Air\".",
    thumbnail: openAirPoster,
    type: "image",
    imageUrl: openAirPoster,
  },
  {
    id: 9,
    title: "ABS Cover — Final",
    category: "Cover Art",
    year: "",
    desc: "Final cover design for the ABS promotional campaign.",
    thumbnail: absCover,
    type: "image",
    imageUrl: absCover,
  },
  {
    id: 4,
    title: "CloSURE Na Ba?",
    category: "Graphic Design",
    year: "",
    desc: "Call-for-participants poster for a research study on ghosting in romantic relationships.",
    thumbnail: closureNaBa,
    type: "image",
    imageUrl: closureNaBa,
  },
  {
    id: 5,
    title: "East Bound 2025 — Vol. 1",
    category: "Event Poster",
    year: "",
    desc: "Promotional poster for Every Nation Campus' East Bound 2025 event at UE U-Belt.",
    thumbnail: eastBound1,
    type: "image",
    imageUrl: eastBound1,
  },
  {
    id: 6,
    title: "East Bound 2025 — Vol. 2",
    category: "Event Poster",
    year: "",
    desc: "Second poster in the East Bound 2025 campaign — bold typography, editorial grit.",
    thumbnail: eastBound2,
    type: "image",
    imageUrl: eastBound2,
  },
  {
    id: 7,
    title: "Gender Violence Feature",
    category: "Written Article",
    year: "",
    desc: "A long-form written piece exploring gender violence — research, reporting, and editorial voice.",
    thumbnail: genderViolencePreview,
    type: "image",
    imageUrl: genderViolencePreview,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Sample Projects", href: "#videos" },
  { label: "Drive", href: "#drive" },
  { label: "Contact", href: "#contact" },
];
