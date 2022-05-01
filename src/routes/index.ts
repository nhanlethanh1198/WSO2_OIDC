import * as fs from "fs";
import * as path from "path";
import * as express from "express";
import * as _ from "lodash";

const versions = fs.readdirSync(__dirname);
const route = express.Router();
versions.forEach((version) => {
  const versionDir = path.join(__dirname, version);
  if (fs.lstatSync(versionDir).isDirectory()) {
    const modules = fs.readdirSync(versionDir);
    const subRoute = express.Router();
    modules.forEach(async (module) => {
      if (_.endsWith(module, ".map")) return;
      const currentPath = path.join(
        __dirname,
        version,
        module
      )
      const { default: Router } = await import(currentPath)
      const router = new Router();
      module = module.split(".")[0];
      subRoute.use(`/${module}`, router.router);
    });
    route.use("/" + version, subRoute);
  }
});

export default route;
