<div align="center"  style="margin-bottom:30px">
    <img src="static/logos/NXTBC.png" alt="Logo" width='500px' height='auto'/>
</div>

## Features

- Gatsby v2 support
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Posts in Markdown
  - Code syntax highlighting
  - Embed YouTube videos
  - Embed Tweets
- Pagination
  - Configurable via `SiteConfig.js`
- Tags
  - Separate page for posts under each tag
- Categories
  - Separate page for posts under each category
- [Disqus](https://disqus.com/) support
  - Notifications about new disqus comments
- `/static/` and content folders are available to use with [gatsby-image](https://www.gatsbyjs.org/docs/gatsby-image/) out of the box for optimized image generation
- High configurability
- Separate components for everything:
  - User social profiles
  - Copyright information
  - More!
- [NetlifyCMS](https://www.netlifycms.org) support out of the box
- PWA features
  - Offline support
  - Web App Manifest support
  - Loading progress for slow networks
- SEO
  - [Google Analytics](https://marketingplatform.google.com/about/analytics/) support
  - Sitemap generation
  - robots.txt
  - General description tags
  - [Schema.org JSONLD (Google Rich Snippets)](https://schema.org/)
  - [OpenGraph Tags (Facebook/Google+/Pinterest)](https://ogp.me/)
  - [Twitter Tags (Twitter Cards)](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup)
- RSS feeds
- Social features
  - Twitter tweet button
  - Facebook share/share count
  - Reddit share/share count
  - LinkedIn share button
  - Telegram share button
- Development tools
  - [ESLint](https://eslint.org/) for linting
  - [Prettier](https://prettier.io/) for code formatting
  - Remark-Lint for linting Markdown
  - write-good for linting English prose
  - gh-pages for deploying to GitHub pages
  - [Netlify](https://www.netlify.com/) deploy configuration

## Getting Started

Clone this repository

```shell
git clone https://github.com/oscommunityafrica/oscommunityafrica.github.io.git && cd oscommunityafrica.github.io
```

Switch to the **new-festival** branch

```shell
git checkout new-festival
```

## Gatsby Setup

Install the Gatsby CLI

```
npm install -g gatsby-cli
```

Change directories into site folder

```
cd oscommunityafrica.github.io
````

Start development server

```
gatsby develop
```
Gatsby will start a hot-reloading development environment accessible by default at localhost:8000.

Create a production build

```
gatsby build
```

Serve the production build locally

```
gatsby serve
```
