import { $adminHost, $host } from "./index";
//AdminAPI
export const createService = async (service) => {
    const { data } = await $adminHost.post("api/service", service);
    return data;
};

export const editService = async (service) => {
    const { data } = await $adminHost.put("api/service", service);
    return data;
};

export const deleteService = async (id) => {
    const { data } = await $adminHost.delete("api/service", { data: { id: id } });
    return data;
};

//PublicApi

export const fetchServices = async () => {
    const { data } = await $host.get("api/service");
    return data;
};

export const fetchOneService = async (id) => {
    const { data } = await $host.get("api/service/" + id);
    return data;
};

export const fetchServiceInfo = async (id) => {
    const { data } = await $host.get("api/service");
    return data;
};