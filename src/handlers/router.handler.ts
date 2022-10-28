import { Express, Request, Response } from "express";

export interface IRouterAds {
  name: string;
  path: string;
  method: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  middleware: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: any;
  // eslint-disable-next-line @typescript-eslint/no-extra-semi
};

export default class Router {
  protected app: Express;
  protected port: string;

  constructor(app: Express) {
    this.port = process.env.PORT || "8080";
    this.app = app;
  }

  registerRouter(routers: IRouterAds[]) {
    routers.forEach((router) => {
      switch (router.method) {
        case "GET":
          if (router.middleware !== null) this.app.get(router.path, router.middleware, router.handler);
          else this.app.get(router.path, router.handler);
          break;
        case "POST":
          if (router.middleware !== null) this.app.post(router.path, router.middleware, router.handler);
          else this.app.post(router.path, router.handler);
          break;
        case "PUT":
          if (router.middleware !== null) this.app.put(router.path, router.middleware, router.handler);
          else this.app.put(router.path, router.handler);
          break;
        case "PATCH":
          if (router.middleware !== null) this.app.patch(router.path, router.middleware, router.handler);
          else this.app.patch(router.path, router.handler);
          break;
        case "DELETE":
          if (router.middleware !== null) this.app.delete(router.path, router.middleware, router.handler);
          else this.app.delete(router.path, router.handler);
          break;
        default:
          this.app.all("405", (req: Request, res: Response) => {
            return res.json({
              "msg": `Unsupported method ${router.method}`
            });
          });
      }
    });
  }

  run() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}