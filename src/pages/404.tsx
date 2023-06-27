import Link from "next/link";

import style from '@/styles/page.module.scss'

export default function NotFoundPage() {
    return (
        <main style={{ padding: "30px 0" }} className={`${style.block} ${style.container} ${style.flexAc} ${style.flexCG} ${style.flexJc}`}>
            <h1 style={{ fontSize: "10rem", letterSpacing: "2vw" }}>404</h1>
            <Link className={`${style.section__text} ${style.btn}`} href='/'>Home</Link>
        </main>
    )
}
