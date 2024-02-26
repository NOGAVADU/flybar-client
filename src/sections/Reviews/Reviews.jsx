import {fetchReviews} from "../../http/reviewApi.js";
import {Swiper, SwiperSlide} from "swiper/react";
import {useEffect, useState} from 'react';
import cl from './Reviews.module.css'
import Image from "../../components/UI/Image/Image.jsx";
import ParagraphTitle from "../../components/UI/Titles/ParagraphTitle.jsx";
import SectionTitle from "../../components/UI/Titles/SectionTitle.jsx";
import {Navigation, A11y} from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import './Rewiews.css'
import Container from "../../components/UI/Container/Container.jsx";

function Reviews(props) {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetchReviews().then(data => setReviews(data))
    }, []);

    return (
        <section >
            <Container classes={cl.reviews__section} {...props}>
                <SectionTitle>Отзывы</SectionTitle>
                <div>
                    <Swiper modules={[Navigation, A11y]}
                            spaceBetween={100}
                            slidesPerView={1}
                            navigation={true}
                            loop={true}
                            className={cl.reviews__container}>
                        {reviews.map(review => (
                            <SwiperSlide key={review.id} className={cl.review}>
                                <div className={cl.review__header}>
                                    <div className={cl.review__imgContainer}>
                                        <Image src={import.meta.env.VITE_API_URL + review.img}/>
                                    </div>
                                    <div>
                                        <ParagraphTitle>{review.name}</ParagraphTitle>
                                        <h4 className={cl.review__subtitle}>{review.event_name}</h4>
                                    </div>
                                </div>
                                <p className={cl.review__body}>{review.review_body}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    );
}

export default Reviews;