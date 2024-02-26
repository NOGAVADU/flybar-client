import Image from "../Image/Image";
import cl from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = ({ toTop = false, ...props }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <div className={cl.logo__container} title="Главная страница">
            <Link
                to="/"
                className={cl.logo__link}
                onClick={toTop ? scrollToTop : ""}
            >
                <Image className={cl.logo} {...props} />
            </Link>
        </div>
    );
};

export default Logo;
