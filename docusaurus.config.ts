import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "focuspang ai guide",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://3rinnovation.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "3rinnovation", // Usually your GitHub org/user name.
  projectName: "focuspang-manual", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Google Tag Manager 설정
  scripts: [
    {
      src: "https://www.googletagmanager.com/gtm.js?id=GTM-NHH2X5G6",
      async: true,
    },
  ],

  // Google Tag Manager 초기화 코드
  headTags: [
    {
      tagName: "script",
      attributes: {
        type: "text/javascript",
      },
      innerHTML: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NHH2X5G6');
      `,
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
    localeConfigs: {
      kr: {
        htmlLang: "ko-KR",
      },
      en: {
        htmlLang: "en-US",
      },
    },
  },
  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-M69ZXJ9DMZ", // GA4 측정 ID로 변경
        anonymizeIP: false, // 필요에 따라 IP 익명화 설정
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.ts"),
          // 파일 넘버링 자동 패스
          numberPrefixParser: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      // title: "",
      logo: {
        alt: "focuspang_ai logo",
        src: "img/focuspang_ai.svg",
        srcDark: "img/focuspang_ai_dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "elementarySidebar",
          position: "left",
          label: "초등학교용",
        },
        {
          type: "docSidebar",
          sidebarId: "middlehighSidebar",
          position: "left",
          label: "중고등학교용",
        },
        {
          // 다국어 드롭다운
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Guide",
          items: [
            {
              label: "포커스팡 가이드",
              to: "/",
            },
          ],
        },
        {
          title: "포커스팡",
          items: [
            {
              label: "관리자용 포커스팡",
              href: "https://admin.focuspang.com/",
            },
            {
              label: "선생님용 포커스팡",
              href: "https://teacher.focuspang.com/",
            },
            {
              label: "학생용 포커스팡",
              href: "https://student.focuspang.com/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "포커스팡 공식 홈페이지",
              href: "https://focuspang.com/",
            },
            {
              label: "포커스팡 즉문즉답",
              href: "https://focuspang.com/ask.html",
            },
          ],
        },
      ],
      copyright: `© 3R Innovation Inc. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
