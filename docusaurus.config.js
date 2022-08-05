// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const tabs = require("remark-docusaurus-tabs");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Livepeer Studio Docs",
  tagline:
    "Build next-gen, creator-owned video experiences with Livepeer Studio, an open source gateway for interacting with the Livepeer network using the Livepeer API and a stunning user interface.",
  url: "https://docs.livepeer.studio",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "livepeer", // Usually your GitHub org/user name.
  projectName: "livepeer-studio", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [tabs],
          routeBasePath: "/",
          breadcrumbs: true,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/livepeer/studio/tree/main/packages/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "TIWEI9YB8Y",
        apiKey: "bee5caa76c6df12c16be24f2f04e7c7c",
        indexName: "2022-livepeer-org-docs",
        contextualSearch: true,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Livepeer Studio",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/quickstart",
            label: "Quickstart",
            position: "left",
          },
          { to: "/concepts", label: "Concepts", position: "left" },
          {
            to: "/guides",
            position: "left",
            label: "Guides",
          },
          { to: "/reference/api", label: "API Reference", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
          {
            label: "Dashboard",
            href: "https://livepeer.studio/dashboard",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "About Livepeer Studio",
                to: "/what-is-livepeer-studio",
              },
              {
                label: "Quickstart",
                to: "/quickstart",
              },
              {
                label: "Concepts",
                to: "/concepts",
              },
              {
                label: "Guides",
                to: "/guides",
              },
              {
                label: "API Reference",
                to: "/api",
              },
            ],
          },
          {
            title: "Ecosystem",
            items: [
              {
                label: "Livepeer Studio",
                href: "https://livepeer.studio",
              },
              {
                label: "Livepeer.org",
                href: "https://livepeer.org",
              },
              {
                label: "Livepeer Explorer",
                href: "https://explorer.livepeer.org",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://github.com/facebook/docusaurus",
              },
              {
                label: "GitHub",
                href: "https://github.com/livepeer/studio",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/livepeerstudio",
              },
              {
                label: "Blog",
                href: "https://livepeer.studio/blog",
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
