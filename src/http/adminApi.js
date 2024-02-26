import { $adminHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const login = async (name, password) => {
    const { data } = await $host.post("api/admin/login", { name, password });
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
};

export const check = async () => {
        const { data } = await $adminHost.get("api/admin/auth");
        localStorage.setItem("token", data.token);
        return jwtDecode(data.token);
};
