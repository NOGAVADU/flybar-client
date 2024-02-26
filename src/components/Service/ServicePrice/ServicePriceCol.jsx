import BgImage from "../../UI/BgImage/BgImage";
import priceBg from "../../../assets/images/background/priceBg.png";
import ParagraphTitle from "../../UI/Titles/ParagraphTitle";
import "./ServicePrice.css";

const ServicePriceCol = ({ service, type, index }) => {
    return (
        <>
            {service.price[index] && (
                <div className="price__col_container">
                    <BgImage src={priceBg} />
                    <div className="price__col">
                        <ParagraphTitle>
                            {service.name} &laquo;{type}&raquo;
                        </ParagraphTitle>
                        <p>
                            <span className="col__amount">
                                {service.price[index].amount}
                            </span>{" "}
                            {service.price[index].type}
                        </p>
                        <span className="col__price">
                            {service.price[index].price}₽
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServicePriceCol;
