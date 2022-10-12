import { Plugin } from "$fresh/server.ts";
import { PluginRenderContext } from "$fresh/src/server/types.ts";
export type { Config } from "./main.ts";
import { Config } from "./main.ts";

export function freshSeoPlugin(config:Config): Plugin {
    const main = `data:application/javascript,import m from "${
    new URL("./main.ts", import.meta.url).href
  }";
import config from "${config.selfURL}";
export default function() { m(config); }`;
  return {
    name: "fresh-seo",
    entrypoints: { "main": main },
    render(ctx: PluginRenderContext) {
      ctx.render();
      return {
        scripts: [
          {
            entrypoint: "main",
            state: {},
          },
        ],
      };
    },
  };
}