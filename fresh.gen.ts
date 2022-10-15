// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/about.tsx";
import * as $1 from "./routes/api/joke.ts";
import * as $2 from "./routes/index.tsx";
import * as $3 from "./routes/sitemap.xml.ts";
import * as $$0 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/about.tsx": $0,
    "./routes/api/joke.ts": $1,
    "./routes/index.tsx": $2,
    "./routes/sitemap.xml.ts": $3,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
