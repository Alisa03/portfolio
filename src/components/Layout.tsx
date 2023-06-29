import Head from "next/head"

import Navbar from "./Navbar"
import Footer from './Footer'

export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <title>Portfolio of Alice's</title>
                <link rel="icon" type="image/x-icon" href="/Star.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;500&display=swap" rel="stylesheet" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="ru_Ru" />
                <meta property="og:title" content="Portfolio " key="title" />
                <meta name="keywords" content="freelance, freelancer, web, react, next, js, javascript, typescript, frontend, junior " />
                <meta property="og:description" content="Добро пожаловать в портфолио junior frontend-разработчика Alice. Разрабатываю на html/css, js/ts и next/react" />
                <meta property="description" content="Добро пожаловать в портфолио junior frontend-разработчика Alice. Разрабатываю на html/css, js/ts и next/react" />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
