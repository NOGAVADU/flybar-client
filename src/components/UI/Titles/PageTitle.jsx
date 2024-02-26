import "./titles.css";

const PageTitle = ({ children, ...props }) => {
    return (
        <h1 className="title title-orange title-big title-margin" {...props}>
            {children}
        </h1>
    );
};

export default PageTitle;
