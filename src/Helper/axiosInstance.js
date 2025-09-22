import axios from "axios";
import { Coin_Gecko_url } from "./constant";


const axiosInstance = axios.create({
    baseURL:Coin_Gecko_url,
});

export default axiosInstance;