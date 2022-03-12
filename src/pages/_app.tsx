import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@fontsource/fira-sans";
import "@fontsource/pt-serif";
import "react-tippy/dist/tippy.css";

import defaultSEOConfig from "../../next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="theme-color" content="#3f3f46" />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
