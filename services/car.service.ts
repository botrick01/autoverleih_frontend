import axios, { AxiosError } from "axios";

const getCars = () => {
    try {
        let response = axios.get(`localhost:8080/Cars`);
        return response;
    } catch (e) {
        let error = e as AxiosError;
        throw new Error(error.message);
    }
}

const Cars = {
    getCars
}

export default Cars;