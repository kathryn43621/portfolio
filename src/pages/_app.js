import { GoogleTagManager } from "@next/third-parties/google";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-TDJCWTLX" />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
