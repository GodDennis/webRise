import s from "./Coach.module.scss";

type Props = {
    name: string;
    src: string;
    direction: string;
    advantages: string[];
};

export const Coach = ({ name, src, direction, advantages }: Props) => {
    return (
        <article className={s.coachCard}>
            <div className={s.transparent}>
                <div className={s.transparentName}>{name}</div>
                <p className={s.direction}>{direction}</p>
                <ul className={s.advantages}>
                    {advantages.map(el => (
                        <li key={el}>{el}</li>
                    ))}
                </ul>
            </div>
            <img
                className={s.photo}
                src={src}
                alt=''
            />
            <p className={s.name}>{name}</p>
        </article>
    );
};
