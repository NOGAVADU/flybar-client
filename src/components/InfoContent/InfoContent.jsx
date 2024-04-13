import ParagraphTitle from "../UI/Titles/ParagraphTitle";
import cl from "./InfoContent.module.css";

const InfoContent = ({ info, ...props }) => {
    return (
        <article {...props} className={cl.container}>
            {info.title && <ParagraphTitle className={cl.title}>{info.title}</ParagraphTitle>}
            <p className={cl.body}>{info.description}</p>
        </article>
    );
};

export default InfoContent;
