import cl from "./ServiceCard.module.css";
import { SERVICES_ROUTE } from "../../../utils/consts";
import { useNavigate } from "react-router-dom";
import BgImage from "../../UI/BgImage/BgImage";

const ServiceCard = ({ service }) => {
    const navigate = useNavigate();

    return (
        <div
            className={cl.container}
            onClick={() => navigate(SERVICES_ROUTE + "/" + service.id)}
        >
            <div className={cl.content}>
                <h4 className={cl.title}>{service.name}</h4>
                <p className={cl.body}>{service.service_body}</p>
            </div>
            <BgImage src={import.meta.env.VITE_API_URL + service.img} />
        </div>
    );
};

export default ServiceCard;
