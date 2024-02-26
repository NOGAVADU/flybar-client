import {useEffect, useState} from 'react';
import cl from "./Modal.module.css";
import Select from "react-select";
import {observer} from "mobx-react-lite";
import {deleteClient, fetchClients} from "../../http/clientsApi.js";

const DeleteClient = observer (() => {
    const [chosenClient, setChosenClient] = useState([])
    const [clients, setClients] = useState([])

    useEffect(() => {
        fetchClients().then(data => {
            setClients(data)
        })
    }, []);

    const selectOptions = clients.map(client => {
        return {value: client, label: client.name}
    })

    const deleteOneClient = () => {
        deleteClient(chosenClient.value.id)
    }

    return (
        <>
            <h3 className={cl.modal__title}>Удаление клиента</h3>
            <div className={cl.modal__formContainer}>
                <Select options={selectOptions}
                        onChange={(option) => setChosenClient(option)}
                />
                <button
                    className={cl.addBtn}
                    onClick={() => deleteOneClient()}
                >
                    Удалить категорию
                </button>
            </div>
        </>
    );
});

export default DeleteClient;