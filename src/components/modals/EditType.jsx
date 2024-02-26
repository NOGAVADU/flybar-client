import {useContext, useEffect, useState} from "react";

import {Context} from "../../main";
import cl from "./Modal.module.css";
import Choose from "../Choose/Choose";
import {
    clearTypeServices,
    createTypeService,
    editType,
    fetchTypes,
} from "../../http/typeApi";
import {fetchServices} from "../../http/serviceApi";
import {observer} from "mobx-react-lite";
import Select from "react-select";

const EditType = observer(() => {
    const {type} = useContext(Context);

    useEffect(() => {
        fetchTypes().then((data) => {
            type.setTypes(data);
        });
    }, []);

    const [choosenType, setChoosenType] = useState({});
    const [choosenServices, setChoosenServices] = useState([]);
    const [subtitle, setSubtitle] = useState("");
    const [title, setTitle] = useState('');
    useEffect(() => {
        if (Object.keys(choosenType).length !== 0) {
            setTitle(choosenType.value.title)
            setSubtitle(choosenType.value.description)
        }
    }, [choosenType])


    const selectData = type.types.map((type) => {
        return {value: type, label: type.title};
    });

    const editChoosenType = () => {
        try {
            editType({
                id: choosenType.value.id,
                title: title,
                description: subtitle,
            });
            if (choosenServices.length !== 0) {
                clearTypeServices(choosenType);
                choosenServices.forEach((service) => {
                    createTypeService(choosenType, service);
                });
            }

        } catch (e) {
            console.log(e)
        }
    }
return (
    <>
        <h3 className={cl.modal__title}>Изменение типа</h3>
        <div className={cl.modal__formContainer}>
            <form className={cl.modal__form}>
                <h4 className={cl.modal__formTitle}>
                    Выберите тип для изменения:
                </h4>
                <Select
                    onChange={(option) => {
                        setChoosenType(option);
                    }}
                    options={selectData}
                />
            </form>
            {Object.keys(choosenType).length !== 0 ? (
                <div className={cl.modal__formContainer}>
                    <form className={cl.modal__form}>
                        <input
                            className={cl.modal__input}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            placeholder={"Введите новое название типа"}
                        />
                        <input
                            className={cl.modal__input}
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                            type="text"
                            placeholder={'Введите новый подзаголовок'}
                        />
                    </form>
                    <Choose
                        title={"Выберите относящиеся к типу услуги:"}
                        leftColTitle={"Все услуги:"}
                        rightColTitle={"Выбранные:"}
                        data={() => fetchServices()}
                        choosen={choosenServices}
                        setChoosen={setChoosenServices}
                    />
                </div>
            ) : (
                "Выберите тип для изменения"
            )}

            <button className={cl.addBtn} onClick={() => editChoosenType()}>
                Изменить тип
            </button>
        </div>
    </>)
});



export default EditType;
