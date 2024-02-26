import cl from './Header.module.css'
import useClickOutside from "../../hooks/useClickOutside.jsx";
import NavList from "../NavBar/NavList/NavList.jsx";
import NavItem from "../NavBar/NavItem/NavItem.jsx";
import Logo from "../UI/Logo/Logo.jsx";
import flyBarLogo from "../../assets/images/logo/FB_logo.jpg";
import CallbackBtn from "../CallbackBtn/CallbackBtn.jsx";
import FooterContacts from "../Footer/FooterContacts.jsx";

const HeaderNavBurger = () => {
    const {ref, isShow, setIsShow} = useClickOutside(false)

    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
        setIsShow(false);
    }

    return (
        <div ref={ref} className={cl.header__burger}>
            <div className={isShow ? [cl.burger__button, cl.active].join(' ') : cl.burger__button}
                 onClick={() => setIsShow(!isShow)}>
                <span className={cl.button__bar}></span>
                <span className={cl.button__bar}></span>
                <span className={cl.button__bar}></span>
            </div>
            <div className={isShow ? [cl.burger__popup, cl.active].join(' ') : cl.burger__popup}>
                <div className={cl.popup__logoContainer}>
                    <Logo src={flyBarLogo} onClick={handleLinkClick}/>
                </div>
                <nav className={cl.popup__nav}>
                    <NavList vertical={true} position={'left'}>
                        <NavItem path={'/'} onClick={handleLinkClick} end={true}>Главная</NavItem>
                        <NavItem path={'/services'} onClick={handleLinkClick}>Услуги</NavItem>
                        <NavItem path={'/portfolio'} onClick={handleLinkClick}>Портфолио</NavItem>
                        <NavItem path={'/aboutus'} onClick={handleLinkClick}>О нас</NavItem>
                        <NavItem path={'/contacts'} onClick={handleLinkClick}>Контакты</NavItem>
                    </NavList>
                </nav>
                <CallbackBtn style={{alignSelf: "center", padding: '2rem 0'}}/>
                <FooterContacts style={{marginTop: "auto", alignSelf: "center"}}/>
            </div>
        </div>
    );
};

export default HeaderNavBurger;