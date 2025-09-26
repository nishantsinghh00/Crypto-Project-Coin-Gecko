
import axiosInstance from "../Helper/axiosInstance";


async function getCoinByMarket(id){
    const perPage = 10;
    try{
        const responce =await axiosInstance.get(``);
        console.log(responce);
        return responce.data;

    } catch{
        console.log("error in fetch data");
        return null;

    }
}

export default getCoinByMarket;