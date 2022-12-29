import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Script from "next/script";

import { UMAMI_WEB_ID, UMAMI_WEB_SRC } from "@/constants/baseConstants";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <Script
            async
            defer
            data-website-id={UMAMI_WEB_ID}
            src={UMAMI_WEB_SRC}
            data-cache="true"
            data-domains="yehezgun.com"
          ></Script>
          <script src="https://app.embed.im/snow.js" defer></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
