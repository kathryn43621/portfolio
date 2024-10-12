import Document, { Html, Head, Main, NextScript } from "next/document";
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
            name="keywords"
            content="Yu Wei Yang, Yu Wei, Full Stack Software Engineer, React Developer, Node.js Developer, Next.js Developer, Web Development, Frontend Developer, Backend Developer, Freelance Software Engineer, occupational therapy, occupational therapist, ot"
          />
          <meta
            name="description"
            content="Full Stack Software Engineer specialising in creating impactful web applications. Passionate about technology, healthcare, and accessibility. Explore my portfolio to see my latest projects!"
          />
          <meta name="robots" content="all" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Yu Wei Yang | Full Stack Software Engineer"
          />
          <meta
            property="og:description"
            content="Full Stack Software Engineer specialising in creating impactful web applications. Passionate about technology, healthcare, and accessibility. Explore my portfolio to see my latest projects!"
          />
          <meta
            property="og:image"
            content="https://portfolio-kathryn-yangs-projects.vercel.app/images/portfolio.png"
          />
          <meta
            property="og:url"
            content="https://portfolio-kathryn-yangs-projects.vercel.app/"
          />

          <meta
            name="google-site-verification"
            content="hHOopUMoN-MIJfNR0tvOE3YZsHavdfcJ-y5BWH2_ZUg"
          />
          <meta
            property="og:image:alt"
            content="Preview of Yu Wei Yang's Portfolio projects, including web applications for healthcare and technology."
          />
          <meta property="og:site_name" content="Yu Wei Yang's Portfolio" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Yu Wei Yang - Full Stack Engineer | Web Applications"
          />
          <meta
            name="twitter:description"
            content="Creating impactful, accessible web applications. Explore my work in technology and healthcare!"
          />
          <meta
            name="twitter:image"
            content="https://portfolio-kathryn-yangs-projects.vercel.app/images/portfolio.png"
          />
          <meta
            name="twitter:image:alt"
            content="Portfolio preview of Yu Wei Yang's projects."
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/images/logoIcon.png" />
          <link
            rel="canonical"
            href="https://portfolio-kathryn-yangs-projects.vercel.app/"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Yu Wei Yang",
                url: "https://portfolio-kathryn-yangs-projects.vercel.app/",
                sameAs: [
                  "https://www.linkedin.com/in/yu-wei-yang/",
                  "https://github.com/kathryn43621",
                  // Add other social profiles here
                ],
                jobTitle: "Full Stack Software Engineer",
                worksFor: {
                  "@type": "Organization",
                  name: "Freelence",
                },
                description:
                  "Full Stack Software Engineer specialising in web development and design.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "London",
                  addressCountry: "United Kingdom",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "kathryn43621@gmail.com",
                },
              }),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
