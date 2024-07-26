import { Layout } from '@/screens'

import '@/app/_styles/index.css'

const MyApp = ({ Component, pageProps }: any) => {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}
export default MyApp