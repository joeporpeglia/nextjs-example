const fetch = require("isomorphic-unfetch");
const withCss = require("@zeit/next-css");

module.exports = withCss({
  cssModules: true,
  assetPrefix: "http://localhost:3000",
  useFileSystemPublicRoutes: false,
  exportPathMap: () => ({
    "/main.phtml": { page: "/" },
    "/watch.phtml": { page: "/watch" }
  })
});
