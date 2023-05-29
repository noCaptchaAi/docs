import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "noCaptchaAi",
  description: "noCaptchaAi, fastest & afforadble captcha solving service",
  head: [
    // add plausible script
    [
      "script",
      {
        async: "",
        defer: "",
        "data-domain": "docs.nocaptchaai.com",
        src: "https://papi.nocaptchaai.com/js/script.js",
      },
    ],
  ],
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
        text: "GET Started",
        items: [
          { text: "About noCaptchaAi", link: "/en/about.md" },
          { text: "QuickStart", link: "/en/GetStarted/quickstart.md" },
          { text: "Solving Types", link: "/en/GetStarted/solvingtypes.md" },
          { text: "DMCA & Terms", link: "/en/terms" },
        ],
      },
      {
        text: "API BASICS",
        items: [
          { text: "Basics", link: "/en/api/basics.md" },
          { text: "IN.php (2Captcha Like)", link: "/en/api/in.php.md" },
          // { text: "Languages", link: "/en/api/lang.md" },
          { text: "Account Balance", link: "/en/account/getBalance.md" },
        ],
      },
     
      {
        text: "🖼️ IMAGE Task",
        items: [
          { text: "Prepare Payload", link: "/en/image/PrepareData.md" },
          { text: "hCaptcha Image ", link: "/en/image/hCaptcha.md" },
          { text: "reCaptcha v2 Image (WIP)", link: "/en/image/reCaptcha.md" },
        ],
      },
      {
        text: "🔑 TOKEN Task",
        items: [
          { text: "hCaptcha", link: "/en/token/hCaptcha.md" },
        ],
      },
      {
        text: "OCR Task",
        items: [
          { text: "OCR Variants", link: "/en/ocr/ocr.md" },
          { text: "ProBot", link: "/en/ocr/probot.md" },
        ],
      },
      {
        text: "🔤 Audio Task",
        items: [
        
          { text: "ReCaptcha v2 Audio", link: "/en/audio/rcaudio.md" }
        ],
      },
      

      {
        text: "📚 SOFTWARE LIBRARY",
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
