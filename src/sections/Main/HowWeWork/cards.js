import {
    faBook,
    faGift,
    faHandshakeAlt,
    faMessage,
    faStamp,
} from "@fortawesome/free-solid-svg-icons";

const cards = [
    {
        img: faMessage,
        title: "Обращение",
        body: [
            "Принимаем запрос",
            "Внимательно изучаем все пожелания по мероприятию",
        ],
        step: 1,
    },
    {
        img: faHandshakeAlt,
        title: "Обсуждение",
        body: ["Предлагаем несколько вариантов КП (Коммерческое предложение) с учетом всех ваших пожеланий"],
        step: 2,
    },
    {
        img: faBook,
        title: "Вазирование",
        body: [
            "Заключаем и подписываем договор",
        ],
        step: 3,
    },
    {
        img: faStamp,
        title: "Реализация",
        body: [
            "Проводим мероприятие",
            "Предоставляем все закрывающие документы",
        ],
        step: 4,
    },

];

export default cards;
