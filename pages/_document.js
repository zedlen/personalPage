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
          <meta name="apple-mobile-web-app-capable" content="yes" />
          {/*} iPhone Xs Max (1242px x 2688px) */}
          <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" href="/static/images/pwa/apple-splash-1242-2688.png" /> 
          {/*} iPhone Xr (828px x 1792px) */}
          <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" href="/static/images/pwa/apple-splash-828-1792.png" /> 
          {/*} iPhone X, Xs (1125px x 2436px) */}
          <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" href="/static/images/pwa/apple-splash-1125-2436.png" /> 
          {/*} iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus (1242px x 2208px) */}
          <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)" href="/static/images/pwa/apple-splash-1242-2208.png" /> 
          {/*} iPhone 8, 7, 6s, 6 (750px x 1334px) */}
          <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="/static/images/pwa/apple-splash-750-1334.png" />  
          {/*} iPad Pro 12.9" (2048px x 2732px) */}
          <link rel="apple-touch-startup-image" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" href="/static/images/pwa/apple-splash-2048-2732.png" /> 
          {/*} iPad Pro 11” (1668px x 2388px) */}
          <link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" href="/static/images/pwa/apple-splash-1668-2388.png" /> 
          {/*} iPad Pro 10.5" (1668px x 2224px) */}
          <link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" href="/static/images/pwa/apple-splash-1668-2224.png" /> 
          {/*} iPad Mini, Air (1536px x 2048px) */}
          <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" href="/static/images/pwa/apple-splash-1536-2048.png" />
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
