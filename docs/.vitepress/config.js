import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "noCaptchaAi",
  description: "noCaptchaAi, fastest & afforadble captcha solving service",
  themeConfig: {
    siteTitle: "noCaptchaAi",
    logo: "/og.webp",
    alt: "noCaptchaAi",
    nav: [
      { text: "Guide", link: "/en/GetStarted/quickstart.html" },
      {
        text: "Github",
        link: "https://github.com/noCaptchaAi",
      },
      {
        text: "Discord",
        link: "https://nocaptchaai.com/discord",
      },
      {
        text: "Plans",
        link: "https://nocaptchaai.com/plans",
      },
      {
        text: "Dashboard",
        link: "https://dash.nocaptchaai.com/",
      },
    ],
    sidebar: [
      {
        text: "Get Started",
        items: [
          { text: "About noCaptchaAi", link: "/en/about.md" },
          { text: "QuickStart", link: "/en/GetStarted/quickstart.md" },
          { text: "Solving Types", link: "/en/GetStarted/solvingtypes.md" },
          { text: "DMCA & Terms", link: "/en/terms" },
        ],
      },
      {
        text: "API SDK",
        items: [
          { text: "Basics", link: "/en/api/basics.md" },
          { text: "in.php", link: "/en/api/in.php.md" },
          { text: "getBalance", link: "/en/api/getBalance.md" },
          { text: "Languages", link: "/en/api/lang.md" },
        ],
      },
      {
        text: "Image TASK",
        items: [
          { text: "Prepare Data", link: "/en/imageTasks/PrepareData.md" },
          { text: "postSolveTask", link: "/en/imageTasks/postSolveTask.md" },
          { text: "getSolveStatus", link: "/en/imageTasks/getSolveStatus.md" },
        ],
      },

      {
        text: "Our Software",
        items: [
          { text: "Software List", link: "en/api/basics.html#software-sdk" },
          { text: "Chrome Extension", link: "https://nocaptchaai.com/chrome" },
          {
            text: "Tampermonkey",
            link: "https://github.com/noCaptchaAi/hCaptchaSolver.user.js",
          },
        ],
      },
    ],
    algolia: {
      appId: "...",
      apiKey: "...",
      indexName: "...",
    },
    footer: {
      message: "I'm a Robot.",
      copyright: "Copyright © 2022-2023 noCaptchaAi.com",
    },
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    ru: {
      label: "Русский",
      lang: "ru",
    },
    ar: {
      label: "العربية",
      lang: "ar",
    },
    pt: {
      label: "Português",
      lang: "pt",
    },
  },
});
