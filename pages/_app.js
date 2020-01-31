import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { theme } from '../app/theme'
import { ThemeProvider } from 'styled-components'
import { Nav } from '../app/components'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Zedlen</title>                      
        </Head>
        <ThemeProvider theme={theme}>
        <style jsx global>{`            
            body, ul {
              margin: 0;
              padding: 0;
              font-family: ${theme.fonts}
            }`}
          </style>  
          <Nav />
          <Component {...pageProps} />
        </ThemeProvider>
      </>      
    )
  }
}