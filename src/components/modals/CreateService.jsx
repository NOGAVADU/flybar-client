import { useState } from "react";
import cl from "./Modal.module.css";
import { createService } from "../../http/serviceApi";
import Input from "../UI/Input/Input";

const CreateService = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);
    const [price, setPrice] = useState([]);
    // Добавить цену

    const createNewService = () => {
        const formData = new FormData();
        formData.append("name", title);
        formData.append("service_body", body);
        formData.append("img", file);
        formData.append("price", JSON.stringify(price))
        formData.append("info", JSON.stringify(info));
        createService(formData);
    };

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    };

    const addPrice = (e) => {
        e.preventDefault();
        setPrice([
            ...price,
            { amount: "", type: "", price: "", number: Date.now() },
        ]);
    };

    const removePrice = (number) => {
        setPrice(price.filter((i) => i.number !== number));
    };

    const changePrice = (key, value, number) => {
        setPrice(
            price.map((i) => (i.number === number ? { ...i, [key]: value } : i))
        );
    };

    const addInfo = (e) => {
        e.preventDefault();
        setInfo([...info, { title: "", description: "", number: Date.now() }]);
    };

    const removeInfo = (number) => {
        setInfo(info.filter((i) => i.number !== number));
    };

    const changeInfo = (key, value, number) => {
        setInfo(
            info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
        );
    };

    return (
        <>
            <h3 className={cl.modal__title}>Добавление типа</h3>
            <div className={cl.modal__formContainer}>
                <form className={cl.modal__form}>
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Введите название услуги:"
                    />
                    <Input
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        type="text"
                        placeholder="Введите краткое описание услуги"
                    />
                    <Input
                        onChange={selectFile}
                        type="file"
                        placeholder="Загрузите изображение"
                    />
                </form>
                <hr />
                <form>
                    <button className={cl.addBtn} onClick={(e) => addPrice(e)}>
                        Добавить новый подвид услуги(Мини, Стандарт, Премиум)
                    </button>
                    <div className={cl.price__container}>
                        {price.map((i) => (
                            <div key={i.number} className={cl.price__paragraph}>
                                <Input
                                    type="text"
                                    placeholder="Введите количество товара в услуге"
                                    value={i.amount}
                                    onChange={(e) =>
                                        changePrice(
                                            "amount",
                                            e.target.value,
                                            i.number
                                        )
                                    }
                                />
                                <Input
                                    placeholder="Введите ед.измерения (литров, чашек, коктейлей...)"
                                    value={i.type}
                                    onChange={(e) =>
                                        changePrice(
                                            "type",
                                            e.target.value,
                                            i.number
                                        )
                                    }
                                />
                                <Input
                                    placeholder="Введите цену на данное количество товаров"
                                    value={i.price}
                                    onChange={(e) =>
                                        changePrice(
                                            "price",
                                            e.target.value,
                                            i.number
                                        )
                                    }
                                />
                                <button
                                    className={cl.info__deleteBtn}
                                    onClick={() => removePrice(i.number)}
                                >
                                    Удалить параграф
                                </button>
                            </div>
                        ))}
                    </div>
                </form>

                <hr />
                <form className={cl.modal__form}>
                    <button className={cl.addBtn} onClick={(e) => addInfo(e)}>
                        Добавить новый параграф
                    </button>
                    <div className={cl.info__container}>
                        {info.map((i) => (
                            <div key={i.number} className={cl.info__paragraph}>
                                <Input
                                    type="text"
                                    placeholder="Введите заголовок параграфа"
                                    value={i.title}
                                    onChange={(e) =>
                                        changeInfo(
                                            "title",
                                            e.target.value,
                                            i.number
                                        )
                                    }
                                />
                                <textarea
                                    className={cl.modal__input}
                                    placeholder="Введите содержание параграфа параграфа"
                                    value={i.description}
                                    onChange={(e) =>
                                        changeInfo(
                                            "description",
                                            e.target.value,
                                            i.number
                                        )
                                    }
                                />
                                <button
                                    className={cl.info__deleteBtn}
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Удалить параграф
                                </button>
                            </div>
                        ))}
                    </div>
                </form>
                <button
                    className={cl.addBtn}
                    onClick={() => createNewService()}
                >
                    Создать тип
                </button>
            </div>
        </>
    );
};

export default CreateService;
