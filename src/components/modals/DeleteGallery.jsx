import { useEffect, useState} from 'react';
import {deleteGallery, fetchGalleries, fetchPortfolioTypes} from "../../http/portfolioApi.js";
import {observer} from "mobx-react-lite";
import cl from "./Modal.module.css";
import Select from "react-select";


const DeleteGallery = observer(() => {
    const [choosenType, setChoosenType] = useState([])
    const [galleries, setGalleries] = useState([])

    useEffect(() => {
        fetchGalleries().then(data => setGalleries(data))
    }, []);

    const selectOptions = galleries.map(type => {
        return {value: type, label: type.name}
    })

    const deleteOneType = () => {
        deleteGallery(choosenType.value.id)
    }

    return (
        <>
            <h3 className={cl.modal__title}>Добавление типа</h3>
            <div className={cl.modal__formContainer}>
                <Select options={selectOptions}
                        onChange={(option) => setChoosenType(option)}
                />
                <button
                    className={cl.addBtn}
                    onClick={() => deleteOneType()}
                >
                    Удалить галлерею
                </button>
            </div>
        </>
    );
});

export default DeleteGallery;