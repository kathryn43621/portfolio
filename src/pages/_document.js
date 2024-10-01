import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Yu Wei Yang | Full Stack Software Engineer Portfolio | Passion for improving lives through technology, healthcare, and accessibility."
          />
          <meta name="robots" content="all" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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

          {/* <!-- Google Tag Manager --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TDJCWTLX');`,
            }}
          />
          {/* <!-- End Google Tag Manager --> */}
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
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TDJCWTLX"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
