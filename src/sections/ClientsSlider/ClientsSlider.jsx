import cl from './ClientSlider.module.css'
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore from "swiper/core";
import {Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import SectionTitle from "../../components/UI/Titles/SectionTitle.jsx";
import {useEffect, useState} from "react";
import {fetchClients} from "../../http/clientsApi.js";
import Image from "../../components/UI/Image/Image.jsx";
import Container from "../../components/UI/Container/Container.jsx";

function ClientsSlider(props) {
    SwiperCore.use(Autoplay)
    const [clients, setClients] = useState([])

    useEffect(() => {
        fetchClients().then(data => setClients(data))
    }, []);

    return (
        <section>
            <Container classes={cl.container} {...props}>
                <SectionTitle>Нам уже доверились</SectionTitle>
                <div>
                    <Swiper spaceBetween={10}
                            loop={true}
                            autoplay={true}
                            className={cl.clientSlider}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                },
                                600: {
                                    slidesPerView: 3,
                                },
                                760: {
                                    slidesPerView: 5,
                                }

                            }
                            }
                    >
                        {clients.map(client => (
                            <SwiperSlide key={client.id}>
                                <Image src={import.meta.env.VITE_API_URL + client.img}
                                       alt={`Логотип компании ${client.name}`}
                                       title={client.name}
                                       className={cl.clientImg}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    )
        ;
}

export default ClientsSlider;