import clsx from "clsx";
import s from "./Advantagies.module.scss";

export const Advantagies = () => {
    return (
        <section className={s.advantagies}>
            <div className={s.wrapper}>
                <h2 className={s.title}>Наши преимущества</h2>
                <article className={s.gridAdvanagies}>
                    <div className={clsx(s.flex, s.item1)}>
                        <div className={s.numbers}>
                            <div className={s.gradientText}>900</div>
                            <div className={s.blueTxt}>кв/м</div>
                        </div>
                        <div>
                            <h3 className={s.subtitle}>Площадь</h3>
                            <p className={s.description}>Занимайтесь без очередей и толпучки</p>
                        </div>
                    </div>
                    <div className={s.item3}>
                        <div className={s.subTitleCard}>100</div>
                        <div className={s.subTxt}>Тренажеров</div>
                        <p className={s.info}>Современные тренажеры на все группы мышц</p>
                    </div>
                    <div className={clsx(s.flex, s.item2)}>
                        <div className={s.numbers}>
                            <div className={s.gradientText}>70</div>
                            <div className={s.blueTxt}>машин</div>
                        </div>
                        <div>
                            <h3 className={s.subtitle}>Собственная парковка</h3>
                            <p className={s.description}>
                                Вы всегда найдете место для своей машины на нашей парковке
                            </p>
                        </div>
                    </div>
                    <div className={clsx(s.flex, s.item4)}>
                        <div className={s.numbers}>
                            <div className={s.gradientText}>350</div>
                            <div className={s.blueTxt}>мест</div>
                        </div>
                        <div>
                            <h3 className={s.subtitle}>Комфорт</h3>
                            <p className={s.description}>
                                Просторные раздевалки, душевые, фен, Wi-Fi, кулеры
                            </p>
                        </div>
                    </div>
                    <div className={clsx(s.flex, s.item5)}>
                        <div className={s.numbers}>
                            <div className={s.gradientText}>5+</div>
                            <div className={s.blueTxt}>лет</div>
                        </div>
                        <div>
                            <h3 className={s.subtitle}>Тренерский опыт</h3>
                            <p className={s.description}>
                                Добивайтесь своих целей быстрее с профессиональным тренером
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};
