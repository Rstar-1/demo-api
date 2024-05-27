const express = require("express");
const router = express.Router();
const WebauthRoute = require("./webauthroutes/WebauthRoutes");
const BlogRoute = require("./blogroutes/BlogRoutes");
const BlogCategoryRoute = require("./blogroutes/BlogCategoryRoutes");
const PlanRoute = require("./planroutes/PlanRoutes");
const PlanRoutetwo = require("./planroutes/PlanRoutes2");
const PlanRoutethird = require("./planroutes/PlanRoutes3");
const SeoRoute = require("./seoroutes/SeoRoutes");
const TextRoute = require("./cmsroutes/TextRoutes");
const ImageRoute = require("./cmsroutes/ImageRoutes");
const BasicRoute = require("./planroutes/BasicRoutes");
const PremiumRoute = require("./planroutes/PremiumRoutes");
const SuperPremiumRoute = require("./planroutes/SuperPremiumRoutes");
const ProjectRoute = require("./projectroutes/ProjectRoutes");
const BrandRoute = require("./brandroutes/BrandRoutes");
const ReviewRoute = require("./reviewroutes/ReviewRoutes");

module.exports = function(app) {
 app.use("/api", router)
 WebauthRoute(router);
 BlogRoute(router);
 BlogCategoryRoute(router);
 PlanRoute(router);
 PlanRoutetwo(router);
 PlanRoutethird(router);
 SeoRoute(router);
 TextRoute(router);
 ImageRoute(router);
 BasicRoute(router);
 PremiumRoute(router);
 SuperPremiumRoute(router);
 ProjectRoute(router);
 BrandRoute(router);
 ReviewRoute(router);
}
