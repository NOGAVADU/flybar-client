import cl from "./CardsContainer.module.css";
import SectionTitle from "../UI/Titles/SectionTitle";

const CardsContainer = ({ children, title }) => {
    return (
        <section className={cl.cards__section}>
            <SectionTitle>{title}</SectionTitle>
            <div className={cl.cards__container}>{children}</div>
        </section>
    );
};

export default CardsContainer;
