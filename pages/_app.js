import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { theme } from '../app/theme'
import { ThemeProvider } from 'styled-components'
import { Nav } from '../app/components'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    const navProps = {      
      logo: "/static/images/logo.png",
      brandName: "Zedlen",
      leftItems: [{
        route:"#about",
        text:"Acerca de mi"
      },{
        route:"#projects",
        text:"Mis proyectos"
      },{
        route:"#techs",
        text:"Conocimientos"
      }],
      rigthItems: [/*{
        route:"/index#2",
        text:"Item 2",
      },*/{
        route:"#contact",
        text:"Contactame",
        button: true,
        onclick:()=>{          
          document.getElementById("contact").scrollIntoView({ behavior: 'smooth', block: 'end'});
        }
      }], 
      navProps: {}
    };
    return (
      <>        
        <title>Zedlen</title>     
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />                                 
        <ThemeProvider theme={theme}>
        <style jsx global>{`            
            body {
              margin: 0;
              padding: 0;
              font-family: ${theme.fonts};
            }`}
          </style>  
          <Nav {...navProps} />
          <Component {...pageProps} />
        </ThemeProvider>
      </>      
    )
  }
}