import { Link } from "react-router-dom";
import photo from "../../assets/images/sale.jpg";
import s from "./Sale.module.scss";

export const Sale = () => {
    return (
        <section>
            <div className={s.wrapper}>
                <h2 className={s.title}>Акции</h2>
                <div className={s.content}>
                    <article className={s.flexContainer}>
                        <div className={s.background}>
                            <div className={s.mediumTxt}>Год</div>
                            <div className={s.bigTxt}>4999</div>
                            <p className={s.smallTxt}>Безлимитный абонемент в тренажерный зал</p>
                            <Link
                                className={s.link}
                                to={"#"}>
                                ПОДРОБНЕЕ
                            </Link>
                        </div>
                        <img
                            className={s.photo}
                            src={photo}
                            alt='Просто фото'
                        />
                    </article>
                    <div className={s.flexCards}>
                        <article className={s.card}>
                            <h3 className={s.cardName}>Месяц бесплатно</h3>
                            <p className={s.cardDescription}>
                                Приведи друга, получи абонемент в подарок
                            </p>
                            <Link
                                to={"#"}
                                className={s.cardLink}>
                                подробнее
                            </Link>
                        </article>
                        <article className={s.card}>
                            <h3 className={s.cardName}>Скидка 20%</h3>
                            <p className={s.cardDescription}>Корпоративный фитнес с командой</p>
                            <Link
                                to={"#"}
                                className={s.cardLink}>
                                подробнее
                            </Link>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};
