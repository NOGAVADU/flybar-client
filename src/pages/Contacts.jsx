import PageTitle from "../components/UI/Titles/PageTitle.jsx";
import ContactsSection from "../sections/Contacts/Contacts/ContactsSection.jsx";
import Container from "../components/UI/Container/Container.jsx";
import Map from "../sections/Contacts/Map/Map.jsx";

const Contacts = () => {
    return (
        <main>
            <Container style={{display: 'flex', flexDirection: "column", gap: '3rem'}}>
                <PageTitle style={{textAlign: 'center'}}>Контактная информация</PageTitle>
                <ContactsSection/>
                <Map/>
            </Container>
        </main>
    );
}

export default Contacts;
