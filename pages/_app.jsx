// styles
import 'styles/main.scss'

// Components
import { Head, Background } from 'components/common'
import { AnimateSharedLayout } from "framer-motion"
import { Cursor } from 'components/common'

// pages/_app.js
export function reportWebVitals(metric) {
  // console.log(metric)
}

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Head />
      <Cursor />
      <Background />
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}

export default MyApp
