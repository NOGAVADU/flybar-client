import cl from "./Modal.module.css";
import {useState} from "react";
import Input from "../UI/Input/Input.jsx";
import {createPortfolioType} from "../../http/portfolioApi.js";
import {observer} from "mobx-react-lite";

const CreateGalleryType = observer (() => {
    const [title, setTitle] = useState('')
    const [file, setFile] = useState(null)
    const createNewPortfolioType = () => {
        const formData = new FormData();
        formData.append('name', title);
        formData.append('img', file)
        createPortfolioType(formData)
        setTitle('')
        setFile(null)
    }

    return (
        <>
            <h3 className={cl.modal__title}>Добавление типа</h3>
            <div className={cl.modal__formContainer}>
                <form className={cl.modal__form}>
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Введите название категории:"
                    />
                    <h4>Выберите обложку категории</h4>
                    <Input
                        onChange={(e) => setFile(e.target.files[0])}
                        type="file"
                    />
                </form>
                <button
                    className={cl.addBtn}
                    onClick={createNewPortfolioType}
                >
                    Создать категорию
                </button>
            </div>
        </>
    );
});

export default CreateGalleryType;