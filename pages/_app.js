import App, { Container } from "next/app";
import React from "react";
import Router from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    debugger;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    debugger;
    return "hi";
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
