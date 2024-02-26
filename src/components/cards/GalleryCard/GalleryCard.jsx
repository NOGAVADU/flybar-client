import { useNavigate } from "react-router-dom";
import Image from "../../UI/Image/Image";
import cl from "./GalleryCard.module.css";
import Overlay from '../../UI/Overlay/Overlay'

const GalleryCard = ({ card, navigateTo }) => {
    const navigate = useNavigate();
    return (
        <div className={cl.card} onClick={() => navigate(navigateTo)}>
            <h3 className={cl.card__title}>{card.name}</h3>
            <div className={cl.card__imgContainer}>
                <Overlay/>
                <Image src={import.meta.env.VITE_API_URL + card.img} alt="" />
            </div>
        </div>
    );
};

export default GalleryCard;
