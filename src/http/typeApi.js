import { $adminHost, $host } from "./index";

//AdminAPI

export const createType = async (type) => {
    const { data } = await $adminHost.post("api/type", type);
    return data;
};

export const editType = async (type) => {
    const { data } = await $adminHost.put("api/type", type);
    return data;
};

export const deleteType = async (id) => {
    console.log(id);
    const { data } = await $adminHost.delete("api/type", { data: { id: id } });
    return data;
};

export const createTypeService = async (type, service) => {
    const { data } = await $adminHost.post("api/servicetype", {
        typeId: type.value.id,
        serviceId: service.id,
    });
    return data;
};

export const clearTypeServices = async (type) => {
    const { data } = await $adminHost.delete("api/servicetype", {
        data: { id: type.value.id },
    });
    return data;
};

//PublicApi

export const fetchTypes = async () => {
    const { data } = await $host.get("api/type");
    return data;
};
