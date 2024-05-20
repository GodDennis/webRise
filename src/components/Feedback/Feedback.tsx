import s from "./Feedback.module.scss";
import photo from "../../assets/images/Ellipse.png";
import { FeedbackCard } from "../FeedbackCard/FeedbackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import { Prev } from "../../assets/Icons/Prev";
import { Next } from "../../assets/Icons/Next";
import clsx from "clsx";
// import "swiper/css/navigation";

export const Feedback = () => {
    const slides = data.map(el => (
        <SwiperSlide
            key={el.id}
            className={s.slide}>
            <FeedbackCard
                description={el.description}
                name={el.name}
                src={el.src}
            />
        </SwiperSlide>
    ));
    return (
        <section className={s.feedback}>
            <h2 className={s.title}>Отзывы</h2>
            <div className={s.settings}>
                <div className={s.swiperContainer}>
                    <Swiper
                        className={s.swiper}
                        modules={[Navigation, A11y]}
                        navigation={{
                            nextEl: `.${s.next}`,
                            prevEl: `.${s.prev}`,
                            enabled: true,
                        }}
                        slidesPerView={1}
                        spaceBetween={10}>
                        {slides}
                    </Swiper>
                    <button className={clsx(s.navigationBtn, s.prev)}>
                        <Prev />
                    </button>
                    <button className={clsx(s.navigationBtn, s.next)}>
                        <Next />
                    </button>
                </div>
            </div>
        </section>
    );
};

const data = [
    {
        name: "Анна Орлова",
        description:
            "«Хожу в SuperClub уже больше года. Нравится, что в клубе всегда чисто, тренажеры обновляют, персонал дружелюбный. Зал просторный, даже в вечернее время нет очередей»",
        src: photo,
        id: 21,
    },
    {
        name: "Анна Орлова",
        description:
            "«Хожу в SuperClub уже больше года. Нравится, что в клубе всегда чисто, тренажеры обновляют, персонал дружелюбный. Зал просторный, даже в вечернее время нет очередей»",
        src: photo,
        id: 22,
    },
    {
        name: "Анна Орлова",
        description:
            "«Хожу в SuperClub уже больше года. Нравится, что в клубе всегда чисто, тренажеры обновляют, персонал дружелюбный. Зал просторный, даже в вечернее время нет очередей»",
        src: photo,
        id: 23,
    },
];
