import * as React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'

type Props = {
  title?: string,
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'Blockchain Tandil' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://fonts.googleapis.com/css?family=Lobster|Permanent+Marker|Roboto+Slab|Kaushan+Script" rel="stylesheet" />
    </Head>
    <header>
    </header>
    {children}
    <style global jsx>{`
      html {
        min-height: 666px;
        min-width: 320px;
        height: 100%;
      }
      body {
        background-color: black;
      }
      . {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}</style>
    <Footer />
  </div>
)

export default Layout;
