import clsx from "clsx"

import { ScrollAnimation } from "@/shared/ui"

import s from './about.module.scss'

export const About = () => {
    return <section id="about" className="section">
        <h2 className="section__title">Обо мне</h2>
        <ScrollAnimation>
            <p className={clsx("section__text", s.text)}>
                Вот уже более года самостоятельно изучаю web-разработку. В работе использую html/css, js/ts и фреймворк next. Четко понимаю проблемы и задачи заказчика, которые они хотят решить через создание сайта.
            </p>
            <p className={clsx("section__text", s.text)}>
                Создаю быстрые, адаптивные, кроссплатформенный и интуитивно понятные сайты. Стремлюсь к постоянному совершенствованию своих навыков и изучению новых технологий. В будущем планирую обучиться web-дизайну.
            </p>
        </ScrollAnimation>
    </section>
}