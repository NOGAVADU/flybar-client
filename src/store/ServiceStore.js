import { makeAutoObservable } from "mobx";

export default class ServiceStore {
    constructor() {
        this._types = [];
        this._services = [];

        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setServices(services) {
        this._services = services;
    }

    get types() {
        return this._types;
    }

    get services() {
        return this._services;
    }
}
