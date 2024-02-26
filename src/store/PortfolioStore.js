import { makeAutoObservable } from "mobx";

export default class ServiceStore {
    constructor() {
        this._portfolioType = [];
        this._gallery = [];

        makeAutoObservable(this);
    }

    setPortfolioTypes(type) {
        this._portfolioType = type;
    }

    setGalleries(gallery) {
        this._galleries = gallery;
    }

    get portfolioType() {
        return this._portfolioType;
    }

    get gallery() {
        return this._galleries;
    }
}
