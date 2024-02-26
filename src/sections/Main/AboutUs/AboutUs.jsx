import cl from "./AboutUs.module.css";
import "../sectionMain.css";
import Image from "../../../components/UI/Image/Image";
import aboutUsImg from "../../../assets/images/main/bar.jpg";
import Container from "../../../components/UI/Container/Container";

const AboutUs = () => {
    return (
        <section>
            <Container classes={[cl.aboutUs__container]}>
                <article className={cl.aboutUs__text}>
                    <h2 className={"main__title"}>
                        <span className={"title__bigOrange"}>Первый</span>{" "}
                        профессиональный выездной{" "}
                        <span className={"title__bigOrange"}>бар</span>
                    </h2>
                    <p className="main__text">
                        FLYBAR - компания, специализирующаяся на предоставлении выездных баров для частных и
                        корпоративных мероприятий. Наша команда опытных барменов уверенно владеет искусством
                        коктейльного дела, чтобы создать незабываемые впечатления на вашем мероприятии.
                    </p>
                    <p className="main__text">
                        С нами у вас есть возможность превратить ваше мероприятие в стильную и уютную атмосферу бара,
                        где каждый гость будет наслаждаться великолепными напитками. Мы тщательно подходим к подбору
                        ингредиентов и рецептов, чтобы удовлетворить вкусы каждого гостя и подчеркнуть уникальность
                        вашего события.
                    </p>
                    <p className="main__text">
                        Наша задача - создать беззаботное и приятное время для вас и ваших гостей, а также помочь
                        воплотить в жизнь ваши идеи и ожидания. Доверьте нам организацию барного сервиса на вашем
                        мероприятии, и вы убедитесь, что FLYBAR - это именно то, что вам нужно для успешного и
                        запоминающегося события.
                    </p>
                </article>
                <div className={cl.aboutUs__imgContainer}>
                    <Image
                        src={aboutUsImg}
                        alt="Нарисованное сюреалистичное изображенние барной стойки в серо-оранжевых тонах, отражающие наш творческий подход к своему делу"
                    />
                </div>
            </Container>
        </section>
    );
};

export default AboutUs;
