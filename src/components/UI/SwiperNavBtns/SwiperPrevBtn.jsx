import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {useSwiper} from "swiper/react";
import  cl from './SwiperNavBtns.module.css'
const SwiperPrevBtn = () => {
    const swiper = useSwiper()
    return (
        <button onClick={() => swiper.slidePrev()} className={cl.btn}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
    );
};

export default SwiperPrevBtn;