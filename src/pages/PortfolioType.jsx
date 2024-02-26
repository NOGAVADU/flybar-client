import {useEffect, useState} from "react";
import {
    fetchPortfolioType,
    fetchPortfolioTypeGalleries,
} from "../http/portfolioApi";
import {useParams} from "react-router-dom";
import GalleryCard from "../components/cards/GalleryCard/GalleryCard";
import {PORTFOLIO_ROUTE} from "../utils/consts";
import CardsContainer from "../components/PortfolioCardsContainer/CardsContainer";
import Container from "../components/UI/Container/Container";
import {observer} from "mobx-react-lite";
import Loader from "../components/Loader/Loader.jsx";

const PortfolioType = observer(() => {
    const {id} = useParams();
    const [galleries, setGalleries] = useState([]);
    const [typeName, setTypeName] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchPortfolioTypeGalleries(id).then((data) => setGalleries(data));
        fetchPortfolioType(id).then((data) => setTypeName(data.name)).finally(() => setLoading(false));
    }, []);

    return (
        <main>
            {loading ?
                <Loader/> :
                <Container>
                    <CardsContainer title={typeName}>
                        {galleries.map((gallery) => (
                            <GalleryCard
                                key={gallery.id}
                                card={gallery}
                                navigateTo={PORTFOLIO_ROUTE + "/gallery/" + gallery.id}
                            />
                        ))}
                    </CardsContainer>
                </Container>
            }
        </main>
    );
});

export default PortfolioType;
