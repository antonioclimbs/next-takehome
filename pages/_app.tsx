import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FINESSE</title>
        <meta name="description" content="Quick fashion done right" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
