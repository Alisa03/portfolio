import Link from 'next/link';
import clsx from 'clsx';

import s from './navbar.module.scss'

interface IProps {
    isOpen: boolean,
    setIsOpen: (args: boolean) => void
}

export const Menu = ({ isOpen, setIsOpen }: IProps) => {
    return <div className={clsx(s.fon, { [s.visible]: isOpen })}>
        <div className={clsx('list', s.content)}>
            <div className={s.flex}>
                <nav className={clsx('flex-center', s.list, s.nav)}>
                    <li><Link href="#home" className={clsx(s.link, "pale-green body2")} onClick={() => setIsOpen(false)}>Главная</Link></li>
                    <li><Link href="#about" className={clsx(s.link, "pale-green body2")} onClick={() => setIsOpen(false)}>Обо мне</Link></li>
                    <li><Link href="#works" className={clsx(s.link, "pale-green body2")} onClick={() => setIsOpen(false)}>Работы</Link></li>
                    <li><Link href="#contact" className={clsx(s.link, "pale-green body2")} onClick={() => setIsOpen(false)}>Контакты</Link></li>
                </nav>
            </div>
        </div>
    </div>
}
