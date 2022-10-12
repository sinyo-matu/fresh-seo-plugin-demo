import { Head } from "$fresh/runtime.ts";
import NavBar from "../components/NavBar.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Index</title>
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
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
