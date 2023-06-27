import nav from "./navbar.module.scss"
import style from "@/styles/page.module.scss"

import Menu from '../Menu'

const Navbar = () => {
    return (
        <header className={nav.header}>
            <div className={`${style.wrapper_flex} ${style.flexAc} ${style.container}`}>
                <h3 className={style.logo}>Alice</h3>
                <Menu />
            </div>
        </header>
    )
}

export default Navbar