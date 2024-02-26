import Container from "../components/UI/Container/Container";
import ErrorText from "../components/UI/ErrorText/ErrorText";

const NotFound = () => {
    return (
        <main>
            <section>
                <Container center={true}>
                    <ErrorText/>
                </Container>
            </section>
        </main>
    );
};

export default NotFound;
