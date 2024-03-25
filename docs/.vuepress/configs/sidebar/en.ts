import { sidebar } from "vuepress-theme-hope";

export const sidebarEn = sidebar({
    "/": [
        "",
        {
            text: "Get Started",
            prefix: "getting-started/",
            collapsible: true,
            children: [
                "/getting-started/README.md",
                "/getting-started/installation.md",
            ],
        },
        {
            text: "Api Integration",
            prefix: "api-integration/",
            collapsible: true,
            children: [
                "/api-integration/README.md",
                "/api-integration/callback.md",
            ]
        },
        "how-to-use/README.md",
        "staking/README.md"
    ],
});

