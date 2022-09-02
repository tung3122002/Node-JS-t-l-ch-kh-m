import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.post('/post-about', homeController.postAbout);
    return app.use("/", router);
}

module.exports = initWebRoutes;