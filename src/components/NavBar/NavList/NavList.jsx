import React from "react";
import cl from "./NavList.module.css";

const NavList = ({ children, vertical, position }) => {
    const listPos =
        position === "left"
            ? cl.left
            : position === "right"
            ? cl.right
            : cl.center;
    return (
        <ul className={[cl.list, vertical ? cl.column : "", listPos].join(" ")}>
            {children}
        </ul>
    );
};

export default NavList;
