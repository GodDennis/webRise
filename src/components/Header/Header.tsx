import s from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={s.header}>
            <h2 className={s.title}>SUPERGYM</h2>
            <a
                className={s.phone}
                href='tel:88005555555'>
                8-800-555-55-55
            </a>
        </header>
    );
};
