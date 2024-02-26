import  {useEffect, useState} from 'react';
import cl from "./Modal.module.css";
import Select from "react-select";
import {deleteReview, fetchReviews} from "../../http/reviewApi.js";
import {observer} from "mobx-react-lite";

const DeleteReview = observer (() => {
    const [chosenReview, setChosenReview] = useState([])
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetchReviews().then(data => {
            setReviews(data)
        })
    }, []);

    const selectOptions = reviews.map(client => {
        return {value: client, label: client.name + '/' + client.event_name}
    })

    const deleteOneReview = () => {
        deleteReview(chosenReview.value.id)
    }

    return (
        <>
            <h3 className={cl.modal__title}>Удаление клиента</h3>
            <div className={cl.modal__formContainer}>
                <Select options={selectOptions}
                        onChange={(option) => setChosenReview(option)}
                />
                <button
                    className={cl.addBtn}
                    onClick={() => deleteOneReview()}
                >
                    Удалить категорию
                </button>
            </div>
        </>
    );
});


export default DeleteReview;