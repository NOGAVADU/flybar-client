import React from "react";
import cl from "./Image.module.css";

const Image = ({ src, classes=[], alt = "Фотография в цвете", ...props }) => {
    return (
        <img
            className={[cl.image, ...classes].join(' ')}
            src={src}
            alt={alt}
            {...props}
            loading="lazy"
        />
    );
};

export default Image;
