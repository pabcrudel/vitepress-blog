import { defineConfig } from 'vitepress'
import { titleCamelCase } from '../src/title-camel-case'

const repositoryName = 'vitepress-blog';
const repositoryOwner = 'pabcrudel';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // GitHub repository name that will be the path on GitHub Pages
  base: `/${repositoryName}/`,
  title: titleCamelCase(repositoryName),
  description: "Blog generated from Markdowns using Vite + Vue",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: `https://github.com/${repositoryOwner}/${repositoryName}`
      }
    ]
  }
})
