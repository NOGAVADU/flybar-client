import cl from './ContactsSection.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import ParagraphTitle from "../../../components/UI/Titles/ParagraphTitle.jsx";
import {faSquareInstagram, faTelegram, faVk, faWhatsappSquare} from "@fortawesome/free-brands-svg-icons";

const ContactsSection = () => {
    return (
        <section className={cl.container}>
            <address className={cl.contacts}>
                <p className={cl.contacts__text}><FontAwesomeIcon icon={faLocationDot}/>Ул. Смоленская, 10</p>
                <a className={[cl.link, cl.contacts__text].join(' ')} href="tel:+74952207061">
                   <FontAwesomeIcon icon={faPhone}/> +7 495 220 7061
                </a>
                <a className={[cl.link, cl.contacts__text].join(' ')} href="mailto:ingo@flybar.ru">
                   <FontAwesomeIcon icon={faEnvelope}/> info@flybar.ru
                </a>
            </address>
            <div className={cl.social}>
                <ParagraphTitle>Мы в соцсетях</ParagraphTitle>
                <div className={cl.social__links}>
                    <a href={'https://t.me/+uaL58GT9TEE4OWUy'} className={cl.link} target={'__blank'}><FontAwesomeIcon
                        icon={faTelegram}/></a>
                    <a href={'https://vk.com/newflybar'} className={cl.link} target={'__blank'}><FontAwesomeIcon
                        icon={faVk}/></a>
                    <a href="https://www.instagram.com/flybar_ru?igsh=amNyaXBzdWx2aGp4&utm_source=qr"
                       className={cl.link} target={'__blank'}>
                        <FontAwesomeIcon icon={faSquareInstagram}/>
                    </a>
                    <a href={'https://wa.me/79032531944'} className={cl.link} target={'__blank'}><FontAwesomeIcon
                        icon={faWhatsappSquare}/></a>
                </div>
            </div>
        </section>
    );
};

export default ContactsSection;