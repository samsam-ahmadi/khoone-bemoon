import React, { ErrorInfo } from "react";
import App, { AppContext } from "next/app";
import { ThemeProvider } from "styled-components";
import Footer from "../components/Footer";

import { theme } from "core/theme";
import { GlobalStyle } from "core/styles/globalStyle";

class AppWrapper extends App<AppContext> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
    };
  }
  pageContext: { theme?: any } = {};

  constructor(props: any) {
    super(props);
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    super.componentDidCatch(error, errorInfo);
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        {/* Wrap every page in Jss and Theme providers */}
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    );
  }
}

export default AppWrapper;
