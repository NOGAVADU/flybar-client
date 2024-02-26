import {useState} from "react";
import cl from "./Modal.module.css";
import Input from "../UI/Input/Input.jsx";
import {createClient} from "../../http/clientsApi.js";
import {observer} from "mobx-react-lite";

const CreateClient = observer (() => {
    const [title, setTitle] = useState('')
    const [file, setFile] = useState(null)
    const createNewClient = () => {
        const formData = new FormData();
        formData.append('name', title);
        formData.append('img', file)
        createClient(formData)
        setTitle('')
        setFile(null)
    }

    return (
        <>
            <h3 className={cl.modal__title}>Добавление клиента в слайдер</h3>
            <div className={cl.modal__formContainer}>
                <form className={cl.modal__form}>
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Введите название компании:"
                    />
                    <h4>Добавьте логотип компании</h4>
                    <Input
                        onChange={(e) => setFile(e.target.files[0])}
                        type="file"
                    />
                </form>
                <button
                    className={cl.addBtn}
                    onClick={createNewClient}
                >
                    Добавить клиента
                </button>
            </div>
        </>
    );
});
export default CreateClient;