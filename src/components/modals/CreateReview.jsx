import {useState} from "react";
import Input from "../UI/Input/Input.jsx";
import cl from "./Modal.module.css";
import {createReview} from "../../http/reviewApi.js";

const CreateReview = () => {
    const [name, setName] = useState('')
    const [eventName, setEventName] = useState('')
    const [review, setReview] = useState('')
    const [file, setFile] = useState(null)

    const addReview = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('event_name', eventName)
        formData.append('review_body', review)
        formData.append('img', file)
        createReview(formData)
    }

    return (
        <div className={cl.modal__formContainer}>
            <h3>Добавление отзыва</h3>
            <form className={cl.modal__formContainer}>

                <Input type={'text'} value={name} onChange={e => setName(e.target.value)}
                       placeholder={"Введите имя человек"}/>
                <Input
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    placeholder="Загрузите изображение"
                />
                <Input type={'text'} value={eventName} onChange={e => setEventName(e.target.value)}
                       placeholder={'Введите название компании/мероприятия'}/>
                <textarea
                    className={cl.modal__input}
                    placeholder="Введите отзыв"
                    value={review}
                    rows={10}
                    onChange={(e) => setReview(e.target.value)}
                />
            </form>
            <button className={cl.addBtn} onClick={addReview}>Добавить отзыв</button>
        </div>
    );
};

export default CreateReview;