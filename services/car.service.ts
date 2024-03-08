import http from "@/http-common";
import axios, { AxiosError } from "axios";

const getCars = async (): Promise<string[]> => {
    try {
        let response = await http.get(`/api/Car`);
        return response.data;
    } catch (e) {
        let error = e as AxiosError;
        throw new Error(error.message);
    }
}

const Cars = {
    getCars
}

export default Cars;