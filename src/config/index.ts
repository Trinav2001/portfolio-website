import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Trinav Rattan — Software Developer | AI Enthusiast",
  author: "Trinav Rattan",
  description:
    "Software Engineer and AI enthusiast with a background in full-stack development and applied machine learning. Incoming MSE CIS student at UPenn.",
  lang: "en",
  siteLogo: "/trinav-profile.jpg", // Make sure this is in the public folder
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/trinavrattan/" },
    { text: "Github", href: "https://github.com/Trinav2001" },
    { text: "Email", href: "mailto:trinav@seas.upenn.edu" },
  ],
  socialImage: "/trinav-profile.jpg",
  canonicalURL: "https://yourdomain.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Trinav Rattan",
    specialty: "Software Developer & AI Enthusiast",
    summary:
      "Incoming MSE CIS student at UPenn. Passionate about full-stack development, applied ML, and impactful tech.",
    email: "trinav@seas.upenn.edu",
  },

  experience: [
    {
      company: "Sentinel Education LLP",
      position: "Software Engineer",
      startDate: "Aug 2023",
      endDate: "Jul 2025",
      summary: [
        "Developed company website using HTML5, TailwindCSS, Bootstrap 5, JavaScript, and PHP; deployed on Hostinger with GTM.",
        "Automated workflows using Google Apps Script—cut manual effort and boosted speed by 80%.",
        "Prototyped LMS platform with self-paced course flows, payments, and dashboards before shifting to 3rd-party LMS.",
        "Optimized SEO and Ads, improving ranking from 93 to 25 and increasing leads by 83%, conversions by 155%.",
        "Integrated Interakt for WhatsApp comms, improving student engagement efficiency.",
      ],
    },
    {
      company: "OpenText",
      position: "Software Engineer Intern",
      startDate: "Feb 2023",
      endDate: "Aug 2023",
      summary: [
        "Contributed to Java-based software changes for team Dolphin under FinOps agenda using SAFe methodology.",
        "Built and deployed Jenkins CI/CD pipelines to improve automation and delivery.",
        "Fixed build failures, debugged issues, and collaborated with India-US teams.",
        "Led post-upgrade tasks and validated OPB endpoints for HCMX 2022.11 & 2023.05.",
      ],
    },
    {
      company: "Goolluck Investments (Motilal Oswal Partner)",
      position: "Equity Market Analyst Intern",
      startDate: "Jan 2021",
      endDate: "Jan 2022",
      summary: [
        "Automated trade confirmation emails with Apps Script to streamline client workflows.",
        "Built Python-based trading strategies using Nifty options and portfolio sizing.",
      ],
    },
    {
      company: "IT-ITeS Sector Skills Council, NASSCOM",
      position: "Artificial Intelligence Intern",
      startDate: "Jun 2021",
      endDate: "Aug 2021",
      summary: [
        "Earned Gold certification with 70%+ in ML exams covering AI and algorithmic concepts.",
        "Built a Triple Negative Breast Cancer detector using XGBoost + PCA (95% acc, 80% feature reduction).",
        "Developed California housing price predictor using Random Forest after EDA + cleaning.",
      ],
    },
  ],

  projects: [
  {
    name: "Chatty – WebRTC Video Chat App",
    summary: [
      "Created full-stack video calling and messaging app using WebRTC, Socket.IO, Express, and MongoDB.",
      "Implemented peer-to-peer connection logic with signaling and real-time UI updates.",
    ],
    linkSource: "https://github.com/Trinav2001/chatty"
  },
  {
    name: "QuoVit – Student Networking Platform",
    summary: [
      "Built social web platform using Node.js, MongoDB, and EJS templates with auth and profile features.",
      "Users can post quotes, network with peers, and create student-based communities.",
    ],
    linkSource: "https://github.com/Trinav2001/QuoVit"
  },
  {
    name: "SplitPay – Bill Splitting & Expense Tracker",
    summary: [
      "Built smart bill-splitting app with REST APIs, Django auth, and SQLite backend.",
      "Designed responsive web UI with clean UX for debt tracking across devices.",
    ],
    linkSource: "https://github.com/Trinav2001/splitpay"
  },
  {
    name: "Unified Multi-Modal Embedding for Audio-Text",
    summary: [
      "Redesigned VATT to create a cross-modal embedding system.",
      "Added DropToken & Representations from intermediate transformer layers.",
      "Improved downstream performance on audio-to-text and cross-modal tasks.",
    ],
    linkSource: "https://github.com/Trinav2001/multimodal-embedding"
  },
  {
    name: "Retina Blood Vessel Segmentation with U-Net",
    summary: [
      "Enhanced U-Net with dilated convolutions and contrast normalization to segment retinal vessels.",
      "Trained on DRIVE dataset, achieving improved accuracy on edge cases vs baseline U-Net.",
    ],
    linkSource: "https://github.com/Trinav2001/retina-unet"
  },
  {
    name: "Super-Resolution GAN (SRGAN)",
    summary: [
      "Built GAN that transforms low-res images to high-res using perceptual and adversarial losses.",
      "Trained on DIV2K dataset; implemented with TensorFlow + VGG loss network.",
    ],
    linkSource: "https://github.com/Trinav2001/srgan"
  }
],


  about: {
    description:
      "Hey! I'm Trinav — a passionate software developer and AI enthusiast from India, joining the MSE CIS program at UPenn. Over the last few years, I’ve built products across web, automation, AI/ML, and full-stack systems. I enjoy building tech that actually works for people, whether it's automating emails or designing ML models. Currently, I’m diving deeper into systems, perception, and machine learning at Penn.",
    image: "/trinav-profile.jpg",
  },
};
