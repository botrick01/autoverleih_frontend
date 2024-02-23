import IRegisterRequest from "@/models/registerRequest.interface";
import axios, { AxiosError } from "axios";

const login = (username: string, password: string) => {
    try {
        let response = axios.post(`localhost:8080/login`, {username, password});
    } catch (e) {
        let error = e as AxiosError;
        throw new Error(error.message)
    }
}

const register = async (registerRequest: IRegisterRequest) => {
    try {
        let response = await axios.post(`localhost:8080/register`, registerRequest);
    } catch (e) {
        let error = e as AxiosError;
        throw new Error(error.message)
    }
}

const UserService = {
    login,
    register
}

export default UserService;