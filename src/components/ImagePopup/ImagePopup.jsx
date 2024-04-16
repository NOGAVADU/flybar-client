import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "../UI/Image/Image";
import cl from "./ImagePopup.module.css";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImagePopup = ({imageSet, photo, active, setActive, controls}) => {
    const nextImg = () => {
        photo.photoIndex === imageSet.length - 1
            ? photo.setPhotoIndex(0)
            : controls.next()
    }

    const prevImg = () => {
        photo.photoIndex === 0
            ? photo.setPhotoIndex(imageSet.length - 1)
            : controls.prev()
    }

    return (
        <div
            className={active ? [cl.popup, cl.active].join(" ") : cl.popup}
            onClick={() => {
                setActive(false);
            }}
        >
            <div
                className={
                    active
                        ? [cl.popup__content, cl.active].join(" ")
                        : cl.popup__content
                }
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={cl.popup__btn}
                    onClick={prevImg}
                >
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                <div className={cl.img__container}>
                    {active && (
                        <Image
                            src={
                                import.meta.env.VITE_API_URL +
                                imageSet[photo.photoIndex].img
                            }
                            alt=""
                        />
                    )}
                </div>
                <button
                    className={cl.popup__btn}
                    onClick={nextImg}
                >
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>
        </div>
    );
};

export default ImagePopup;

// import.meta.env.VITE_API_URL
