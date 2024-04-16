import cl from './OrderForm.module.css'

const OrderFormContacts = () => {
    return (
        <div className={cl.order__contacts}>
            <h3 className={cl.contacts__title}>
                Остались вопросы?
            </h3>
            <address className={cl.contacts__links}>
                <a
                    className={cl.contacts__link}
                    href="tel:+74952207061"
                >
                    +7 495 220 7061
                </a>
                <a
                    className={cl.contacts__link}
                    href="mailto:ingo@flybar.ru"
                >
                    info@flybar.ru
                </a>
            </address>
            <h4 className={cl.contacts__subtitle}>
                Пишите или звоните нам - будем рады на них ответить!
            </h4>
        </div>
    );
};

export default OrderFormContacts;