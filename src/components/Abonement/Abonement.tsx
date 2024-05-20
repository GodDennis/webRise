import clsx from "clsx";
import { Rub } from "../../assets/Icons/Rub";
import s from "./Abonement.module.scss";

type Props = {
    name: string;
    description: string;
    price: string;
    active?: boolean;
    onOpen: () => void;
};

export const Abonement = (props: Props) => {
    const { name, description, price, active, onOpen } = props;
    return (
        <article className={clsx(s.card, active && s.active)}>
            <h3 className={s.title}>{name}</h3>
            <div className={s.description}>{description}</div>
            <div className={s.hiddenPrice}>{price}</div>
            <div className={s.price}>
                {price + " "}
                <Rub />
            </div>

            <button
                onClick={onOpen}
                className={clsx(s.btn, active && s.activeBtn)}>
                Купить абонемент
            </button>
        </article>
    );
};
