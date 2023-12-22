import {defineUserConfig} from "vuepress";
import {hopeTheme} from "vuepress-theme-hope";
import {sidebarEn, sidebarRu} from "./configs/sidebar";

export default defineUserConfig({
    theme: hopeTheme({
        logo: '/image/logo.svg',
        logoDark: '/image/logoDark.svg',
        navbar: [
            {
                text: 'Demo',
                link: 'https://demo.dv.net',
            },
        ],
        locales: {
            "/": {
                sidebar: sidebarEn,
            },
            "/ru/": {
                sidebar: sidebarRu,
            }
        },

        navbarLayout: {start: ["Brand"], center: [], end: ["Links", "Language", "Repo", "Outlook", "Search"]}
    }),
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Dv Pay',
            description: 'Dv Pay Documentation',
        },
        '/ru/': {
            lang: 'ru-RU',
            title: 'Dv Pay',
            description: 'Документация Dv Pay',
        },
    },
});
