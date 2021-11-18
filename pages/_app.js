
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import Layouts from '../components/Layouts'
import { Provider } from 'react-redux'
import { store } from '../Redux/Store'

function MyApp({ Component, pageProps }) {
  return(
  <Layouts>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </Layouts>
  )
}

export default MyApp
