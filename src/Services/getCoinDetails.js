
import axiosInstance from "../Helper/axiosInstance";


async function getCoinDetails(id){
    try{
        const responce =await axiosInstance.get(`coins/${id}`);
        console.log(responce);
        return responce.data;

    } catch{
        console.log("error in fetch data");
        return null;

    }
}

export default getCoinDetails;