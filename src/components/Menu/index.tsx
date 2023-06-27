import { useState } from "react"

import style from "./menu.module.scss"
import styles from "@/styles/page.module.scss"

import MenuList from '@/components/ui/MenuList'

const MobileMenu = () => {
    const [open, setOpen] = useState(false)

    const Modal = () => {
        document.body.style.overflow = open ? 'unset' : 'hidden'
        setOpen(!open)
    }

    return (
        <>
            <MenuList styleList={style.menu} />
            <button onClick={Modal} className={`${styles.btn} ${style.burger} ${styles.flexCG} ${styles.flexAc}`}>
                <span className={style.burger__line} />
                <span className={style.burger__line} />
            </button>
            <MenuList Click={Modal} styleList={`${style.dropdownMenu} ${open ? style.visible : ''}`} />
        </>
    )
}

export default MobileMenu