import s from "./FeedbackCard.module.scss";

type Props = {
    src: string;
    name: string;
    description: string;
};

export const FeedbackCard = ({ src, description, name }: Props) => {
    return (
        <article className={s.card}>
            <img
                className={s.photo}
                src={src}
                alt='Фото пользователя'
            />
            <div className={s.cardInfo}>
                <h4 className={s.name}>{name}</h4>
                <p className={s.description}>{description}</p>
            </div>
        </article>
    );
};
