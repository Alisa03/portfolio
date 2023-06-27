import style from './header_content.module.scss'
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
                <h1 className={page._title}>
                    Hello! I’m <span className={page.color}> Alice</span> & <br /> I’m <span className={page.color}>
                        front-end developer
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
