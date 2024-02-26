import cl from "./ServiceInfo.module.css";
import InfoContent from "../../InfoContent/InfoContent";

const ServiceInfo = ({ service }) => {
    return (
        <section className={cl.container}>
            {service.info.map((info) => (
                <InfoContent key={info.id} info={info} />
            ))}
        </section>
    );
};

export default ServiceInfo;
