const MenuList = ({ styleList, Click }: any) => {

    return (
        <ul className={styleList}>

            <li><a onClick={Click} href="#home">Главная</a></li>
            <li><a onClick={Click} href="#about">Обо мне</a></li>
            <li><a onClick={Click} href="#works">Работы</a></li>
            <li><a onClick={Click} href="#contact">Контакты</a></li>

        </ul>
    )
}

export default MenuList