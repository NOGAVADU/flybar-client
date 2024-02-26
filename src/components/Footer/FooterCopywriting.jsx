import { Link } from "react-router-dom";
import cl from "./Footer.module.css";

const FooterCopywriting = () => {
    return (
        <div className={cl.footer__copywriting}>
            <p className={cl.copywriting__text}>
                &copy;2006-2024 &laquo;FlyBar&raquo;
            </p>
            <p className={cl.copywriting__text}>
                Используя сайт, вы принимаете условия{" "}
                <Link to="/off" className={cl.copywriting__link}>
                    Публичной оферты
                </Link>{" "}
                и{" "}
                <Link to="/pol" className={cl.copywriting__link}>
                    Политики в отношении обработки персональных данных
                </Link>
            </p>
        </div>
    );
};

export default FooterCopywriting;
