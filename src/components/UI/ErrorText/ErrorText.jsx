import { Link } from "react-router-dom";
import cl from "./ErrorText.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceDizzy, faFaceFrown } from "@fortawesome/free-solid-svg-icons";

const ErrorText = () => {
    return (
        <div className={cl.container}>
            <h3 className={cl.subtitle}>Страница не найдена</h3>
            <h2 className={cl.title}>
                404 - N<FontAwesomeIcon icon={faFaceFrown} />t found
            </h2>
            <h3 className={cl.subtitle}>
                Вернуться на{" "}
                <Link to={"/"} className={cl.link}>
                    главную
                </Link>
            </h3>
        </div>
    );
};

export default ErrorText;
