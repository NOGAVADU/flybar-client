import cl from "./Header.module.css";
import CallbackBtn from "../CallbackBtn/CallbackBtn.jsx";

const HeaderContacts = ({...props}) => {
    return (
        <div className={cl.contacts} {...props}>
            <CallbackBtn/>
            <address className={cl.contacts__links}>
                <a className={cl.contacts__link} href="tel:+74952207061">
                    +7 495 220 7061
                </a>
                <a className={cl.contacts__link} href="mailto:ingo@flybar.ru">
                    info@flybar.ru
                </a>
            </address>
        </div>
    );
};

export default HeaderContacts;
