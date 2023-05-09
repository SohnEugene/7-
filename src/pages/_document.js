import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <button
            className={`w-40
                      justify-self-center
                      p-1 mb-4
                    text-rose-500
                    border border-rose-500 rounded
                    hover:bg-white hover:text-rose-500 float-right mr-10`}
            onClick={() => signOut()}
          >
            Sign out
      </button>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
