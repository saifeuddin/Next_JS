import Head from 'next/head'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" defer></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}


export default MyApp