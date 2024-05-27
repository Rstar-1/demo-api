const express = require("express");
const router = express.Router();
const WebauthRoute = require("./webauthroutes/WebauthRoutes");
const BlogRoute = require("./blogroutes/BlogRoutes");
const SeoRoute = require("./seoroutes/SeoRoutes");

module.exports = function(app) {
 app.use("/api", router)
 WebauthRoute(router);
 BlogRoute(router);
 SeoRoute(router);
}
