import { AppProps } from 'next/app'

import { Layout } from '@/screens'

import '@/app/_styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}
export default MyApp