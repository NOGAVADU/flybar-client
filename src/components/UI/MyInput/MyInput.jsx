import cl from "./MyInput.module.css";

const MyInput = ({ title = "", ...props }) => {
    return (
        <label className={cl.myLabel}>
            {title}
            <input {...props} className={cl.myInput} />
        </label>
    );
};

export default MyInput;
