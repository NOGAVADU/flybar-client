import {useContext, useEffect, useState} from "react";
import {createGallery, createGalleryPhoto, fetchPortfolioTypes} from "../../http/portfolioApi.js";
import cl from "./Modal.module.css";
import Input from "../UI/Input/Input.jsx";
import Select from "react-select";
import {Context} from "../../main.jsx";
import {observer} from "mobx-react-lite";

const CreateGallery = observer (() => {
    const {portfolio} = useContext(Context)
    const [title, setTitle] = useState('')
    const [file, setFile] = useState(null)
    const [photos, setPhotos] = useState(null)
    const [choosenType, setChoosenType] = useState(null)

    useEffect(() => {
        fetchPortfolioTypes().then(data => {
            portfolio.setPortfolioTypes(data)
        })
    }, []);

    const selectOptions = portfolio.portfolioType.map(type => {
        return {value: type, label: type.name}
    })

    const createNewGallery = () => {
        const formData = new FormData()
        formData.append('name', title)
        formData.append('img', file)
        formData.append('portfolioTypeId', choosenType.value.id)
        createGallery(formData).then(data => {
            console.log(photos,photos.length, photos[0], photos[0].name)
            for (let i = 0; i <= photos.length - 1; i++){
                const photoData = new FormData()
                photoData.append('galleryId', data.id)
                photoData.append('img', photos[i])
                createGalleryPhoto(photoData)
            }
        })
    }


    return (
        <>
            <h3 className={cl.modal__title}>Добавление типа</h3>
            <div className={cl.modal__formContainer}>
                <Select options={selectOptions}
                        onChange={(option) => setChoosenType(option)}
                />
                {choosenType && <form className={cl.modal__form}>
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Введите название галлереи:"
                    />
                    <h4>Выберите обложку галлереи</h4>
                    <Input
                        onChange={(e) => setFile(e.target.files[0])}
                        type="file"
                    />
                    <h4>Загрузите все фотографии, относящиеся к галлерее</h4>
                    <Input
                        onChange={(e) => setPhotos(e.target.files)}
                        type="file"
                        multiple={true}
                    />
                </form>}

                <button
                    className={cl.addBtn}
                    onClick={() => createNewGallery()}
                >
                    Создать категорию
                </button>
            </div>
        </>
    );
});

export default CreateGallery;