import { $adminHost, $host } from "./index";

export const createClient = async (client) =>{
    const {data} = await $adminHost.post('api/client', client)
    return data;
}
export const deleteClient = async (id) =>{
    const {data} = await $adminHost.delete('api/client', {data: {id: id}})
    return data;
}
export const fetchClients = async () =>{
    const {data} = await $host.get('api/client')
    return data;
}