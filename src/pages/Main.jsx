import Banner from "../sections/Main/Banner/Banner";
import mainBanner from "../assets/images/banner/bartender2.jpg";
import AboutUs from "../sections/Main/AboutUs/AboutUs";
import HowWeWork from "../sections/Main/HowWeWork/HowWeWork";
import Services from "../sections/Main/Services/Services";
import Portfolio from "../sections/Main/Porfolio/Portfolio";
import OrderForm from "../sections/OrderForm/OrderForm";
import ClientsSlider from "../sections/ClientsSlider/ClientsSlider.jsx";
import Reviews from "../sections/Reviews/Reviews.jsx";

const Main = () => {
    return (
        <main style={{display: "flex", flexDirection: "column", gap: "10rem"}}>
            <Banner src={mainBanner}/>
            <AboutUs/>
            <HowWeWork/>
            <Services/>
            <Portfolio/>
            <OrderForm/>
            <ClientsSlider/>
            <Reviews/>
        </main>
    );
};

export default Main;
