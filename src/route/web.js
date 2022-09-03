import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.post('/post-crud', homeController.postCrud);
    router.get('/get-crud', homeController.listCrud);
    return app.use("/", router);
}

module.exports = initWebRoutes;