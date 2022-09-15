// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tired of being told you are not human?',
  tagline: 'noCaptchaAi gives you superVision and turns you into a human again, online!',
  url: 'https://noCaptchaAi.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'noCaptchaAi', // Usually your GitHub org/user name.
  projectName: 'noCaptchaAi Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale:'en',
    locales: ['en', 'de', 'cn', 'tw', 'es','jp', 'br', 'fr'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      cn: {
        htmlLang: 'zh-CN',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/noCaptchaAi/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/noCaptchaAi/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'noCaptchaAi',
        logo: {
          alt: 'nocaptchaai.com Logo',
          src: 'img/nocaptchaai.com.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Intro',
            position: 'left',
            label: '📄 Docs',
          },
          { 
            type: 'doc',
            docId: 'Quickstart',
            position: 'left',
            label: '⚡ Quickstart',
          },
          {to: '/blog', label: 'updates', position: 'right'},
          {
            href: 'https://nocaptchaai.com',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://github.com/shimuldn/hCaptchaSolverApi',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'noCaptchaAi',
            items: [
              {
                label: 'Ai based captcha image detection',
                to: '/docs/Quickstart',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/E7FfzhZqzA',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/hCaptchaSolverApi',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/shimuldn/hCaptchaSolverApi',
              }
            ],
          },
          {
            title: 'Legal & Blog',
            items: [
              {
                label: 'updates',
                to: '/blog',
              },
              {
                label: 'privacy',
                to: '/docs/legal/privacy',
              },
              {
                label: 'terms',
                to: '/docs/legal/terms',
              }
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} noCaptchaAi.com

        Does collect and store IP/country and the information you submit via form, only to serve our customers. We do not or ever will sell your information, Our promise. We do not collect personal identifiable/sensitive data.        Disclaimer:       
        We're not responsible if someone used our service to facilitate any kind of harmful or offensive task, we have no way to know because we don't do tracking and nor wish to. Furthermore, we simply provide a service that detects images with our API. We take no responsibility for our user actions.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
