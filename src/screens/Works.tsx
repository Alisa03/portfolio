import { Project } from '@/modules'
import { works } from '@/shared/const'

export const Works = () => {
    return <section id="works" className="section">
            <h3 className="section__title">Работы</h3>
            <div>
                {
                    works.map((i: IProject) => <Project key={i.id} project={i} />)
                }
            </div>
        </section>
}