import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

interface Props {
  styleTags: StyleSheet;
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <html lang="fa" dir="rtl">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </html>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
