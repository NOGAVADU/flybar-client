import { $adminHost, $host } from "./index";

export const sendOrder = async (order) =>{
    const {data} = await $host.post('api/telegram/order', order)
    return data;
}
export const sendCallback = async (callback) =>{
    const {data} = await $host.post('api/telegram/callback', callback)
    return data;
}