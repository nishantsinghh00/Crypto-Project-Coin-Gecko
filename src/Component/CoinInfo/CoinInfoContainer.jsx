import { useState } from "react";
import getCoinData from "../../Services/getCoinData";
import CoinInfo from "./CoinInfo";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import MyLoader from "../ComponentLoader/ComponentLoader";
import currencyStore from "../../Store/GlobalStore"
import { useQuery } from "@tanstack/react-query";

function CoinInfoContainer({coinId}){
    const [days,setDays] = useState(7);
    const {currency} = currencyStore();
    const [interval,setInterval] = useState("");

    const {data:historicData,isLoading,error} = useQuery({
        queryKey:['coins',],
        queryFn:()=>getCoinData(coinId,days,interval,currency),
        cacheTime:1000*60*2,
        staleTime:100*60*2,
    });
    if(isLoading){
        return <MyLoader />
    }
    if(error){
        return <ErrorComponent type ="error" error="Something went wrong"/>
    }
    return(
        <CoinInfo historicData={historicData} setDays={setDays} setInterval={setInterval} days={days} currency={currency}/>
    );
}

export default CoinInfoContainer;