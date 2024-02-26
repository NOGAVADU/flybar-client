import { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import cl from "./Modal.module.css";
import { deleteType, fetchTypes } from "../../http/typeApi";
import { observer } from "mobx-react-lite";
import Select from "react-select";

const DeleteType = observer(() => {
    const { type } = useContext(Context);

    useEffect(() => {
        fetchTypes().then((data) => {
            type.setTypes(data);
        });
    }, []);

    const [choosenType, setChoosenType] = useState([]);

    const selectData = type.types.map((type) => {
        return { value: type, label: type.title };
    });

    function deleteChoosenType(type) {
        deleteType(type.value.id);
        setChoosenType("");
    }

    return (
        <>
            <h3 className={cl.modal__title}>Удаление типа</h3>
            <div className={cl.modal__formContainer}>
                <form className={cl.modal__form}>
                    <h4 className={cl.modal__formTitle}>
                        Выберите тип для удаления:
                    </h4>
                    <Select
                        options={selectData}
                        onChange={(option) => setChoosenType(option)}
                    />
                </form>

                <button
                    className={cl.addBtn}
                    onClick={() => deleteChoosenType(choosenType)}
                >
                    Удалить тип
                </button>
            </div>
        </>
    );
});

export default DeleteType;
