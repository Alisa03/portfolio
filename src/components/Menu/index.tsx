import { useState } from "react"

import menu from "./menu.module.scss"
import style from "@/styles/page.module.scss"

import MenuList from '@/components/ui/MenuList'

const MobileMenu = () => {
    const [open, setOpen] = useState(false)

    const Modal = () => {
        document.body.style.overflow = open ? 'unset' : 'hidden'
        setOpen(!open)
    }

    return (
        <>
            <MenuList styleList={menu.menu} />
            <button onClick={Modal} className={`${style.btn} ${menu.burger} ${style.flexAc} ${open ? menu.burger__active : ''}`}>
                <span className={menu.burger__line} />
                <span className={menu.burger__line} />
            </button>
            <MenuList Click={Modal} styleList={`${menu.dropdownMenu} ${open ? menu.visible : ''}`} />
        </>
    )
}

export default MobileMenu