import style from "@/styles/page.module.scss"
import footer from './footer.module.scss'

import GitSvg from "../ui/GitHub"
import TelegramSvg from "../ui/telegram"
import VkSvg from "../ui/Vk"

const Footer = () => {
    return (
        <footer id="contact" className={footer.footer}>
            <div className={style.container}>
                <div className={footer.column}>
                    <div className={`${style.grid__center} ${style.wrapper_flex} ${style.flexAc} ${footer._flex}`}>
                        <h3 className={style.logo}>Alice</h3>

                        <div className={style.flexList}>
                            <a href="https://t.me/hedgehog_witch" target="_blank">
                                <TelegramSvg classN={style.social} />
                            </a>

                            <a href="https://github.com/Alisa03" target="_blank">
                                <GitSvg classN={style.social} />
                            </a>

                            <a href="https://vk.com/mila_fennec" target="_blank">
                                <VkSvg classN={style.social} />
                            </a>

                        </div>

                        <a className={style.section__text}
                            href="mailto:alisa033306@gmail.com">
                            alisa033306@gmail.com
                        </a>
                    </div>

                    <div className={style.section__text} style={{ textAlign: "center" }}>
                        <p className={style.section__text}>©Designed & builte By Alice</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer