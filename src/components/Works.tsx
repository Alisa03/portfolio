import { works } from '@/app/data'

import style from '@/styles/page.module.scss'

import Project from './Project'

const Works = () => {

    return (
        <section id="works" className={style.section}>
            <h3 className={style.section__title}>Работы</h3>
            <div>
                {
                    works.map((i: any) => <Project key={i.id} project={i} />)
                }
            </div>
        </section>
    )
}

export default Works