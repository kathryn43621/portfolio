import { GoogleTagManager } from "@next/third-parties/google";
import Theme from "../styles/theme";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Yu Wei Yang | Full Stack Software Engineer Portfolio | Passion for improving lives through technology, healthcare, and accessibility."
        />
        <meta name="robots" content="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Yu Wei Yang | Full Stack Software Engineer Portfolio"
        />
        <meta
          property="og:description"
          content="Full stack software engineer with a passion for improving lives through technology, healthcare, and accessibility."
        />
        <meta property="og:image" content="/images/portfolio-share.png" />
        <meta
          property="og:url"
          content="https://portfolio-kathryn-yangs-projects.vercel.app/"
        />

        <title>Yu Wei Yang | Portfolio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/logoIcon.svg" />
        <link
          rel="canonical"
          href="https://portfolio-kathryn-yangs-projects.vercel.app/"
        />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
      <GoogleTagManager gtmId="GTM-TDJCWTLX" />
    </>
  );
}
