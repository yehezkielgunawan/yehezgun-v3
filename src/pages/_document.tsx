import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

import { UMAMI_WEB_ID, UMAMI_WEB_SRC } from "@/constants/baseConstants";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            defer
            data-website-id={UMAMI_WEB_ID}
            src={UMAMI_WEB_SRC}
            data-cache="true"
            data-domains="yehezgun.com"
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
