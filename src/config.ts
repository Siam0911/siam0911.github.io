import type {
  ExpressiveCodeConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "king",
  subtitle: "Website",
  lang: "en", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 45, // Default hue for the theme color (0–360). e.g. red: 0, teal: 200
    fixed: true, // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: "assets/images/demo-banner.png", // Relative to /src or /public
    position: "center", // 'top', 'center', 'bottom'
    credit: {
      enable: false,
      text: "",
      url: "",
    },
  },
  toc: {
    enable: true, // Show table of contents on the right
    depth: 2, // Heading depth (1–3)
  },
  favicon: [
    {
      src: "/favicon/icon.png", // Path relative to /public
      // theme: 'light',
      // sizes: '32x32',
    },
  ],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: "Portfolio",
      url: "https://hanzalaghayasabbasi.com",
      external: true, // Show external link icon and open in new tab
    },
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: "assets/images/demo-avatar.png", // Path relative to /src
  name: "Hanzala Ghayas",
  bio: "Cybersecurity enthusiast & blog writer.",
  links: [
    {
      name: "Email",
      icon: "fa6-solid:envelope",
      url: "mailto:hanzala@example.com",
    },
    {
      name: "LinkedIn",
      icon: "fa6-brands:linkedin",
      url: "https://www.linkedin.com/in/hanzalaghayas",
    },
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/hanzalaghayas",
    },
    {
      name: "Medium",
      icon: "fa6-brands:medium",
      url: "https://medium.com/@hanzalaghayas",
    },
    {
      name: "Twitter",
      icon: "fa6-brands:twitter",
      url: "https://twitter.com/hanzalaghayas",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
  // Select a dark theme — only dark background supported currently
  theme: "github-dark",
};
