// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-listing-jsx": () => import("../src/templates/listing.jsx" /* webpackChunkName: "component---src-templates-listing-jsx" */),
  "component---src-templates-post-jsx": () => import("../src/templates/post.jsx" /* webpackChunkName: "component---src-templates-post-jsx" */),
  "component---src-templates-tag-jsx": () => import("../src/templates/tag.jsx" /* webpackChunkName: "component---src-templates-tag-jsx" */),
  "component---src-templates-category-jsx": () => import("../src/templates/category.jsx" /* webpackChunkName: "component---src-templates-category-jsx" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-jsx": () => import("../src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */)
}

