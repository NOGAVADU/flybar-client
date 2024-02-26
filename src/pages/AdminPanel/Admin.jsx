import { useState } from "react";
import Container from "../../components/UI/Container/Container";
import cl from "./Admin.module.css";
import Modal from "../../components/modals/Modal";
import CreateType from "../../components/modals/CreateType";
import DeleteType from "../../components/modals/DeleteType";
import EditType from "../../components/modals/EditType";
import CreateService from "../../components/modals/CreateService";
import EditService from "../../components/modals/EditService";
import DeleteService from "../../components/modals/DeleteService";
import CreateGalleryType from "../../components/modals/CreateGalleryType.jsx";
import DeleteGalleryType from "../../components/modals/DeleteGalleryType.jsx";
import CreateGallery from "../../components/modals/CreateGallery.jsx";
import DeleteGallery from "../../components/modals/DeleteGallery.jsx";
import CreateClient from "../../components/modals/CreateClient.jsx";
import DeleteClient from "../../components/modals/DeleteClient.jsx";
import CreateReview from "../../components/modals/CreateReview.jsx";
import DeleteReview from "../../components/modals/DeleteReview.jsx";

const Admin = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalBody, setModalBody] = useState("");

    const openModal = (modalBody) => {
        setModalActive(true);
        setModalBody(modalBody);
    };

    return (
        <Container>
            <div className={cl.adminPanel__container}>
                <h2 className={cl.title}>Админ панель</h2>
                <div className={cl.controls__container}>
                    <div className="portfolio__controls">
                        <h3 className={cl.controls__title}>
                            Управление типами
                        </h3>
                        <div className={cl.controls}>
                            <button
                                className={cl.controls__btn}
                                onClick={() => openModal(<CreateType />)}
                            >
                                Добавить
                            </button>
                            <button
                                className={cl.controls__btn}
                                onClick={() => openModal(<EditType />)}
                            >
                                Изменить
                            </button>
                            <button
                                className={cl.controls__btn}
                                onClick={() => openModal(<DeleteType />)}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                    <div className="portfolio__controls">
                        <h3 className={cl.controls__title}>
                            Управление услугами
                        </h3>
                        <div className={cl.controls}>
                            <button
                                className={cl.controls__btn}
                                onClick={() => openModal(<CreateService />)}
                            >
                                Добавить
                            </button>
                            <button
                                className={cl.controls__btn}
                                onClick={() => openModal(<EditService />)}
                            >
                                Изменить
                            </button>
                            <button
                                className={cl.controls__btn}
                                onClick={() => openModal(<DeleteService />)}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                    <div className="portfolio__controls">
                        <h3 className={cl.controls__title}>
                            Управление портфолио
                        </h3>
                        <div className={cl.controls}>
                            <button className={cl.controls__btn} onClick={() => openModal(<CreateGalleryType/>)}>
                                Добавить Категорию
                            </button>
                            <button className={cl.controls__btn} onClick={() => openModal(<DeleteGalleryType/>)}>
                                Удалить Категорию
                            </button>
                            <button className={cl.controls__btn} onClick={() => openModal(<CreateGallery/>)}>
                                Добавить Галлерею
                            </button>
                            <button className={cl.controls__btn} onClick={() => openModal(<DeleteGallery/>)}>
                                Удалить Галлерею
                            </button>
                        </div>
                    </div>
                    <div className="portfolio__controls">
                        <h3 className={cl.controls__title}>
                            Прочее
                        </h3>
                        <div className={cl.controls}>
                            <button className={cl.controls__btn} onClick={() => openModal(<CreateClient/>)}>
                                Добавить клиента
                            </button>
                            <button className={cl.controls__btn} onClick={() => openModal(<DeleteClient/>)}>
                                Удалить клиента
                            </button>
                            <button className={cl.controls__btn} onClick={() => openModal(<CreateReview/>)}>
                                Добавить отзыв
                            </button>
                            <button className={cl.controls__btn} onClick={() => openModal(<DeleteReview/>)}>
                                Удалить отзыв
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                {modalBody}
            </Modal>
        </Container>
    );
};

export default Admin;
