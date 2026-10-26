
import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "cherub",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-10-26",
    compatibilityFlags: ["nodejs_compat"],
    assets: {
      notFoundHandling: "none",
      runWorkerFirst: [
        "/*",
        "!/_next/static/*",
        "!/*/_next/static/*",
      ],
    },
    env: {
      ASSETS: bindings.assets(),
      IMAGES: bindings.images(),
    },
  }),
});
