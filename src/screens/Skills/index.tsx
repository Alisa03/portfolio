import { ScrollAnimation } from '@/shared/ui'

import s from './skills.module.scss'

export const Skills = () => {
    return <section id="skills" className="section">
        <h3 className="section__title">Мои навыки</h3>
        <ScrollAnimation custom={s.flex}>
            <div className={s.block}>
                <h5 className={s.title}>Языки</h5>
                <ul className="section__text">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Scss</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                </ul>
            </div>
            <div className={s.block}>
                <h5 className={s.title}>Другое</h5>
                <ul className="section__text">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Wagmi</li>
                    <li>Git</li>
                </ul>
            </div>
        </ScrollAnimation>
    </section>
}