import { $adminHost, $host } from "./index";

export const createReview = async (review) =>{
    const {data} = await $adminHost.post('api/review', review)
    return data;
}
export const deleteReview = async (id) =>{
    const {data} = await $adminHost.delete('api/review', {data: {id: id}})
    return data;
}
export const fetchReviews = async () =>{
    const {data} = await $host.get('api/review')
    return data;
}