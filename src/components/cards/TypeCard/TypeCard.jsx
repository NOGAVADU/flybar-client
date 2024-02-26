import SectionTitle from "../../UI/Titles/SectionTitle";
import ServiceCard from "../ServiceCard/ServiceCard";
import cl from "./TypeCard.module.css";

const TypeCard = ({ children, type }) => {
    return (
        <div className={cl.container}>
            <SectionTitle>{type.title}</SectionTitle>
            {/* <h3 className={cl.subtitle}>{type.description}</h3> */}
            <div className={cl.service__container}>
                {type.services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default TypeCard;
