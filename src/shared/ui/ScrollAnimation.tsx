import { useEffect, useRef, useState } from "react";

export const ScrollAnimation = ({ children, custom }: any) => {
    const boxes: any = useRef(null);
    const [visible, setVisible] = useState(false)

    const Scroll = () => {
        const boxTop = boxes.current && boxes.current.getBoundingClientRect().top - 150

        const triggerBottom = window.innerHeight / 5 * 4

        if (boxTop < triggerBottom) setVisible(true)
    }

    useEffect(() => {
        (typeof window !== "undefined") && window.addEventListener('scroll', Scroll)
    }, [])

    return <div ref={boxes} onScroll={Scroll} className={`${visible ? "box show" : "box"} ${custom}`}>
        {children}
    </div>
}