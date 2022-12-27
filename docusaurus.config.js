// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "noCaptchaAi Developer Docs",
  tagline: "noCaptchaAi Developer Api Docuents",
  url: "https://noCaptchaAi.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "noCaptchaAi.cpm", // Usually your GitHub org/user name.
  projectName: "noCaptchaAi Docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/noCaptchaAi/docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/noCaptchaAi/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "noCaptchaAi Docs",
        logo: {
          alt: "nocaptchaai.com Logo",
          src: "img/nocaptchaai.com.png",
        },
        items: [
          {
            href: "https://nocaptchaai.com",
            label: "Home",
            position: "right",
          },
          {
            href: "https://dash.nocaptchaai.com",
            label: "Dashboard",
            position: "right",
          },
          {
            href: "https://github.com/shimuldn/hCaptchaSolverApi",
            label: "Github",
            position: "right",
          },
          {
            href: "https://discord.gg/E7FfzhZqzA",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://t.me/noCaptchaAi",
            label: "Telegram",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "noCaptchaAi",
            items: [
              {
                label: "Ai based captcha image detection",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/E7FfzhZqzA",
              },
              {
                label: "Telegram",
                href: "https://t.me/noCaptchaAi",
              },
              {
                label: "GitHub",
                href: "https://github.com/shimuldn/hCaptchaSolverApi",
              },
            ],
          },
        ],
        copyright: `Copyright @2022-${new Date().getFullYear()} noCaptchaAi.com`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
