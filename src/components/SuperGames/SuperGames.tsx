import s from "./SuperGames.module.scss";
import photo from "../../assets/images/promoPhoto.jpg";
import { useLayoutEffect, useState } from "react";

export const SuperGames = () => {
    const [footerElement, setPriceElement] = useState<HTMLElement | null>();
    useLayoutEffect(() => {
        const footer = document.getElementById("footer");
        setPriceElement(footer);
    });
    return (
        <article className={s.baner}>
            <div className={s.content}>
                <div className={s.promoContent}>
                    <h3 className={s.title}>SUPER GAMES</h3>
                    <div className={s.promoTimer}>
                        <div>
                            <p className={s.smallBorder}>Дата</p>
                            <div className={s.flex}>
                                <span className={s.subTitle}>7</span>
                                <span className={s.text}>Марта 2019</span>
                            </div>
                        </div>
                        <div>
                            <p className={s.border}>Время</p>
                            <p className={s.subTitle}>12:00</p>
                        </div>
                    </div>
                </div>
                <p className={s.description}>Ежегодные соревнования по CrossFit</p>
                <button
                    onClick={() => {
                        footerElement?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={s.btn}>
                    заполнить заявку
                </button>
            </div>

            <img
                className={s.photo}
                src={photo}
                alt='Фото Super games'
            />
        </article>
    );
};
