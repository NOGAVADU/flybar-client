import AboutUsMain from "../sections/Main/AboutUs/AboutUs.jsx";
import AboutUsNumbers from "../sections/AboutUs/AboutUsNumbers/AboutUsNumbers.jsx";
import Container from "../components/UI/Container/Container.jsx";
import Portfolio from "../sections/Main/Porfolio/Portfolio.jsx";
import HowWeWork from "../sections/Main/HowWeWork/HowWeWork.jsx";
import ClientsSlider from "../sections/ClientsSlider/ClientsSlider.jsx";
import Reviews from "../sections/Reviews/Reviews.jsx";

const AboutUs = () => {
    return (
        <main style={{display: 'flex', flexDirection: 'column', gap: '5rem'}}>
            <AboutUsMain/>
            <AboutUsNumbers/>
            <ClientsSlider/>
            <Reviews/>
        </main>
    );
}

export default AboutUs;
