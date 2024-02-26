import {useParams} from "react-router-dom";
import Container from "../components/UI/Container/Container";
import {useEffect, useState} from "react";
import {fetchOneService} from "../http/serviceApi";

import ServicePageContent from "../components/Service/ServicePageContent/ServicePageContent";
import ServicePrice from "../components/Service/ServicePrice/ServicePrice";
import OrderForm from "../sections/OrderForm/OrderForm";
import ClientsSlider from "../sections/ClientsSlider/ClientsSlider.jsx";
import Reviews from "../sections/Reviews/Reviews.jsx";

const ServicePage = () => {
    const [service, setService] = useState({info: [], price: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneService(id).then((data) => setService(data));
    }, []);

    return (
        <main>
            <Container style={{display: "flex", flexDirection: "column", gap: "5rem"}}>
                <ServicePageContent title={service.name} service={service}/>
                <ServicePrice service={service}/>
                <OrderForm style={{padding: '0'}}/>
                <ClientsSlider style={{padding: '0'}}/>
                <Reviews style={{padding: '0'}}/>
            </Container>
        </main>
    );
};

export default ServicePage;
