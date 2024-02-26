import cl from "./Container.module.css";

const Container = ({
    children,
    center = false,
    margin = false,
    padding = false,
    classes = [],
    ...props
}) => {
    const classNames = [cl.container];
    if (center) classNames.push(cl.centered);
    if (padding) classNames.push(cl.padding);
    if (classes) classNames.push(classes);

    return <div className={classNames.join(" ")} {...props}>{children}</div>;
};

export default Container;
