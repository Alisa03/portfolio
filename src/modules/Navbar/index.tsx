import { useEffect, useState } from "react";
import Link from "next/link";

import { Menu } from "./Menu";

import s from "./navbar.module.scss";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    }, [isOpen]);

    return (
        <header className={s.block}>
            <div className="container flex justify_list">
                <Link style={{ zIndex: 1 }} href=''>
                    <h3 className="logo">Sveta</h3>
                </Link>
                <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
                <button onClick={() => setIsOpen((prevState) => !prevState)} className={`btn ${s.burger} ${isOpen ? s.burger__active : ''}`}>
                    <span className={s.burger__line} />
                    <span className={s.burger__line} />
                </button>
            </div>
        </header>
    );
};