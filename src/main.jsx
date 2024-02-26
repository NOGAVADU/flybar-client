import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AdminStore from "./store/AdminStore.js";
import ServiceStore from "./store/ServiceStore.js";
import TypeStore from "./store/TypeStore.js";
import PortfolioStore from "./store/PortfolioStore.js";
import "./css/variables.css";
import "./assets/fonts/fonts.css";
import "./css/nullstyle.css";
import "./css/index.css";

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Context.Provider
            value={{
                admin: new AdminStore(),
                portfolio: new PortfolioStore(),
                service: new ServiceStore(),
                type: new TypeStore(),
            }}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Context.Provider>
    </React.StrictMode>
);
