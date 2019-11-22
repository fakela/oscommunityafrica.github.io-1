module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":690},
    },{
      plugin: require('../node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-47311644-5"},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"#c62828"},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Gatsby Advanced Starter","short_name":"GA Starter","description":"A GatsbyJS stater with Advanced design in mind.","start_url":"","background_color":"#e0e0e0","theme_color":"#c62828","display":"minimal-ui","icons":[{"src":"/logos/logo-192.png","sizes":"192x192","type":"image/png"},{"src":"/logos/logo-512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[],"modulePath":"/home/bolaji/Desktop/osf/oscommunityafrica.github.io/src/netlifycms/index.js","enableIdentityWidget":true,"publicPath":"admin","htmlTitle":"Content Manager","includeRobots":false},
    }]
