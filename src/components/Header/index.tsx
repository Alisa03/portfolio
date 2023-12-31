import style from './header.module.scss'
import page from '@/styles/page.module.scss'

const HeaderContent = () => {
    return (
        <div id='home' className={style.head}>
            <div className={style.stars}>
                <div className={`${style.star} ${style.star1}`} />
                <div className={`${style.star} ${style.star2}`} />
                <div className={`${style.star} ${style.star3}`} />
            </div>
            <div className={`${style.head__content} ${page.flexAc} ${page.flexJc}`}>
                <h1 className={style.head__title}>
                    Привет! Я <span className={page.color}> Алиса</span> и <br /> я <span className={page.color}>
                        frontend разработчик
                    </span>
                </h1>
            </div>
            <div className={style.head__scroll_position}>
                <a href="#about" className={style.head__scroll} />
            </div>
        </div>
    )
}

export default HeaderContent
