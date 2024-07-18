import style from "@/styles/page.module.scss"
import projectS from './project.module.scss'

import ScrollAnimation from "../ui/ScrollAnimation";

export default function Project({ project }: any) {
    return (
        <ScrollAnimation custom={projectS.project}>
            {
                project.urlDemo ?
                    <a target="_blank" href={project.urlDemo}>
                        <div className={projectS.project__block}>
                            <img className={projectS.project__img} src={project.img} alt="" />
                        </div>
                    </a> :
                    <a href="#">
                        <div className={projectS.project__block}>
                            <img className={projectS.project__img} src={project.img} alt="" />
                        </div>
                    </a>
            }

            <div className={`${projectS.project__content}`}>
                <div className={style.flexList}>
                    {
                        project.skill.map((i: any, index: any) => <div key={index} className={projectS.teg}>{i}</div>)
                    }
                </div>
                <h4 className={projectS.project__title}>{project.name}</h4>
                <p className={`${style.section__text} ${projectS.project__text}`}>{project.info}</p>
                <div className={style.flexList}>
                    {
                        project?.urlDemo &&
                        <a className={style.btn} target="_blank" href={project.urlDemo}>Demo</a>
                    }
                    {
                        project?.urlCode &&
                        <a className={style.btn} target="_blank" href={project.urlCode}>Code</a>
                    }
                </div>
            </div>
        </ScrollAnimation>
    )
}