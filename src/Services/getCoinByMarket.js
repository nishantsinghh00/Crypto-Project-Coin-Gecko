// import axios from "axios";
import axiosInstance from "../Helper/axiosInstance";


async function getCoinByMarket(){
    try{
        const responce =await axiosInstance.get("/coins/markets?vs_currency=usd");
        console.log(responce);
        return responce;

    } catch{
        console.log("error in fetch data");
        return null;

    }
}

export default getCoinByMarket;