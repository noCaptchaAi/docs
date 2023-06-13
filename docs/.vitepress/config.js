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
    socialLinks: [
      { icon: 'discord', link: 'https://nocaptchaai.com/discord' },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,255.98959,255.98959" width="24px" height="24px" fill-rule="nonzero"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M24,4c-11.04569,0 -20,8.95431 -20,20c0,11.04569 8.95431,20 20,20c11.04569,0 20,-8.95431 20,-20c0,-11.04569 -8.95431,-20 -20,-20z" fill="#565656"></path><path d="M33.95,15l-3.746,19.126c0,0 -0.161,0.874 -1.245,0.874c-0.576,0 -0.873,-0.274 -0.873,-0.274l-8.114,-6.733l-3.97,-2.001l-5.095,-1.355c0,0 -0.907,-0.262 -0.907,-1.012c0,-0.625 0.933,-0.923 0.933,-0.923l21.316,-8.468c-0.001,-0.001 0.651,-0.235 1.126,-0.234c0.292,0 0.625,0.125 0.625,0.5c0,0.25 -0.05,0.5 -0.05,0.5z" fill="#ffffff"></path><path d="M23,30.505l-3.426,3.374c0,0 -0.149,0.115 -0.348,0.12c-0.069,0.002 -0.143,-0.009 -0.219,-0.043l0.964,-5.965z" fill="#b0bec5"></path><path d="M29.897,18.196c-0.169,-0.22 -0.481,-0.26 -0.701,-0.093l-13.196,7.897c0,0 2.106,5.892 2.427,6.912c0.322,1.021 0.58,1.045 0.58,1.045l0.964,-5.965l9.832,-9.096c0.22,-0.167 0.261,-0.48 0.094,-0.7z" fill="#cfd8dc"></path></g></g></svg>'      }, link: 'https://nocaptchaai.com/telegram' },
      { icon: 'youtube', link: 'https://www.youtube.com/@nocaptchaai' },
      { icon: 'twitter', link: 'https://twitter.com/nocaptchaai' },
      { icon: 'github', link: 'https://github.com/noCaptchaAi' }
    ],
    nav: [
      { text: "Guide", link: "/en/GetStarted/quickstart.html" },
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
          { text: "2Captcha API Compatible", link: "/en/api/in.php.md" },
          { text: "3rd Party Integration", link: "/en/api/integration.md" },
          // { text: "Languages", link: "/en/api/lang.md" },
          { text: "Account Balance", link: "/en/account/getBalance.md" },
        ],
      },

      {
        text: "🖼️ IMAGE Task",
        items: [
          { text: "Prepare Data", link: "/en/image/PrepareData.md" },
          { text: "hCaptchaImageTask ", link: "/en/image/hCaptcha.md" },
          { text: "reCaptchaImageTask", link: "/en/image/reCaptcha.md" },
          { text: "ImageToText", link: "/en/image/ImageToText.md" },
          { text: "ProBot ImageToText", link: "/en/image/probot.md" },
        ],
      },
      {
        text: "🔑 TOKEN Task",
        items: [
          { text: "hCaptcha", link: "/en/token/hCaptcha.md" },
        ],
      },
      // {
      //   text: "OCR Task",
      //   items: [
      //     { text: "OCR Variants", link: "/en/ocr/ocr.md" },
      //     { text: "ProBot", link: "/en/ocr/probot.md" },
      //   ],
      // },
      {
        text: "Audio Task",
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
