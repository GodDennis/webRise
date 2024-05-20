import clsx from "clsx";
import { Abonement } from "../Abonement/Abonement";
import s from "./Price.module.scss";
import { useSearchParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import { MouseEvent, useRef, useState } from "react";

export const Price = () => {
    const button1 = useRef<HTMLButtonElement | null>(null);
    const button2 = useRef<HTMLButtonElement | null>(null);
    const button3 = useRef<HTMLButtonElement | null>(null);

    const [active, setActive] = useState<number>(1);

    const [searchParams, setSearchParams] = useSearchParams();

    const onClose = () => {
        searchParams.delete("modal");
        setSearchParams(searchParams);
    };

    const onOpen = () => {
        searchParams.set("modal", "true");
        setSearchParams(searchParams);
    };

    const addStyle = (e: MouseEvent<HTMLButtonElement>) => {
        [button1, button2, button3].map(el => {
            el.current?.classList.remove(s.active);
        });
        e.currentTarget.classList.add(s.active);
    };

    const isOpen = searchParams.get("modal") === "true";

    const res = data.map(el => {
        if (active === 1) {
            return (
                <Abonement
                    name={el.name}
                    description={el.description}
                    price={el.price}
                    key={el.id}
                    onOpen={onOpen}
                />
            );
        }
        if (active === 2) {
            return (
                <Abonement
                    name={el.name}
                    description={el.description}
                    price={el.price2}
                    key={el.id}
                    onOpen={onOpen}
                />
            );
        }
        if (active === 3) {
            return (
                <Abonement
                    name={el.name}
                    description={el.description}
                    price={el.price3}
                    key={el.id}
                    onOpen={onOpen}
                />
            );
        }
    });
    return (
        <section
            id='price'
            className={s.price}>
            <div className={s.wrapper}>
                <picture className={s.absolute}>
                    <source
                        media='(min-width: 1366px)'
                        srcSet='unknown.png'
                    />
                    <source
                        media='(min-width: 768px)'
                        srcSet='unknown1.png'
                    />
                </picture>

                <img
                    className={s.absolute}
                    src='unknown1.png'
                    srcSet='
                            unknown.png 1366w,
                            unknown1.png 768w
                        '
                    alt='Фон'
                />
                <h2 className={s.title}>Абонементы</h2>
                <ul className={s.flexContainer}>
                    <li>
                        <button
                            ref={button1}
                            onClick={e => {
                                setActive(1), addStyle(e);
                            }}
                            className={clsx(s.item, s.active)}>
                            1 месяц
                        </button>
                    </li>
                    <li>
                        <button
                            ref={button2}
                            onClick={e => {
                                setActive(2), addStyle(e);
                            }}
                            className={s.item}>
                            6 месяцев
                        </button>
                    </li>
                    <li>
                        <button
                            ref={button3}
                            onClick={e => {
                                setActive(3), addStyle(e);
                            }}
                            className={s.item}>
                            12 месяцев
                        </button>
                    </li>
                </ul>
                <div className={s.CardsFlex}>{res}</div>
            </div>
            <Modal
                isOpened={isOpen}
                onClose={onClose}
            />
        </section>
    );
};

const data = [
    {
        name: "С тренером",
        description: "12 занятий",
        price: "5000",
        price2: "6000",
        price3: "7000",
        id: 1,
    },
    {
        name: "Дневной",
        description: "с 8:00 до 17:00 ",
        price: "1700",
        price2: "2700",
        price3: "3700",
        id: 2,
    },
    {
        name: "Полный день",
        description: "с 8:00 до 22:00 ",
        price: "2700",
        price2: "3700",
        price3: "4700",
        id: 3,
    },
];
