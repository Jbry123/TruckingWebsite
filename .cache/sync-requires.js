// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---themes-photon-pages-index-js": preferDefault(require("/Users/jonathanbry/LambdaSchool/TruckingWebsite/themes/photon/pages/index.js")),
  "component---themes-photon-templates-post-js": preferDefault(require("/Users/jonathanbry/LambdaSchool/TruckingWebsite/themes/photon/templates/post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jonathanbry/LambdaSchool/TruckingWebsite/.cache/dev-404-page.js"))
}

exports.json = {
  "index.json": require("/Users/jonathanbry/LambdaSchool/TruckingWebsite/.cache/json/index.json"),
  "first-post.json": require("/Users/jonathanbry/LambdaSchool/TruckingWebsite/.cache/json/first-post.json"),
  "dev-404-page.json": require("/Users/jonathanbry/LambdaSchool/TruckingWebsite/.cache/json/dev-404-page.json")
}