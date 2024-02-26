import Container from "../../../components/UI/Container/Container";
import cl from "./Portfolio.module.css";
import "../sectionMain.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/images/main/portfolio/coctails2.jpg";
import img2 from "../../../assets/images/main/portfolio/coffee1.jpg";
import img3 from "../../../assets/images/main/portfolio/drinks1.jpg";
import img4 from "../../../assets/images/main/portfolio/coctails1.jpg";
import img5 from "../../../assets/images/main/portfolio/tower1.jpg";
import Image from "../../../components/UI/Image/Image";
import BgImage from "../../../components/UI/BgImage/BgImage";

const Portfolio = () => {
    const navigate = useNavigate();

    return (
        <section style={{position: "relative"}}>
            <BgImage src={img1}/>
            <Container
                padding={true}
                classes={[cl.portfolio__container]}
            >
                <h2 className="main__title">Портфолио</h2>
                <div className={cl.portfolio__imgContainer}>
                    <Image src={img1} classes={[cl.img1]} />
                    <Image src={img2} classes={[cl.img2]} />
                    <Image src={img3} classes={[cl.img3]} />
                    <Image src={img4} classes={[cl.img4]} />
                    <Image src={img5} classes={[cl.img5]} />
                </div>
                <button
                    className={cl.portfolio__btn}
                    onClick={() => {
                        navigate("/portfolio");
                        window.scrollTo({
                            top: 0,
                            left: 0,
                        });
                    }}
                >
                    Смотреть еще
                </button>
            </Container>
        </section>
    );
};

export default Portfolio;
