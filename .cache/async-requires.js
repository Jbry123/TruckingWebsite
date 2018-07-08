// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---themes-photon-pages-index-js": require("gatsby-module-loader?name=component---themes-photon-pages-index-js!/Users/jonathanbry/LambdaSchool/TruckingWebsite/themes/photon/pages/index.js"),
  "component---themes-photon-templates-post-js": require("gatsby-module-loader?name=component---themes-photon-templates-post-js!/Users/jonathanbry/LambdaSchool/TruckingWebsite/themes/photon/templates/post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/jonathanbry/LambdaSchool/TruckingWebsite/.cache/dev-404-page.js")
}

exports.json = {
  "index.json": require("gatsby-module-loader?name=path---index!/Users/jonathanbry/LambdaSchool/TruckingWebsite/.cache/json/index.json"),
  "first-post.json": require("gatsby-module-loader?name=path---first-post!/Users/jonathanbry/LambdaSchool/TruckingWebsite/.cache/json/first-post.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/jonathanbry/LambdaSchool/TruckingWebsite/.cache/json/dev-404-page.json")
}

exports.layouts = {

}