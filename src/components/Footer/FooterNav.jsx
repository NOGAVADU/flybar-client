import cl from "./Footer.module.css";
import { Link } from "react-router-dom";

const FooterNav = () => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <ul className={cl.footer__nav}>
            <li className={cl.footer__navItem}>
                <Link
                    to={"/services"}
                    className={cl.footer__navLink}
                    onClick={scrollTop}
                >
                    Услуги
                </Link>
            </li>
            <li className={cl.footer__navItem}>
                <Link
                    to={"/portfolio"}
                    className={cl.footer__navLink}
                    onClick={scrollTop}
                >
                    Портфолио
                </Link>
            </li>
            <li className={cl.footer__navItem}>
                <Link
                    to={"/aboutus"}
                    className={cl.footer__navLink}
                    onClick={scrollTop}
                >
                    О нас
                </Link>
            </li>
            <li className={cl.footer__navItem}>
                <Link
                    to={"/contacts"}
                    className={cl.footer__navLink}
                    onClick={scrollTop}
                >
                    Контакты
                </Link>
            </li>
        </ul>
    );
};

export default FooterNav;
