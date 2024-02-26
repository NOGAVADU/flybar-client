import {useEffect, useRef, useState} from "react";
import cl from "./OrderForm.module.css";
import SectionTitle from "../../components/UI/Titles/SectionTitle.jsx";
import OrderFormContacts from "./OrderFormContacts.jsx";
import {sendOrder} from "../../http/telegramApi.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import Container from "../../components/UI/Container/Container.jsx";

const OrderForm = (props) => {
    const [checked, setChecked] = useState(true);
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [order, setOrder] = useState('')

    const [nameDirty, setNameDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)
    const [mailDirty, setMailDirty] = useState(false)
    const [nameError, setNameError] = useState("Введите ваше имя")
    const [phoneError, setPhoneError] = useState("Введите ваш номер телефона")
    const [mailError, setMailError] = useState("Введите вашу почту")

    const [formValid, setFormValid] = useState(false)
    const [btnAnimate, setBtnAnimate] = useState(false)
    const [formStatus, setFormStatus] = useState('Отправить')

    useEffect(() => {
        if (nameError || phoneError || mailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [nameError, phoneError, mailError]);

    const btn = useRef(null);
    const createOrder = (e) => {
        e.preventDefault()

        if (!formValid) {
            setBtnAnimate(true)
            setTimeout(() => setBtnAnimate(false), 300)
            setFormStatus(nameError || phoneError || mailError)
            setTimeout(() => setFormStatus('Отправить'), 2000)
        } else {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('phone', phone)
            formData.append('mail', mail)
            formData.append('order', order)
            sendOrder(formData).then(data => console.log(data))
            setName('')
            setPhone('')
            setMail('')
            setOrder('')
            setNameError('Введите ваше имя')
            setPhoneError('Введите ваш телефон')
            setMailError('Введите вашу почту')
            setFormStatus('Отправлено')
            setTimeout(() => setFormStatus('Отправить'), 2000)
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        if (e.target.value.length === 0) {
            setNameError('Введите ваше имя')
        } else {
            setNameError('')
        }
    }
    const phoneHandler = (e) => {
        setPhone(e.target.value)
        const re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{6})$/;
        if (!e.target.value.match(re)) {
            setPhoneError("Введенный номер телефона некорректен")
            if (e.target.value.length === 0) {
                setPhoneError('Введите номер вашего телефона')
            }
        } else {
            setPhoneError('')
        }
    }

    const mailHandler = (e) => {
        setMail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setMailError('Введенный email некорректен')
            if (e.target.value.length === 0) {
                setMailError("Введите email")
            }
        } else {
            setMailError('')
        }
    }
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name' :
                setNameDirty(true)
                break
            case "phone":
                setPhoneDirty(true)
                break
            case 'mail':
                setMailDirty(true)
                break
        }
    }

    return (
        <section>
            <Container {...props}>
                <SectionTitle style={{fontSize: '3rem', marginBottom: '2rem'}}>Оформить заказ</SectionTitle>
                <div className={cl.order__body}>
                    <form className={cl.order__form}>
                        <label
                            className={`${cl.order__label} ${cl.label__name}`}
                        >
                            Ваше имя
                            <input
                                name={'name'}
                                value={name}
                                onChange={(e) => nameHandler(e)}
                                type="text"
                                onBlur={(e) => blurHandler(e)}
                                className={(nameDirty && nameError) ? [cl.order__input, cl.inputError].join(' ') : cl.order__input}
                                placeholder="Иванов Иван"
                                maxLength={50}
                            />
                        </label>
                        <label
                            className={`${cl.order__label} ${cl.label__phone}`}
                        >
                            Ваш телефон
                            <input
                                name={'phone'}
                                value={phone}
                                onChange={(e) => phoneHandler(e)}
                                type="tel"
                                onBlur={(e) => blurHandler(e)}
                                className={(phoneDirty && phoneError) ? [cl.order__input, cl.inputError].join(' ') : cl.order__input}
                                placeholder="+74952207061"
                                maxLength={50}
                            />
                        </label>
                        <label
                            className={`${cl.order__label} ${cl.label__mail}`}
                        >
                            Ваша почта
                            <input
                                name={'mail'}
                                value={mail}
                                onChange={e => mailHandler(e)}
                                type="email"
                                onBlur={(e) => blurHandler(e)}
                                className={(mailDirty && mailError) ? [cl.order__input, cl.inputError].join(' ') : cl.order__input}
                                placeholder="example@mail.ru"
                                maxLength={50}
                            />
                        </label>
                        <label
                            className={`${cl.order__label} ${cl.label__text}`}
                        >
                            Ваш комментарий к заказу
                            <textarea
                                value={order}
                                onChange={e => setOrder(e.target.value)}
                                className={cl.order__textArea}
                                cols="auto"
                                rows="5"
                                placeholder="На моем мероприятии обязательно должен быть..."
                            ></textarea>
                        </label>
                        <label
                            className={`${cl.order__label} ${cl.label__checkbox}`}
                        >
                            <input
                                type="checkbox"
                                className={`${cl.order__input} ${cl.input__checkbox}`}
                                required
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                            />{" "}
                            - Нажимая на кнопку, вы подтверждаете своё
                            совершеннолетие, соглашаетесь на обработку
                            персональных данных в соответствии с условиями.
                        </label>
                        <button ref={btn} className={
                            [!formValid && btnAnimate ? cl.btnError : '', cl.order__button].join(' ')
                        }
                                onClick={(e) => createOrder(e)}>
                            {formStatus === 'Отправлено' ? (
                                <span>{formStatus} <FontAwesomeIcon icon={faCheck}/></span>) : formStatus}
                        </button>
                    </form>
                    <OrderFormContacts/>
                </div>
            </Container>
        </section>
    );
};

export default OrderForm;
