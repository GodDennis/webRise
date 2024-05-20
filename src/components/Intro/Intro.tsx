import s from "./Intro.module.scss";
import SuperGymBro from "../../assets/images/Rectangle.jpg";
import { Header } from "../Header/Header";
import { ContactsBar } from "../ContactsBar/ContactsBar";
import { useLayoutEffect, useState } from "react";

export const Intro = () => {
    const [priceElement, setPriceElement] = useState<HTMLElement | null>();
    useLayoutEffect(() => {
        const price = document.getElementById("price");
        setPriceElement(price);
    });

    return (
        <section className={s.intro}>
            <div className={s.wrapper}>
                <Header />
                <div className={s.content}>
                    <div className={s.flexContainer}>
                        <div>
                            <p className={s.text}>Тренажёрный зал Групповые занятия Кардио-зона </p>
                            <h1 className={s.title}>
                                <span className={s.smallWord}>Омск </span>
                                ФИТНЕС ЦЕНТР
                            </h1>
                        </div>

                        <button
                            className={s.btn}
                            onClick={() => {
                                priceElement?.scrollIntoView({ behavior: "smooth" });
                            }}>
                            Купить абонемент
                        </button>
                    </div>
                    <div>
                        <img
                            className={s.image}
                            src={SuperGymBro}
                            alt='Наши тренера как суперМены'
                        />
                    </div>
                    <ContactsBar />
                </div>
            </div>
        </section>
    );
};
