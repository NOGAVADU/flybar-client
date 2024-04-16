import Image from "../Image/Image";
import Overlay from "../Overlay/Overlay";
import cl from "./BgImage.module.css";

const BgImage = ({ src, saturation }) => {
    return (
        <div className={cl.BgImage__container}>
            <Overlay saturation={saturation}/>
            <Image src={src} alt="Фоновое изображение" />
        </div>
    );
};

export default BgImage;
