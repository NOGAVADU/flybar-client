import cl from './AboutUsNumbers.module.css'
import SectionTitle from "../../../components/UI/Titles/SectionTitle.jsx";
import data from './numbersData.js'
import ParagraphTitle from "../../../components/UI/Titles/ParagraphTitle.jsx";
import Container from "../../../components/UI/Container/Container.jsx";

const AboutUsNumbers = () => {
    return (
        <section >
            <Container className={cl.numbers__section}>
                <h2 className={cl.section__title}>О нас в цифрах</h2>
                <div className={cl.numbers__container}>
                    {data.map((col) =>
                        <article className={cl.numbers__col} key={col.title}>
                            <h3 className={cl.col__title}>{col.title}</h3>
                            <p className={cl.col__body}>{col.body}</p>
                        </article>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default AboutUsNumbers;