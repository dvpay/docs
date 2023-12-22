import { sidebar } from "vuepress-theme-hope";

export const sidebarRu = sidebar({
    "/ru/": [
        "",
        {
            text: "Начало работы",
            prefix: "ru/getting-started/",
            collapsible: true,
            children: [
                "/ru/getting-started/README.md",
                "/ru/getting-started/installation.md",
            ],
        },
        {
            text: "Api Интеграция",
            prefix: "ru/api-integration/",
            collapsible: true,
            children: [
                "/ru/api-integration/README.md",
                "/ru/api-integration/callback.md",
            ]
        }
    ],
});

