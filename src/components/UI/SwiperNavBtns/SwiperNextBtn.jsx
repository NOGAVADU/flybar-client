import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useSwiper} from "swiper/react";
import cl from './SwiperNavBtns.module.css'
const SwiperNextBtn = () => {
    const swiper = useSwiper()
    return (
        <button onClick={() => swiper.slideNext()} className={cl.btn}>
            <FontAwesomeIcon icon={faChevronRight}/>
        </button>
    );
};

export default SwiperNextBtn;