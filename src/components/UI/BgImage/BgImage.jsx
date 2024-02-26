import Image from "../Image/Image";
import Overlay from "../Overlay/Overlay";
import cl from "./BgImage.module.css";

const BgImage = ({ src }) => {
    return (
        <div className={cl.BgImage__container}>
            <Overlay />
            <Image src={src} alt="Фоновое изображение" />
        </div>
    );
};

export default BgImage;
