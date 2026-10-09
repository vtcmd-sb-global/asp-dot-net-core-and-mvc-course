import {themes as prismThemes} from 'prism-react-renderer';
const config = {
  title: 'Web Programming Using ASP.NET Core and MVC',
  tagline: 'ASP.NET Core and MVC Course from Beginner to Advance',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://vtcmd-sb-global.github.io',
  baseUrl: '/asp-dot-net-core-and-mvc-course/',
  
  // GitHub pages deployment config.
  organizationName: 'vtcmd-sb-global', // GitHub org/user name.
  projectName: 'asp-dot-net-core-and-mvc-course', // repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with project's social card
      image: 'img/social-card.jpg',
      metadata: [
        {
          name: 'description',
          content:
            'Free web programming course for beginners. Learn web fundamentals, ASP.NET Core, Web API and professional web application development.'
        },
        {
          name: 'keywords',
          content:
            'C#, mvc tutorial, learn asp.net, learn .net, learn asp.net core, learn asp.net mvc, web beginners, web programming, .NET, ASP.NET Core'
        }
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },     
      navbar: {
        title: 'Proficient Programming with C#',
        logo: {
          alt: 'ASP.NET Core and MVC Course Logo',
          src: 'img/logo.jpg', // optional – remove if you don’t have a logo
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            to: '/sessions/session-01',
            label: 'Sessions',
            position: 'left',
          },
          //{
          //  to: '/exercises/session-01',
          //  label: 'Exercises',
          //  position: 'left',
          //},
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Student's Guide for Web Programming Using ASP.NET Core and MVC, Sir Aousaja.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
