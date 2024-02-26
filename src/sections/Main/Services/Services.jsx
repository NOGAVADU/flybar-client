import Container from "../../../components/UI/Container/Container";
import cl from "./Services.module.css";
import BgImage from "../../../components/UI/BgImage/BgImage";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../../../components/UI/Titles/SectionTitle.jsx";
import data from "./data.js";
import ParagraphTitle from "../../../components/UI/Titles/ParagraphTitle.jsx";

const Services = () => {
    const navigate = useNavigate();

    return (<section>
        <Container padding={true}>
            <SectionTitle>
                Наши{" "}
                <span className="title__bigOrange">топовые услуги</span>
            </SectionTitle>
            <div className={cl.card__container}>
                {data.map(card => (
                    <article key={card.title} className={cl.card}>
                        <BgImage src={card.img}/>
                        <div className={cl.card__text}>
                            <ParagraphTitle style={{display: "flex", gap: '1rem', justifyContent: 'space-between'}}>{card.title}<FontAwesomeIcon icon={card.svg}/></ParagraphTitle>
                            <p className={cl.card__body}>
                                {card.body}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
            <div className={cl.btns__container}>
                <button
                    className={cl.button}
                    onClick={() => {
                        navigate("/services");
                        window.scrollTo({
                            top: 0, left: 0,
                        });
                    }}
                >
                    <FontAwesomeIcon icon={faArrowRight}/>
                    Больше услуг
                </button>
            </div>
        </Container>
    </section>);
};

export default Services;
