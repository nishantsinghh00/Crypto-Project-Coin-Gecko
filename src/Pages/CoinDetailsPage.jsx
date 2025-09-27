import { useParams } from "react-router-dom";
import getCoinDetails from "../Services/getCoinDetails";
import { useQuery } from "@tanstack/react-query";
import parse from "html-react-parser"
import currencyStore from "../Store/GlobalStore"
import CoinInfoContainer from "../Component/CoinInfo/CoinInfoContainer";

function CoinDetailsPage() {
    const {coinId} = useParams();
    const {currency} = currencyStore();
    const {data:coin,isLoading,isError} = useQuery({
        queryKey:['coins',coinId],
        queryFn:()=>getCoinDetails(coinId),
        cacheTime:1000*60*2,
        staleTime:100*60*2,
    });
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>Error: Something Wrong Happeand</h1>
    }
    return(
       <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500">
                <img 
                    alt={coin?.name}
                    src={coin?.image?.large}
                    className="h-52 mb-5"
                />
                <h1 className="text-4xl font-bold">
                    {coin?.name}
                </h1>
                <p className="w-full px-6 py-4">
                    {parse(coin?.description?.en)}
                </p>
                <div className="w-full flex flex-col md:flex-row md:justify-around ">
                    <div className="flex items-center mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">
                            Rank
                        </h2>
                        <span className="ml-3 text-xl">
                            {coin?.market_cap_rank}
                        </span>
                    </div>
                    <div className="flex items-center mb-4 md:mb-0">
                        <h2 className="text-xl font-bold text-yellow-400">
                            Current Price
                        </h2>
                        <span className="ml-3 text-xl">
                            {coin?.market_data.current_price[currency]}
                        </span>
                    </div>
                </div>
            </div>
            <div className="md:w-1/3">
               <CoinInfoContainer coinId={coinId} />
            </div>
       </div>
    );
}
export default CoinDetailsPage;