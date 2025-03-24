import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenApi } from "./types.js";

import packageJson from "../../package.json";

export default function configureOpenApi(app: AppOpenApi) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJson.version,
      title: "Do API",
    },
  });

  app.get("/reference", apiReference({
    url: "/doc",
  }));
}
