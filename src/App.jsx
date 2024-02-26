import { observer } from "mobx-react-lite";
import AppRouter from "./components/AppRouter";
import "./css/App.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "./main";
import { check } from "./http/adminApi";
import Loader from "./components/Loader/Loader.jsx";

const App = observer(() => {
    const { admin } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            check()
                .then((data) => {
                    admin.setAdmin(data);
                    admin.setIsAuth(true);
                })
                .finally(() => {
                       setLoading(false);
                });
        }
        setLoading(false)
    }, []);
    if (loading) {
        return <Loader/>
    }
    return (
        <>
            <AppRouter />
        </>
    );
});

export default App;
