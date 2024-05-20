import s from "./ContactsBar.module.scss";

export const ContactsBar = () => {
    return (
        <ul className={s.contacts}>
            <li>
                <a
                    className={s.social}
                    href='#'>
                    FB
                </a>
            </li>
            <li>
                <a
                    className={s.social}
                    href='#'>
                    VK
                </a>
            </li>
            <li>
                <a
                    className={s.social}
                    href='#'>
                    IG
                </a>
            </li>
        </ul>
    );
};
