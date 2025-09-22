// import axios from "axios";
import axiosInstance from "../Helper/axiosInstance";


async function getCoinByMarket(page=1,currency=usd){
    const perPage = 10;
    try{
        const responce =await axiosInstance.get(`/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${page}&market_cap_desc`);
        console.log(responce);
        return responce.data;

    } catch{
        console.log("error in fetch data");
        return null;

    }
}

export default getCoinByMarket;