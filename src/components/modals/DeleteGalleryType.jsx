import {useContext, useEffect, useState} from 'react';
import {Context} from "../../main.jsx";
import {deletePortfolioType, fetchPortfolioTypes} from "../../http/portfolioApi.js";
import cl from "./Modal.module.css";
import Select from "react-select";
import {observer} from "mobx-react-lite";

const DeleteGalleryType = observer (() => {
    const [choosenType, setChoosenType] = useState([])
    const {portfolio} = useContext(Context)
    useEffect(() => {
        fetchPortfolioTypes().then(data => {
            portfolio.setPortfolioTypes(data)
        })
    }, []);

    const selectOptions = portfolio.portfolioType.map(type => {
        return {value: type, label: type.name}
    })

    const deleteOneType = () => {
        deletePortfolioType(choosenType.value.id)
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
                    Удалить категорию
                </button>
            </div>
        </>
    );
});
export default DeleteGalleryType;