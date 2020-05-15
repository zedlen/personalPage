import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";
import Manifest from 'next-manifest/manifest'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="es">
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}          
          <link rel="icon" type="image/png" href="/static/images/logo.png" />          
          <meta name="description" content="My personal page, Full Stack Javascript Developer. "/>
          <meta name="keywords" content="web developer, web, developer, fullstack, front, frontend, front-end, back, backend, back-end, databese"/>          
          <link rel="apple-touch-icon" sizes="120x120" href="/static/images/pwa/apple-icon-120.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/static/images/pwa/apple-icon-167.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/images/pwa/apple-icon-152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/images/pwa/apple-icon-180.png" />
          <Manifest
            // path for manifest will be deploying
            href='/static/manifest.json'
            // color for `theme-color`
            themeColor='#171A1E'
            // scale for `viewport` meta tag
            initialScale='1'
          />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
