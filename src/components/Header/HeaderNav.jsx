import NavList from '../NavBar/NavList/NavList'
import NavItem from '../NavBar/NavItem/NavItem'
import cl from './Header.module.css'

const HeaderNav = ({...props}) => {
    return (
         <nav className={cl.header__nav} {...props}>
            <NavList position={'left'}>
                <NavItem path={'/services'}>Услуги</NavItem>
                <NavItem path={'/portfolio'}>Портфолио</NavItem>
                <NavItem path={'/aboutus'}>О нас</NavItem>
                <NavItem path={'/contacts'}>Контакты</NavItem>
            </NavList>
        </nav>
    );
}

export default HeaderNav;
