import Container from "../components/UI/Container/Container";
import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import {fetchPortfolioTypes} from "../http/portfolioApi";
import CardsContainer from "../components/PortfolioCardsContainer/CardsContainer";
import GalleryCard from "../components/cards/GalleryCard/GalleryCard";
import {PORTFOLIO_ROUTE} from "../utils/consts";
import ClientsSlider from "../sections/ClientsSlider/ClientsSlider.jsx";
import Loader from "../components/Loader/Loader.jsx";

const Portfolio = observer(() => {
    const [portfolioTypes, setPortfolioTypes] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchPortfolioTypes().then((data) => setPortfolioTypes(data)).finally(() => setLoading(false));
    }, []);

    return (
        <main>
            {loading ?
                <Loader/> :
                <Container style={{display: 'flex', flexDirection: 'column', gap: '5rem'}}>
                    <CardsContainer title="Наше портфолио">
                        {portfolioTypes.map((type) => (
                            <GalleryCard
                                key={type.id}
                                card={type}
                                navigateTo={PORTFOLIO_ROUTE + "/" + type.id}
                            />
                        ))}
                    </CardsContainer>
                </Container>}

        </main>
    );
});

export default Portfolio;
