import cl from "./NavItem.module.css";
import { Link, useMatch } from "react-router-dom";

const NavItem = ({ children, path, end=false, ...props }) => {
    const match = useMatch({ path: path, end: end });

    return (
        <li className={cl.item} {...props}>
            <Link
                className={[
                    cl.item__link,
                    match ? cl.item__linkActive : "",
                ].join(" ")}
                to={path}
            >
                {children}
            </Link>
        </li>
    );
};

export default NavItem;
