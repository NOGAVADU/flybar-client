import Accardion from "../../../components/UI/Accardion/Accardion";
import BgImage from "../../../components/UI/BgImage/BgImage";
import Container from "../../../components/UI/Container/Container";
import cl from "./Answers.module.css";
import bgImg from "../../../assets/images/background/footerBg.png";
import SectionTitle from "../../../components/UI/Titles/SectionTitle.jsx";

const Answers = () => {
    return (
        <section style={{ position: "relative" }}>
            <BgImage src={bgImg}/>
            <Container padding={true}>
                <SectionTitle style={{color: "var(--accent-color)", marginBottom: '1rem'}}>
                    Ответы на часто задаваемые вопросы
                </SectionTitle>
                <div className={cl.accardion__container}>
                    <Accardion
                        title={
                            "Cколько коктейлей мне нужно, чтобы хватило на все мероприятие?"
                        }
                    >
                        <p>
                            Формула простая - примерно 1 коктейль на человека в
                            час + дополнительно 20% от посчитанного, чтобы
                            подстраховаться.
                        </p>
                    </Accardion>
                    <Accardion
                        title={"Можно ли заказать просто готовые коктейли?"}
                    >
                        <p>Конечно! Звоните, обсудим.</p>
                    </Accardion>
                    <Accardion title={"Куда можно попросить вас приехать?"}>
                        <p>
                            Абсолютно в любое место. Мы приезжаем в офисы,
                            загородные дома, открытые площадки в офисе и на
                            природе, расстояние не имеет значения, нам только
                            нужен небольшой кусочек пространства под бар :)
                        </p>
                    </Accardion>
                    <Accardion
                        title={
                            "Если мероприятие затянется, можно попросить вас остаться подольше?"
                        }
                    >
                        <p>
                            Да, просто мы дополнительно посчитаем дополнительные
                            часа и коктейли
                        </p>
                    </Accardion>
                </div>
            </Container>
        </section>
    );
};

export default Answers;
