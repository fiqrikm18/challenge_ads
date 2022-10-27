import { IRouterAds } from "../handlers/router.handler";
import HomeController from "../controllers/home.controller";

const homeController = new HomeController();

export const indexRouter: IRouterAds[] = [
  {
    name: "home",
    path: "/",
    method: "GET",
    handler: homeController.index
  }
];