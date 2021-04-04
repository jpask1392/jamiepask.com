// styles
import 'styles/main.scss'

// Components
import { Head, Background } from 'components/common'
import { AnimateSharedLayout } from "framer-motion"
import { Cursor } from 'components/common'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from 'redux/store'

// pages/_app.js
export function reportWebVitals(metric) {
  // console.log(metric)
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head />
      <Cursor />
      <Background />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
