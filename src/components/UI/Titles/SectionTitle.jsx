import "./titles.css";

const SectionTitle = ({ children, classes = [], ...props }) => {
    return (
        <h2
            className={"title title-big title-shadow" + ` ${classes.join(" ")}`}
            {...props}
        >
            {children}
        </h2>
    );
};

export default SectionTitle;
