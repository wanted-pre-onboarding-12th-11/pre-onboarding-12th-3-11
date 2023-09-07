import axios from 'axios';
import {BASE_URL} from 'constants/constants';

class AxiosInstance {
    baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    instance(endPoint: string) {
        return axios.create({
            baseURL: this.baseUrl + endPoint,
        });
    }
}

const httpClient = new AxiosInstance(BASE_URL || '');

export const searchAPI = httpClient.instance('/sick');
