import BgImage from "../UI/BgImage/BgImage";
import cl from "./Footer.module.css";
import footerBg from "../../assets/images/background/footerBg.png";
import FooterNav from "./FooterNav";
import Logo from "../UI/Logo/Logo";
import flyBarLogo from "../../assets/images/logo/FB_logo.jpg";
import FooterCopywriting from "./FooterCopywriting";
import FooterContacts from "./FooterContacts";

const Footer = () => {
    return (
        <footer className={cl.footer} style={{ position: "relative" }}>
            <BgImage src={footerBg} />
            <div className={cl.footer__body}>
                <div className={cl.footer__logoContainer}>
                    <Logo
                        src={flyBarLogo}
                        alt="Логотип компании, надпись FlyBar"
                        toTop={true}
                    />
                    <span className={cl.footer__logoText}>
                        Первый Профессиональный Выездной бар
                    </span>
                </div>
                <FooterNav />
                <FooterCopywriting />
                <FooterContacts />
            </div>
        </footer>
    );
};

export default Footer;
