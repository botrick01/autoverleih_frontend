import http from "@/http-common";
import axios, { AxiosError } from "axios";

const getCars = async (): Promise<ICar[]> => {
  try {
    let response = await http.get(`/api/Car`);
    return response.data;
  } catch (e) {
    let error = e as AxiosError;
    throw new Error(error.message);
  }
};

const createCar = async (car: ICar): Promise<string[]> => {
  try {
    let response = await http.post(`/api/Car`, car);
    return response.data;
  } catch (e: any) {
    console.log(e.message);
    throw new Error(e.message);
  }
};

const Cars = {
  getCars,
  createCar,
};

export default Cars;
