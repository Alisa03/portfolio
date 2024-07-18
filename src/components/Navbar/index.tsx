import nav from "./navbar.module.scss"
import style from "@/styles/page.module.scss"

import Menu from '../Menu'

const Navbar = () => {
    return (
        <header className={nav.nav}>
            <div className={`${nav._container} ${style.container}`}>
                <h3 className={style.logo}>Sveta</h3>
                <Menu />
            </div>
        </header>
    )
}

export default Navbar