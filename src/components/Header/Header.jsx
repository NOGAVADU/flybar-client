import cl from "./Header.module.css";
import flyBarLogo from "../../assets/images/logo/FB_logo.jpg";
import Logo from "../UI/Logo/Logo";
import HeaderContacts from "./HeaderContacts";
import HeaderNav from "./HeaderNav";
import { useContext } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import HeaderNavBurger from "./HeaderNavBurger.jsx";

const Header = observer(() => {
    const { admin } = useContext(Context);

    const logOut = () => {
        admin.setAdmin({});
        admin.setIsAuth(false);
        localStorage.clear()
    };
    return (
        <header className={cl.header}>
            <Logo src={flyBarLogo} alt="Логотип компании, надпись FlyBar" />
            <HeaderNav />
            <HeaderNavBurger/>
            {admin.isAuth === true ? (
                <div className={cl.admin__controls}>
                    <Link to={"/adminpanel"} className={cl.admin__btn}>Админ панель</Link>
                    <button onClick={() => logOut()} className={cl.admin__btn}>Выйти</button>
                </div>
            ) : (
                <HeaderContacts />
            )}
        </header>
    );
});

export default Header;
