const baseSiteConfig = {
  name: "Inke | Note",
  description:
    "Inke is a notebook with AI assisted writing and real-time collaboration",
  url: "https://inke.app",
  metadataBase: new URL("https://inke.app"),
  keywords: [
    "Editor",
    "Notebook",
    "Markdown",
    "WYSIWYG",
    "Collaboration",
    "Openai",
    "ChatGPT",
    "AI",
    "Next.js",
    "note",
    "writing",
    "translate",
    "AIGC",
  ],
  authors: [
    {
      name: "yesmore",
      url: "https://github.com/yesmore",
    },
  ],
  creator: "@yesmoree",
  themeColor: "#fff",
  // 生成所有平台的ico：https://realfavicongenerator.net/
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  ogImage: "https://inke.app/opengraph-image.png",
  links: {
    twitter: "https://twitter.com/yesmoree",
    github: "https://github.com/yesmore/inke",
  },
  manifest: "/manifest.json",
};

export const siteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/opengraph-image.png`],
    creator: baseSiteConfig.creator,
  },
};
