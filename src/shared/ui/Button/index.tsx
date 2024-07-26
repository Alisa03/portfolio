
import { createElement } from "react";
import clsx from "clsx";

import { BaseButtonComponent, BaseButtonProps, IButton } from "./interface";

import s from './btn.module.scss'

export default function BaseButton<C extends BaseButtonComponent = "button">({
    component = "button",
    children,
    ...props
}: BaseButtonProps<C>) {
    return createElement(component, props, children);
}

export function Button<C extends BaseButtonComponent = "button">({
    onClick,
    className,
    radius,
    variant = 'gray',
    isActive = false,
    boxSize = 1.5,
    isLoading = false,
    children,
    ...props
}: IButton<C>) {
    return (
        <BaseButton<C>
            onClick={onClick}
            style={{ borderRadius: radius }}
            className={clsx(className, s.btn, {[s.active]: isActive})}
            {...(props as BaseButtonProps<C>)}
        >
            <span>
                {
                    isLoading ? <div className={s.main}>
                        <div className={s.loader} />
                    </div>
                        : children
                }
            </span>
        </BaseButton>
    );
};