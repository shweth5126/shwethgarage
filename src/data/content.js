/**
 * ============================================================
 *  EDIT YOUR WHOLE SITE FROM THIS ONE FILE.
 *  Change the text between the quotes. Keep the commas.
 *  Images / videos live in the /public folder - see README.
 * ============================================================
 */

export const site = {
  name: "Shweth Naik",
  seoTitle: "Shweth Naik - Filmmaker & Video Editor",
  seoDescription:
    "Portfolio of Shweth Naik - cinematography, video editing, reels, color grading and motion graphics.",
  // No logo yet - the site shows the name as text. To add one later, drop the
  // file at /public/logo.svg and set `showLogo: true`.
  showLogo: false,
  logo: "/logo.svg",
  // 3D portrait shown in the hero and footer.
  avatar: "/avatar.jpg",
  // Large 3D portrait shown beside the hero headline (4:5, 720x900).
  character: "/character.jpg",
  // Link-preview image (WhatsApp / Instagram / LinkedIn shares), 1200x630.
  ogImage: "/og.jpg",
};

export const contact = {
  email: "shweth.work@gmail.com",
  phone: "+91 97663 58698",
  whatsapp: "919766358698", // digits only, country code, no + or spaces
  // Pre-filled WhatsApp message. The visitor edits the blanks before sending.
  whatsappMessage:
    "Hi Shweth, I found your portfolio and I'd like to work with you.\n\nWhat I need: (filming / editing / reels / color grading / motion graphics)\nAbout the project: \nTimeline: \nReference links: ",
  // Booking link (Calendly / Cal.com). Leave "" to hide the "Book a Call" card.
  calendlyUrl: "",
  // Web3Forms access key. Get one free at https://web3forms.com (enter your email,
  // key is emailed instantly - no signup). Paste it here and the contact form
  // emails you submissions. While empty, the form falls back to opening the
  // visitor's mail app pre-filled.
  web3formsKey: "83a0b2fd-8ec0-4798-86a5-e5b283d2fea2",
};

export const socials = {
  instagram: "",
  youtube: "",
  linkedin: "",
};

// Pill navigation (top center). "#id" scrolls on the home page; "/path" is a page.
export const nav = [
  { label: "Home", href: "#hero", icon: "home" },
  { label: "Work", href: "/work", icon: "film" },
  { label: "Services", href: "#services", icon: "file" },
  { label: "Contact", href: "#contact", icon: "message" },
  { label: "FAQ", href: "#faq", icon: "info" },
];

export const hero = {
  badge: "Filmmaker & Editor",
  lineTop: "Stories, shot and cut",
  lineMid: "frame by frame",
  lineBottom: "Cinematography - Editing - Reels - Color - Motion",
  ctaText: "Start a project",
  ctaHref: "#contact",
};

// Only facts that can be verified from this site. The headline numbers
// (views, projects) live in `footprint` below.
export const stats = [
  { icon: "film", value: "10", label: "Pieces in the Showreel" },
  { icon: "users", value: "3", label: "Creator Partners Featured" },
];

// Circular avatars that scroll across the screen.
export const marqueeClients = [
  { img: "/clients/the_man_at_city.jpg", label: "11K followers", href: "https://www.instagram.com/the_man_at_city/" },
  { img: "/clients/the_kdvlogger_goa.jpg", label: "10K followers", href: "https://www.instagram.com/the_kdvlogger_goa/" },
  { img: "/clients/shreyasrane.jpg", label: "1,304 followers", href: "https://www.instagram.com/_shreyasrane_/" },
];

export const footprint = {
  heading: "Unveiling the Footprint",
  left: { value: "2.5M+", label: "Views Generated" },
  right: { value: "70+", label: "Projects Delivered" },
  note: "and Counting",
};

export const collaborateCta = {
  heading: "COLLABORATE FOR GROWTH, CONNECT NOW.",
  buttonText: "Message me on WhatsApp",
  href: "#contact",
};

export const featuredWork = {
  heading: "Featured Work",
  subtitle: "A glimpse into some of my most impactful projects",
  viewAllText: "View All Projects",
  viewAllHref: "/work",
  // Shown on the home page. Portrait clips (default) sit in the tilted row,
  // landscape clips get their own 2-column row below. `ai: true` adds an AI badge.
  // The full catalogue by category lives on /work (see `allWork`).
  videos: [
    { src: "/work/edibee.mp4", poster: "/work/edibee.jpg" },
    { src: "/work/edibee-2.mp4", poster: "/work/edibee-2.jpg" },
    { src: "/work/deva-rakhandar.mp4", poster: "/work/deva-rakhandar.jpg" },
    { src: "/work/world-map.mp4", poster: "/work/world-map.jpg" },
    { src: "/work/sevaco-explainer.mp4", poster: "/work/sevaco-explainer.jpg" },
    { src: "/work/dahi-handi.mp4", poster: "/work/dahi-handi.jpg", orientation: "landscape" },
    { src: "/work/edibee-hiring.mp4", poster: "/work/edibee-hiring.jpg", orientation: "landscape" },
    { src: "/work/football.mp4", poster: "/work/football.jpg", orientation: "landscape" },
    { src: "/work/teaser.mp4", poster: "/work/teaser.jpg", orientation: "landscape" },
  ],
};

/**
 * FULL WORK CATALOGUE - shown on /work, grouped by category.
 * orientation: "portrait" (9:16) or "landscape" (16:9) - controls tile shape.
 * Add a category by adding an object; add a clip by adding to its `items`.
 */
export const allWork = {
  heading: "The Work",
  subtitle: "Everything, by category.",
  categories: [
    {
      name: "Reels & Brand",
      items: [
        { title: "Dahi Handi", src: "/work/dahi-handi.mp4", poster: "/work/dahi-handi.jpg", orientation: "landscape" },
        { title: "Edibee - Brand Reel", src: "/work/edibee.mp4", poster: "/work/edibee.jpg", orientation: "portrait" },
        { title: "Edibee - Product Reel", src: "/work/edibee-2.mp4", poster: "/work/edibee-2.jpg", orientation: "portrait" },
        { title: "DevaRakhandar", src: "/work/deva-rakhandar.mp4", poster: "/work/deva-rakhandar.jpg", orientation: "portrait" },
        { title: "Edibee - Hiring Video", src: "/work/edibee-hiring.mp4", poster: "/work/edibee-hiring.jpg", orientation: "landscape" },
        { title: "Sevaco - Founder Explainer", src: "/work/sevaco-explainer.mp4", poster: "/work/sevaco-explainer.jpg", orientation: "portrait" },
      ],
    },
    {
      name: "Cinematography",
      items: [
        { title: "Cinematic Reel 1", src: "/work/cine-1.mp4", poster: "/work/cine-1.jpg", orientation: "portrait" },
        { title: "Cinematic Reel 2", src: "/work/cine-2.mp4", poster: "/work/cine-2.jpg", orientation: "portrait" },
        { title: "Kamat - Rally Coverage", src: "/work/kamat.mp4", poster: "/work/kamat.jpg", orientation: "portrait" },
      ],
    },
    {
      name: "Motion Graphics",
      items: [
        { title: "World Map Animation", src: "/work/world-map.mp4", poster: "/work/world-map.jpg", orientation: "portrait" },
        { title: "UI Animation", src: "/work/watch-ui.mp4", poster: "/work/watch-ui.jpg", orientation: "landscape" },
      ],
    },
    {
      name: "Films & Sports",
      items: [
        { title: "Football Edit", src: "/work/football.mp4", poster: "/work/football.jpg", orientation: "landscape" },
        { title: "Teaser Film", src: "/work/teaser.mp4", poster: "/work/teaser.jpg", orientation: "landscape" },
      ],
    },
    {
      // ai: true puts an "AI" badge on the tile so AI-generated work is labelled.
      name: "AI Videos",
      items: [
        { title: "Sevaco - AI Story Ad", src: "/work/ai-sevaco-story.mp4", poster: "/work/ai-sevaco-story.jpg", orientation: "portrait", ai: true },
      ],
    },
  ],
};

export const process = {
  heading: "How a project runs",
  steps: [
    {
      num: "01",
      icon: "video",
      title: "Send the brief",
      body: "Tell me the goal, references and deadline. For edits, share the raw footage over a drive link.",
      avatar: "/work/edibee.jpg",
    },
    {
      num: "02",
      icon: "sparkles",
      title: "Shoot / build the edit",
      body: "On-set filming, or a first cut with a look built for your brand - pacing, grade and sound.",
      avatar: "/work/cine-1.jpg",
    },
    {
      num: "03",
      icon: "trending-up",
      title: "Review & deliver",
      body: "Two rounds of revisions included. Final files exported for every platform you need.",
      avatar: "/work/football.jpg",
    },
  ],
};

// Replaces the old pricing block. Portfolio, not an agency - so this is a
// skills + tools panel with a "get a quote" call to action.
export const services = {
  heading: "What I do",
  note: "Editing projects start at Rs. 2,000 per edit. Filming quoted per shoot.",
  ctaText: "Request a quote",
  ctaHref: "#contact",
  groups: [
    {
      name: "Filming",
      items: [
        "Cinematography",
        "Corporate & event shoots",
        "Product shoots",
        "Brand content",
        "B-roll",
        "Lighting",
      ],
    },
    {
      name: "Editing",
      items: [
        "Video editing",
        "Reels & shorts",
        "Event films",
        "Color grading",
        "Sound design",
        "Motion graphics",
      ],
    },
  ],
  tools: ["Premiere Pro", "After Effects", "Photoshop"],
};

// Creators and brands I've made content for. No quotes - each links to the
// client's real Instagram. Add a `quote:` field to an item to show a testimonial.
export const clientsShowcase = {
  heading: "Creators I've Worked With",
  subtitle: "Real accounts, real audiences",
  items: [
    {
      photo: "/clients/the_man_at_city.jpg",
      name: "Abhijit Naik",
      handle: "@the_man_at_city",
      detail: "Fitness - Goa - 11K followers",
      href: "https://www.instagram.com/the_man_at_city/",
    },
    {
      photo: "/clients/the_kdvlogger_goa.jpg",
      name: "Mr. KD",
      handle: "@the_kdvlogger_goa",
      detail: "Vlogger - Goa - 10K followers",
      href: "https://www.instagram.com/the_kdvlogger_goa/",
    },
    {
      photo: "/clients/shreyasrane.jpg",
      name: "Shreyas Rane",
      handle: "@_shreyasrane_",
      detail: "Creator - 1,304 followers",
      href: "https://www.instagram.com/_shreyasrane_/",
    },
  ],
};

export const contactSection = {
  heading: "Let's Create Together",
  subtitle:
    "Ready to bring your vision to life? Let's discuss your project and create something extraordinary",
  formTitle: "Project Inquiry",
  projectTypes: [
    "Filming - event / corporate",
    "Filming - brand / product",
    "Editing - reel / short",
    "Editing - event / brand film",
    "Color grading only",
    "Motion graphics",
    "Other",
  ],
  budgetRanges: [
    "Under Rs. 10,000",
    "Rs. 10,000 - 50,000",
    "Rs. 50,000 - 2,00,000",
    "Rs. 2,00,000+",
  ],
  quickChatNote:
    "For quick questions or urgent projects, message me directly on WhatsApp - the message comes pre-filled, just fill the blanks.",
};

export const faqs = [
  {
    q: "What's your typical turnaround time?",
    a: "Reels: 2-4 days. Event films and brand videos: 1-2 weeks. Rush delivery available for a fee.",
  },
  {
    q: "Do you work with clients remotely?",
    a: "Yes. Editing is fully remote - footage comes in over a drive link and delivery is digital. Filming is on location.",
  },
  {
    q: "What does editing cost?",
    a: "Edits start at Rs. 2,000 per project and scale with length and complexity. You get a fixed quote before we start.",
  },
  {
    q: "How many revisions are included?",
    a: "Two rounds of revisions on every project. Extra rounds can be added if needed.",
  },
  {
    q: "Which formats do you deliver?",
    a: "MP4, MOV or ProRes, plus platform-optimised versions for Instagram, YouTube and more.",
  },
];

export const footer = {
  privacyHref: "/privacy-policy",
  termsHref: "/terms",
};
