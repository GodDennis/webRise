import { SuperGames } from "../SuperGames/SuperGames";
import coach1 from "../../assets/images/coach1.jpg";
import coach2 from "../../assets/images/coach2.jpg";
import coach3 from "../../assets/images/coach3.jpg";
import coach4 from "../../assets/images/coach4.jpg";
import { Coach } from "../Coach/Coach";

import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import s from "./Coaches.module.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import { Prev } from "../../assets/Icons/Prev";
import clsx from "clsx";
import { Next } from "../../assets/Icons/Next";

export const Coaches = () => {
    const coaches = data.map(el => (
        <SwiperSlide key={el.id}>
            <Coach
                advantages={el.advantages}
                name={el.name}
                direction={el.direction}
                src={el.src}
            />
        </SwiperSlide>
    ));
    return (
        <section className={s.trainingInfo}>
            <div className={s.wrapper}>
                <SuperGames />
                <h2 className={s.title}>Тренеры</h2>
                <div className={s.coaches}>
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                                loop: true,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1366: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}
                        navigation={{
                            nextEl: `.${s.next}`,
                            prevEl: `.${s.prev}`,
                            enabled: true,
                        }}
                        modules={[Navigation, A11y]}>
                        {coaches}
                    </Swiper>
                    <button
                        key={"prev"}
                        className={clsx(s.navigationBtn, s.prev)}>
                        <Prev />
                    </button>
                    <button
                        key={"next"}
                        className={clsx(s.navigationBtn, s.next)}>
                        <Next />
                    </button>
                </div>
            </div>
        </section>
    );
};

const data = [
    {
        name: "Анна Павлова",
        src: coach1,
        direction: "CrossFit",
        advantages: [
            "Certified Level 3 Trainer",
            "Победитель чемпионата России по CrossFit",
            "Опыт — 6 лет",
        ],
        id: "10",
    },
    {
        name: "Алексей Лавров",
        src: coach2,
        direction: "CrossFit",
        advantages: [
            "Certified Level 3 Trainer",
            "Победитель чемпионата России по CrossFit",
            "Опыт — 6 лет",
        ],
        id: "11",
    },
    {
        name: "Александр Пашков",
        src: coach3,
        direction: "CrossFit",
        advantages: [
            "Certified Level 3 Trainer",
            "Победитель чемпионата России по CrossFit",
            "Опыт — 6 лет",
        ],
        id: "12",
    },
    {
        name: "Мария Кетова",
        src: coach4,
        direction: "CrossFit",
        advantages: [
            "Certified Level 3 Trainer",
            "Победитель чемпионата России по CrossFit",
            "Опыт — 6 лет",
        ],
        id: "13",
    },
    {
        name: "Мария Кетова",
        src: coach4,
        direction: "CrossFit",
        advantages: [
            "Certified Level 3 Trainer",
            "Победитель чемпионата России по CrossFit",
            "Опыт — 6 лет",
        ],
        id: "14",
    },
    {
        name: "Мария Кетова",
        src: coach4,
        direction: "CrossFit",
        advantages: [
            "Certified Level 3 Trainer",
            "Победитель чемпионата России по CrossFit",
            "Опыт — 6 лет",
        ],
        id: "15",
    },
    {
        name: "Мария Кетова",
        src: coach4,
        direction: "CrossFit",
        advantages: [
            "Certified Level 3 Trainer",
            "Победитель чемпионата России по CrossFit",
            "Опыт — 6 лет",
        ],
        id: "16",
    },
];
