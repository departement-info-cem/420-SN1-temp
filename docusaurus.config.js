// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import {themes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const siteConfig = require("./config");

const lightCodeTheme = themes.vsLight
const darkCodeTheme = themes.vsDark

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: siteConfig.nom,
    tagline: siteConfig.description,
    url: "https://departement-info-cem.github.io",
    baseUrl: `/${siteConfig.nomUrl}/`,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    organizationName: "departement-info-cem",
    projectName: siteConfig.nomUrl,
    deploymentBranch: "gh-pages",
    trailingSlash: false,

    i18n: {
        defaultLocale: "fr",
        locales: ["fr"],
    },

    markdown: {
        mermaid: true,
    },
    themes: ["@docusaurus/theme-mermaid"],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    routeBasePath: "/",
                    editUrl: `https://github.com/departement-info-cem/${siteConfig.nomUrl}/tree/main`,
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                theme: {
                    customCss: [require.resolve("./src/css/custom.css")],
                },
                blog: {
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                pages: {
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
            }),
        ],
    ],

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            mermaid: {
                theme: {light: 'forest', dark: 'dark'},
            },
            docs: {
                sidebar: {
                    hideable: true,
                },
            },
            navbar: {
                title: siteConfig.nom,
                logo: {
                    alt: "Logo CEM",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "cours/rencontre1",
                        position: "left",
                        label: "Cours",
                    },
                    {
                        type: "docSidebar",
                        position: "left",
                        sidebarId: "tp",
                        label: "Travaux Pratiques",
                    },
                    {
                        type: "docSidebar",
                        position: "left",
                        sidebarId: "recettes",
                        label: "Recettes",
                    },
                    {
                        type: "docSidebar",
                        position: "left",
                        sidebarId: "aidememoire",
                        label: "Aide-mémoire",
                    },
                    {
                        label: "4A3 (Projet d'intégration)",
                        href: `https://info.cegepmontpetit.ca/360-4A3/`,
                        position: "right",
                    },
                    {
                        label: "4A4 (Réseaux de neurones)",
                        href: `https://info.cegepmontpetit.ca/420-4A4/`,
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Sources",
                        items: [
                            {
                                label: "GitHub",
                                href: `https://github.com/departement-info-cem/${siteConfig.nomUrl}`,
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()}. ${
                    siteConfig.nom
                }. CÉGEP Édouard-Montpetit.`,
            },
            // Décommenter et remplir pour activer l'indexation des pages par le moteur de recherche local
            // algolia: {
            //   appId: '',
            //   apiKey: '',
            //   indexName: '',
            //   contextualSearch: true,
            //   searchPagePath: 'search',
            // },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ["csharp", "java", "python"],
            },
            metadata: [
                {
                    name: "description",
                    content: siteConfig.description,
                },
                {
                    name: "keywords",
                    content: "SN1, cem, 420, 420-SN1, programmation en sciences, cours programmation cégep, cégep Édouard-Montpetit, cegep Edouard Montpetit, programmation scientifique, étudiants sciences de la nature, initiation à la programmation, python, algorithmes, informatique, cours informatique, sciences de la nature, apprendre la programmation",
                },
                {
                    property: "og:title",
                    content: siteConfig.nom,
                },
                {
                    property: "og:description",
                    content: siteConfig.description,
                },
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    property: "og:image",
                    content: "https://info.cegepmontpetit.ca/420-SN1-temp/img/logo.svg"
                },
                {
                    property: "og:url",
                    content: "https://info.cegepmontpetit.ca/420-SN1-temp/"
                }
            ],
        }),
};

module.exports = config;


