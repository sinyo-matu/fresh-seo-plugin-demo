import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import NavBar from "../components/NavBar.tsx";
import Counter from "../islands/Counter.tsx";
import seoConfig from "../fresh-seo.config.ts";
import { MetaProps, getMetaProps } from "../seo/mod.ts";
import Meta from "../seo/components/Meta.tsx";
interface Props {
  metaProps: MetaProps;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const metaProps = getMetaProps(seoConfig, req);
    return ctx.render({ metaProps });
  },
};

export default function Home({ data }: PageProps<Props>) {
  return (
    <>
      <Head>
        <Meta metaProps={data.metaProps} />
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <NavBar />
        <h1>Index Page</h1>
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
