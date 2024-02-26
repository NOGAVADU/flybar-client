import { useState } from "react";
import cl from "./Modal.module.css";
import Choose from "../Choose/Choose";
import { createType, createTypeService } from "../../http/typeApi";
import { fetchServices } from "../../http/serviceApi";

const CreateType = () => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");

    const [choosen, setChoosen] = useState([]);

    function createNewType(services) {
        createType({ title: title, description: subtitle }).then((type) => {
            services.forEach((service) => {
                createTypeService(type, service);
            });
        });
        setTitle("");
        setSubtitle("");
    }

    return (
        <>
            <h3 className={cl.modal__title}>Добавление типа</h3>
            <div className={cl.modal__formContainer}>
                <form className={cl.modal__form}>
                    <input
                        className={cl.modal__input}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Введите название типа:"
                    />
                    <input
                        className={cl.modal__input}
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        type="text"
                        placeholder="Введите подзаголовог типа:"
                    />
                </form>
                <Choose
                    title={"Выберите относящиеся к типу услуги:"}
                    leftColTitle={"Все услуги:"}
                    rightColTitle={"Выбранные:"}
                    data={() => fetchServices()}
                    choosen={choosen}
                    setChoosen={setChoosen}
                />
                <button
                    className={cl.addBtn}
                    onClick={() => createNewType(choosen)}
                >
                    Создать тип
                </button>
            </div>
        </>
    );
};

export default CreateType;
