import "./titles.css";

const ParagraphTitle = ({ children, ...props }) => {
    return <h3 className="title" {...props}>{children}</h3>;
};

export default ParagraphTitle;
