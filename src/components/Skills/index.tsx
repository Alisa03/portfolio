import styles from './skills.module.scss'
import style from '@/styles/page.module.scss'

import ScrollAnimation from '../ui/ScrollAnimation'

const Skills = () => {
    return (
        <section id="skills" className={style.section}>
            <h3 className={style.section__title}>SKILLS</h3>
            <ScrollAnimation custom={styles.flex}>
                <div className={`${styles._block} ${styles.flexJc} ${styles.flexAc}`}>
                    <ul className={style.section__text}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                    </ul>
                </div>
                <div className={`${styles._block} ${styles.flexJc} ${styles.flexAc}`}>
                    <ul className={style.section__text}>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Scss</li>
                        <li>Wagmi</li>
                        <li>Git</li>
                    </ul>
                </div>
            </ScrollAnimation>
        </section>
    )
}

export default Skills