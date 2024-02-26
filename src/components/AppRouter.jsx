import { Route, Routes } from "react-router-dom";
import { adminRoutes, publicRoutes } from "../routes";
import NotFound from "../pages/NotFound";
import { useContext } from "react";
import { Context } from "../main";
import Layout from "./Layout";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
    const { admin } = useContext(Context);
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {admin.isAuth &&
                    adminRoutes.map(({ path, Component }) => {
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={<Component />}
                                exact
                            />
                        );
                    })}
                {publicRoutes.map(({ path, Component }) => {
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={<Component />}
                            exact
                        />
                    );
                })}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
});

export default AppRouter;
