import cl from "./Banner.module.css";
import BgImage from '../../../components/UI/BgImage/BgImage'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";
const Banner = ({ src }) => {
    let height = "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;

    const handleClick = () => {
        window.scrollTo({
            top: height,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className={cl.banner}>
            <BgImage src={src} />
            <div className={cl.next__btn} onClick={handleClick}>
                <FontAwesomeIcon icon={faChevronDown}/>
            </div>
        </div>
    );
};

export default Banner;
