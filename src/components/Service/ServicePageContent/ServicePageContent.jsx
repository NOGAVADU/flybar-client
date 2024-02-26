import cl from "./ServicePageContent.module.css";
import ServiceInfo from "../ServiceInfo/ServiceInfo";
import Image from "../../UI/Image/Image";
import PageTitle from "../../UI/Titles/PageTitle.jsx";

const ServicePageContent = ({service, title}) => {
    return (
        <div className={cl.container}>
            <article>
                <PageTitle>{title}</PageTitle>
                <ServiceInfo service={service}/>
            </article>
            <Image src={import.meta.env.VITE_API_URL + service.img} classes={[cl.image]}/>
        </div>
    );
};

export default ServicePageContent;
