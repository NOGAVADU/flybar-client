import SectionTitle from "../../UI/Titles/SectionTitle";
import "./ServicePrice.css";
import ServicePriceCol from "./ServicePriceCol";

const ServicePrice = ({ service }) => {
    return (
        <section className="price__container">
            <SectionTitle classes={["title-margin"]}>Стоимость</SectionTitle>
            <div className="price__row">
                <ServicePriceCol service={service} type={"Мини"} index={0} />
                <ServicePriceCol
                    service={service}
                    type={"Стандарт"}
                    index={1}
                />
                <ServicePriceCol service={service} type={"Премиум"} index={2} />
            </div>
        </section>
    );
};

export default ServicePrice;
