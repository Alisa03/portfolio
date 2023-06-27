const MenuList = ({ styleList, Click }: any) => {

    return (
        <ul className={styleList}>

            <li><a onClick={Click} href="#home">HOME</a></li>
            <li><a onClick={Click} href="#about">ABOUT</a></li>
            <li><a onClick={Click} href="#works">PROECT'S</a></li>
            <li><a onClick={Click} href="#contact">CONTACT</a></li>

        </ul>
    )
}

export default MenuList