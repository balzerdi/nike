import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/modules/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
