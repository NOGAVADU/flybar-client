import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import cl from "./Modal.module.css";
import Select from "react-select";
import { Context } from "../../main";
import { deleteService, fetchServices } from "../../http/serviceApi";

const DeleteService = observer(() => {
    const { service } = useContext(Context);

    useEffect(() => {
        fetchServices().then((data) => {
            service.setServices(data);
        });
    }, []);

    const selectData = service.services.map((service) => {
        return { value: service, label: service.name };
    });

    const [choosenService, setChoosenService] = useState([]);

    function deleteChoosenService(service) {
        deleteService(service.value.id);
        setChoosenService("");
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
                        onChange={(option) => setChoosenService(option)}
                    />
                </form>

                <button
                    className={cl.addBtn}
                    onClick={() => deleteChoosenService(choosenService)}
                >
                    Удалить тип
                </button>
            </div>
        </>
    );
});

export default DeleteService;
