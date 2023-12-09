import { type AppType } from 'next/dist/shared/lib/utils'
import { Provider } from '@/provider/provider'
import Layout from '@/layouts/main'
import Font from '@/components/font'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Font />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
