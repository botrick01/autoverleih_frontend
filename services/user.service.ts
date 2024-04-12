import IRegisterRequest from "@/models/registerRequest.interface";
import axios, { AxiosError } from "axios";
import http from "../http-common";
import ILoginRequest from "@/models/loginRequest.interface";
import IUser from "@/models/user.interface";

const login = async (loginRequest: ILoginRequest) => {
  try {
    let response = await http.post(`/api/Auth/login`, loginRequest);
    if (response.status === 200) {
      let accessToken = response.data.token;
      typeof window !== "undefined"
        ? window.localStorage.setItem("accessToken", accessToken)
        : null;
    } else {
      throw Error();
    }
  } catch (e) {
    let error = e as AxiosError;
    throw new Error(error.message);
  }
};

const register = async (registerRequest: IRegisterRequest) => {
  try {
    let response = await http.post(`/api/Auth/register`, registerRequest);
    console.log(response);
  } catch (e: any) {
    throw new Error(e?.response?.data?.message);
  }
};

const currentUser = async (): Promise<IUser> => {
  try {
    let response = await http.get(`/api/User`);
    return response.data;
  } catch (e) {
    let error = e as AxiosError;
    throw new Error(error.message);
  }
};

const logout = () => {
  typeof window !== "undefined"
    ? window.localStorage.removeItem("accessToken")
    : null;
};

const UserService = {
  login,
  register,
  currentUser,
  logout,
};

export default UserService;
