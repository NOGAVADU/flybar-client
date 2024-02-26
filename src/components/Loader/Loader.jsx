import cl from './Loader.module.css'

const Loader = () => {
    return (
        <div className={cl.loader__container}>
            <div className={cl.loader__spinner}></div>
        </div>
    );
};

export default Loader;