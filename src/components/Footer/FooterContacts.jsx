import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cl from "./Footer.module.css";
import {
    faTelegram,
    faVk,
    faWhatsapp,
    faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

const FooterContacts = (props) => {
    return (
        <div className={cl.footer__contacts} {...props}>
            <address className={cl.contacts__links}>
                <a className={cl.contacts__link} href="tel:+74952207061">
                    +7 495 220 7061
                </a>
                <a className={cl.contacts__link} href="mailto:ingo@flybar.ru">
                    info@flybar.ru
                </a>
            </address>
            <div className={cl.contacts__social}>
                <a href="https://t.me/+uaL58GT9TEE4OWUy" className={cl.contacts__socialLink} target={'__blank'}>
                    <FontAwesomeIcon icon={faTelegram} />
                </a>
                <a href="https://vk.com/newflybar" className={cl.contacts__socialLink} target={'__blank'}>
                    <FontAwesomeIcon icon={faVk} />
                </a>
                <a href="https://wa.me/79032531944" className={cl.contacts__socialLink} target={'__blank'}>
                    <FontAwesomeIcon icon={faWhatsappSquare} />
                </a>
            </div>
        </div>
    );
};

export default FooterContacts;
