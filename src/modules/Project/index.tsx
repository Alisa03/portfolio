import clsx from 'clsx';

import { Button, ScrollAnimation } from '@/shared/ui';

import s from './project.module.scss'

export const Project = ({ project }: { project: IProject }) => {
    return <ScrollAnimation custom={s.project}>
        {
            project.urlDemo ?
                <a target="_blank" href={project.urlDemo}>
                    <div className={s.project__block}>
                        <img className={s.project__img} src={project.img} alt="" />
                    </div>
                </a> :
                <a href="#">
                    <div className={s.project__block}>
                        <img className={s.project__img} src={project.img} alt="" />
                    </div>
                </a>
        }

        <div className={s.project__content}>
            <div className="flex-list">
                {
                    project.skill.map((i: any, index: any) => <div key={index} className={s.teg}>{i}</div>)
                }
            </div>
            <h4 className={s.project__title}>{project.name}</h4>
            {
                project.info &&
                <p className={clsx("section__text", s.project__text)}>{project.info}</p>
            }
            <div className="flex-list">
                {
                    project?.urlDemo &&
                    <Button component='a' target="_blank" href={project.urlDemo}>Demo</Button>
                }
                {
                    project?.urlCode &&
                    <Button component='a' target="_blank" href={project.urlCode}>Code</Button>
                }
            </div>
        </div>
    </ScrollAnimation>
}