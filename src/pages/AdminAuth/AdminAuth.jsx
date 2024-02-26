import { useContext, useState } from "react";
import Container from "../../components/UI/Container/Container";
import { login } from "../../http/adminApi";
import cl from "./AdminAuth.module.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../../utils/consts";

const AdminAuth = observer(() => {
    const { admin } = useContext(Context);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async (name, password) => {
        try {
            const data = await login(name, password);
            admin.setAdmin(admin);
            admin.setIsAuth(true);
            navigate(MAIN_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
    };
    return (
        <Container>
            <article className={cl.auth__container}>
                <h2 className={cl.auth__title}>Вход в админку</h2>
                <form className={cl.auth__form} action="">
                    <input
                        className={cl.auth__formInput}
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        placeholder="Введите имя:"
                    />
                    <input
                        className={cl.auth__formInput}
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        placeholder="Введите пароль:"
                    />
                    <button
                        className={cl.auth__formBtn}
                        onClick={(e) => {
                            e.preventDefault();
                            signIn(name, password);
                        }}
                    >
                        Войти
                    </button>
                </form>
            </article>
        </Container>
    );
});

export default AdminAuth;
