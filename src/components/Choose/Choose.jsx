import { useEffect, useState } from "react";
import cl from "./Choose.module.css";

const Choose = ({
    title,
    leftColTitle,
    rightColTitle,
    data,
    choosen,
    setChoosen,
}) => {
    const [unchoosen, setUnchoosen] = useState([]);

    useEffect(() => {
        data().then((data) => setUnchoosen(data));
    }, []);

    function add(element) {
        setUnchoosen(unchoosen.filter((s) => s.id !== element.id));
        setChoosen([...choosen, element]);
    }

    function remove(element) {
        setChoosen(choosen.filter((s) => s.id !== element.id));
        setUnchoosen([...unchoosen, element]);
    }

    return (
        <div className={cl.choose}>
            <h4 className={cl.choose__title}>{title}</h4>
            <div className={cl.choose__container}>
                <div className={cl.choose__col}>
                    <h5 className={cl.col__title}>{leftColTitle}</h5>
                    {unchoosen.map((element) => (
                        <p
                            className={cl.col__element}
                            key={element.id}
                            onClick={() => add(element)}
                        >
                            {element.name}
                        </p>
                    ))}
                </div>
                <div className={cl.choose__col}>
                    <h5 className={cl.col__title}>{rightColTitle}</h5>
                    {choosen.map((element) => (
                        <p
                            className={cl.col__element}
                            key={element.id}
                            onClick={() => remove(element)}
                        >
                            {element.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Choose;
