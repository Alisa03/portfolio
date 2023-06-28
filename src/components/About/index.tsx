import ScrollAnimation from "../ui/ScrollAnimation"

import about from './about.module.scss'
import style from '@/styles/page.module.scss'

const About = () => {
    return (
        <section id="about" className={style.section} style={{ textAlign: "center" }}>
            <h2 className={style.section__title}>Приветствую на моем <span className={style.color}>портфолио</span></h2>
            <ScrollAnimation>
                <p className={`${style.section__text} ${about.text}`}>
                    Меня зовут Алиса. Вот уже более года самостоятельно изучаю web-разработку. В работе использую html/css, js/ts и фреймворк next. Четко понимаю проблемы и задачи заказчика, которые они хотят решить через создание сайта.
                </p>
                <p className={`${style.section__text} ${about.text}`}>
                    Создаю быстрые, адаптивные, кроссплатформенный и интуитивно понятные сайты. Стремлюсь к постоянному совершенствованию своих навыков и изучению новых технологий. В будущем планирую обучиться web-дизайну.
                </p>
            </ScrollAnimation>
        </section>
    )
}

export default About