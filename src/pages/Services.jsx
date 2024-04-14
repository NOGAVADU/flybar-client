import {useContext, useEffect, useState} from "react";
import Container from "../components/UI/Container/Container";
import {Context} from "../main";
import {observer} from "mobx-react-lite";
import TypeCard from "../components/cards/TypeCard/TypeCard";
import {fetchTypes} from "../http/typeApi";
import Loader from "../components/Loader/Loader.jsx";

const Services = observer(() => {
    const {type} = useContext(Context);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchTypes().then((data) => type.setTypes(data)).finally(() => setLoading(false));
    }, []);

    return (
        <main>
            {loading ?
                <Loader/> :
                <Container style={{display: 'flex', flexDirection: 'column-reverse', gap: "3rem"}}>
                    {type.types.map((type) => (
                        <TypeCard key={type.id} type={type}/>
                    ))}
                </Container>}

        </main>
    );
});

export default Services;
