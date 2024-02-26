import {useEffect, useState} from "react";
import {
    fetchGalleryPhotos,
    fetchPortfolioGallery,
} from "../http/portfolioApi";
import {useParams} from "react-router-dom";
import CardsContainer from "../components/PortfolioCardsContainer/CardsContainer";
import Image from "../components/UI/Image/Image";
import Container from "../components/UI/Container/Container";
import {observer} from "mobx-react-lite";
import ImagePopup from "../components/ImagePopup/ImagePopup";
import Loader from "../components/Loader/Loader.jsx";

const Gallery = observer(() => {
    const {id} = useParams();
    const [photos, setPhotos] = useState([]);
    const [galleryName, setGalleryName] = useState("");

    const [popupActive, setPopupActive] = useState(false);
    const [openedPhoto, setOpenedPhoto] = useState(0);

    const [loading, setLoading] = useState(true)
    const openPhoto = (index) => {
        setPopupActive(true);
        setOpenedPhoto(index);
    };

    const nextPhoto = () => {
        setOpenedPhoto(openedPhoto + 1);
    };

    const prevPhoto = () => {
        setOpenedPhoto(openedPhoto - 1);
    };

    useEffect(() => {
        fetchGalleryPhotos(id).then((data) => setPhotos(data));
        fetchPortfolioGallery(id).then((data) => setGalleryName(data.name)).finally(() => setLoading(false));
    }, []);

    return (
        <main>
            {loading ?
                <Loader/> :
                <Container>
                    <CardsContainer title={galleryName}>
                        {photos.map((photo, i) => (
                            <Image
                                key={photo.id}
                                src={import.meta.env.VITE_API_URL + photo.img}
                                classes={['hoverGrow']}
                                onClick={() => openPhoto(i)}
                            />
                        ))}
                    </CardsContainer>
                    <ImagePopup
                        imageSet={photos}
                        active={popupActive}
                        setActive={setPopupActive}
                        photo={{
                            photoIndex: openedPhoto,
                            setPhotoIndex: setOpenedPhoto,
                        }}
                        controls={{next: nextPhoto, prev: prevPhoto}}
                    />
                </Container>
            }
        </main>
    );
});

export default Gallery;
