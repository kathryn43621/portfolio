import { GoogleTagManager } from "@next/third-parties/google";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
      <GoogleTagManager gtmId="GTM-TDJCWTLX" />
    </>
  );
}
