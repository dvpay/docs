## DV PAY Documentation

Welcome to the DV PAY documentation!
To write documentation in the project we use VuePress

To get started with VuePress, you'll need Node.js and npm. You can edit VuePress using the following command:


Clone this Project

Running a Local Server

```bash
npm run docs:dev
```

Once your project start a local development server with the following command:

Open your browser and navigate to http://localhost:8080 to see your site in action.

### Project Structure

The VuePress project structure includes the following main directories:

    .vuepress: Configuration files reside here to customize your site.
    docs: This directory contains all the content for your site in Markdown format.

Configuring Your Site

The site configuration file is located at .vuepress/config.js. Here, you can customize various settings such as the site title, theme, plugins, and more.

Example configuration file:

```ts
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
```

Creating Pages

Each page of your site is located in the docs directory and is written in Markdown. Create a new file in this directory, for example, docs/my-page.md, and add your content.

Example my-page.md:

markdown

# My Page

This is the content of my page.

Building Your Site

When you've finished working on your site, you can build it for deployment:

```bash
npm run docs:build
```

The built site will be in the .vuepress/dist directory and ready for hosting.
Conclusion

You now have a basic understanding of how to use VuePress to create your documentation. For more detailed information on features and configurations, please visit the official VuePress website.

Good luck with your project!
