import { $adminHost, $host } from "./index";
import gallery from "../pages/Gallery.jsx";
//AdminAPI

export const createPortfolioType = async (type) => {
    const {data} = await $adminHost.post('api/portfoliotype', type)
    return data
}
export const deletePortfolioType = async (id) => {
    const {data} = await $adminHost.delete('api/portfoliotype', {data : {id: id}})
    return data
}

export const createGallery = async (gallery) => {
    const {data} = await $adminHost.post('api/typegallery', gallery)
    return data
}

export const createGalleryPhoto = async (photo) => {
    const {data} = await $adminHost.post('api/galleryphoto', photo)
    return data
}

export const deleteGallery = async (id) => {
    const {data} = await $adminHost.delete('api/typegallery', {data: {id: id}})
    return data
}

//PublicApi

export const fetchPortfolioTypes = async () => {
    const { data } = await $host.get("api/portfoliotype");
    return data;
};

export const fetchPortfolioType = async (id) => {
    const { data } = await $host.get("api/portfoliotype/" + id);
    return data;
};

export const fetchPortfolioTypeGalleries = async (id) => {
    const { data } = await $host.get("api/typegallery", {
        params: { portfolioTypeId: id },
    });
    return data;
};

export const fetchPortfolioGallery = async (id) => {
    const { data } = await $host.get("api/typegallery/" + id);
    return data;
};
export const fetchGalleries = async () => {
    const { data } = await $host.get("api/typegallery/");
    return data;
};

export const fetchGalleryPhotos = async (id) => {
    const { data } = await $host.get("api/galleryphoto", {
        params: { galleryId: id },
    });
    return data;
};
