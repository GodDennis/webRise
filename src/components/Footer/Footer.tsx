import { Link } from "react-router-dom";
import s from "./Footer.module.scss";
import { VK } from "../../assets/Icons/VK";
import { IG } from "../../assets/Icons/IG";
import { FB } from "../../assets/Icons/FB";

export const Footer = () => {
    return (
        <footer
            id='footer'
            className={s.footer}>
            <div className={s.wrapper}>
                <div className={s.mainInfo}>
                    <a
                        href='#'
                        className={s.logo}>
                        SUPERGYM
                    </a>
                    <nav>
                        <ul className={s.navbar}>
                            <li className={s.navItem}>
                                <Link to={"#"}>Услуги</Link>
                            </li>
                            <li className={s.navItem}>
                                <Link to={"#"}>Абонементы</Link>
                            </li>
                            <li className={s.navItem}>
                                <Link to={"#"}>Акции</Link>
                            </li>
                            <li className={s.navItem}>
                                <Link to={"#"}>Тренеры</Link>
                            </li>
                            <li className={s.navItem}>
                                <Link to={"#"}>Расписание</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <ul className={s.social}>
                    <li>
                        <a href='#'>
                            <VK />
                        </a>
                    </li>
                    <li>
                        {" "}
                        <a href='#'>
                            <IG />
                        </a>
                    </li>
                    <li>
                        {" "}
                        <a href='#'>
                            <FB />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
