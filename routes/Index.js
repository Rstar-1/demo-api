const express = require("express");
const router = express.Router();
const WebauthRoute = require("./webauthroutes/WebauthRoutes");
const BlogRoute = require("./blogroutes/BlogRoutes");
const SeoRoute = require("./seoroutes/SeoRoutes");
const projectRoute = require("./projectroutes/ProjectRoutes");

module.exports = function(app) {
 app.use("/api", router)
 WebauthRoute(router);
 BlogRoute(router);
 SeoRoute(router);
 projectRoute(router);
}
