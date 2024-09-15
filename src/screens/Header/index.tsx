import clsx from 'clsx'

import s from './header.module.scss'

export const Header = () => {
    return <div id='home' className={s.head}>
        <div className={s.stars}>
            <div className={clsx(s.star, s.star1)} />
            <div className={clsx(s.star, s.star2)} />
            <div className={clsx(s.star, s.star3)} />
        </div>
        <div className={clsx(s.content, "flex-center container")}>
            <h1 className={clsx(s.title, "color")}>
                Привет! Я Светлана, <br />
                frontend разработчик
            </h1>
            <img className={s.logo} src='/logo.webp' alt="me" />
        </div>
        <div className={s.scroll_position}>
            <a href="#about" className={s.scroll} />
        </div>
    </div>
}   