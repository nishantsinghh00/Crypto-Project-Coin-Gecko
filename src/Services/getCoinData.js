
import axiosInstance from "../Helper/axiosInstance";


async function getCoinData(id,days,interval,currency="usd"){
    try{
        const responce =await axiosInstance.get(`coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
        console.log(responce);
        return responce.data;

    } catch{
        console.log("error in fetch data");
        return null;

    }
}

export default getCoinData;