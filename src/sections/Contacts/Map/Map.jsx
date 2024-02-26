import {Placemark, YMaps, Map} from "@pbe/react-yandex-maps";
import cl from './Map.module.css'
const MapSection = () => {
    const defaultState = {
        center: [55.745929, 37.577157],
        zoom: 12,
    };

    return (
        <section className={cl.section}>
            <YMaps>
                <Map defaultState={defaultState} width={'auto'}>
                    <Placemark geometry={[55.745929, 37.577157]}/>
                </Map>
            </YMaps>
        </section>
    );
}

export default MapSection;