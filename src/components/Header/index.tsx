import clsx from 'clsx'
import s from './header.module.scss'
import page from '@/styles/page.module.scss'

const HeaderContent = () => {
    return (
        <div id='home' className={s.head}>
            <div className={s.stars}>
                <div className={`${s.star} ${s.star1}`} />
                <div className={`${s.star} ${s.star2}`} />
                <div className={`${s.star} ${s.star3}`} />
            </div>
            <div className={`${s.head__content} ${page.flexAc} ${page.flexJc}`}>
                <h1 className={clsx(s.head__title, page.color)}>
                    Привет! Я Светлана, <br />
                    frontend разработчик
                </h1>
            </div>
            <div className={s.head__scroll_position}>
                <a href="#about" className={s.head__scroll} />
            </div>
        </div>
    )
}

export default HeaderContent
