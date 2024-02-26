import { useRef, useState } from "react";
import cl from "./Accardion.module.css";

const Accardion = ({ title, children }) => {
    const [active, setActive] = useState(false);

    const contentEl = useRef();

    return (
        <article className={cl.accardion__container}>
            <p
                onClick={() => setActive(!active)}
                className={
                    active
                        ? [cl.accardion__title, cl.active].join(" ")
                        : cl.accardion__title
                }
            >
                <span className={cl.accardion__decor}>&gt;</span>
                {title}
            </p>
            <div
                ref={contentEl}
                className={cl.accardion__body}
                style={
                    active
                        ? { height: contentEl.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                {children}
            </div>
        </article>
    );
};

export default Accardion;
