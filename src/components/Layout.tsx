import Head from "next/head"

import Navbar from "./Navbar"
import Footer from './Footer'

export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <title>Portfolio of Alice's</title>
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="ru_Ru" />
                <meta property="og:title" content="Portfolio " key="title" />
                <link rel="icon" type="image/x-icon" href="Star.svg" />
                <meta name="keywords" content="freelance, freelancer, web, react, next, js, javascript, typescript, frontend, junior "></meta>
                <meta property="og:description" content="Добро пожаловать в портфолио junior frontend-разработчика Alice. Разрабатываю на html/css, js/ts и next/react" />
                <meta property="description" content="Добро пожаловать в портфолио junior frontend-разработчика Alice. Разрабатываю на html/css, js/ts и next/react" />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
