import cl from "./CallbackBtn.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import {useRef, useState} from "react";
import useClickOutside from "../../hooks/useClickOutside.jsx";
import {sendCallback} from "../../http/telegramApi.js";

const CallbackBtn = (props) => {
    const {ref, isShow, setIsShow} = useClickOutside(false)
    const contentEl = useRef();

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')

    const nameHandler = (e => {
        setName(e.target.value)
        if (e.target.value.length === 0) {
            setError('Введите ваше имя')
        } else {
            setError('')
        }
    })

    const phoneHandler = (e) => {
        setPhone(e.target.value)
        const re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{6})$/;
        if (!e.target.value.match(re)) {
            setError("Введенный номер телефона некорректен")
            if (e.target.value.length === 0) {
                setError('Введите номер вашего телефона')
            }
        } else {
            setError('')
        }
    }

    const createCallback = (e) => {
        if (!error) {
            e.preventDefault()
            const formData = new FormData()
            formData.append('name', name)
            formData.append('phone', phone)
            sendCallback(formData).then(data => console.log(data))
            setName('')
            setPhone('')
            setIsShow(false)
        } else{
            e.preventDefault()

        }
    }

    return (
        <div className={cl.callback__container} {...props}>
            <article ref={ref} className={isShow ? [cl.callbackBtn, cl.active].join(' ') : cl.callbackBtn}
                     onClick={() => setIsShow(true)}>
                <FontAwesomeIcon icon={faPhoneVolume}/>
                <p>Обратный звонок</p>
                <form ref={contentEl} className={cl.callback__form} style={isShow
                    ? {height: contentEl.current.scrollHeight, transform: "scaleY(1)"}
                    : {height: "0px"}}>
                    <input type={"text"} value={name} onChange={(e) => nameHandler(e)}
                           placeholder={'Введите ваше имя'} className={cl.callback__input}/>
                    <input type={"tel"} value={phone} onChange={(e) => phoneHandler(e)}
                           placeholder={'Введите ваш телефон'} className={cl.callback__input}/>

                    <button className={cl.callback__formBtn} onClick={(e) => createCallback(e)}>Заказать звонок</button>
                    {error && <p className={cl.form__error}>{error}</p>}
                </form>
            </article>
        </div>
    );
};

export default CallbackBtn;