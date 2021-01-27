import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'

const name = 'Ramiro'
export const siteTitle = 'GM Bienes Raíces';

export default function Layout({ children, pageTitle }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta content="GM Bienes Raíces" property="og:title" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
        <link href="/css/gm-inmob.webflow.css" rel="stylesheet" type="text/css" />
        {/* [if lt IE 9]><![endif] */}
        <link href="/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="/images/webclip.png" rel="apple-touch-icon" />
        
        <link href="https://cdn.jsdelivr.net/npm/ol-geocoder@latest/dist/ol-geocoder.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="/css/ol.css" type="text/css"/>
        


        <link rel="icon" href="/images/favicon.png"></link>

        {/*<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://js.api.here.com/v3/3.1/mapsjs-core.js" type="text/javascript" charSet="utf-8"></script>
        <script src="https://js.api.here.com/v3/3.1/mapsjs-service.js" type="text/javascript" charSet="utf-8"></script>
       
        <script src="https://js.api.here.com/v3/3.1/mapsjs-ui.js" type="text/javascript" charSet="utf-8"></script>
        <link rel="stylesheet" type="text/css" href="https://js.api.here.com/v3/3.1/mapsjs-ui.css" />
        <script src="https://js.api.here.com/v3/3.1/mapsjs-mapevents.js" type="text/javascript" charSet="utf-8"></script>
        */}
        
      </Head>

      <Header />

      <div style={{marginTop: 60 }}>
        {children}
      </div>

      <Footer />

      <script src="/js/jquery.js" type="text/javascript" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
      <script src="/js/webflow.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.3.1/build/ol.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/ol-geocoder"></script>
    </div>
  )
}