import Container from "../../../components/UI/Container/Container";
import cl from "./HowWeWork.module.css";
import "../sectionMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cards from "./cards";
import BgImage from "../../../components/UI/BgImage/BgImage";
import bg from "../../../assets/images/background/footerBg.png";
import SectionTitle from "../../../components/UI/Titles/SectionTitle.jsx";
import ParagraphTitle from "../../../components/UI/Titles/ParagraphTitle.jsx";

const HowWeWork = () => {
    return (
        <section style={{ position: "relative" }}>
            <BgImage src={bg} />
            <Container padding={true} classes={[cl.container]}>
                <SectionTitle>Как мы работаем</SectionTitle>
                <div className={cl.howWe__cards}>
                    {cards.map((card) => (
                        <article className={cl.howWe__card} key={card.step}>
                            <ParagraphTitle style={{display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem"}}>
                                <FontAwesomeIcon
                                    icon={card.img}
                                    style={{ color: "var(--accent-color)" }}
                                />
                                {card.title}
                            </ParagraphTitle>
                            <ul className={cl.card__list}>
                                {card.body.map((item) => (
                                    <li key={item} className={cl.list__item}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <span className={cl.card__step}>0{card.step}</span>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default HowWeWork;
