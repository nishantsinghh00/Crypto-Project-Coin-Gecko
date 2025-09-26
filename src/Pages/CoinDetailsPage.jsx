import { useParams } from "react-router-dom";

function CoinDetailsPage() {
    const coinId = useParams();
    console.log(coinId);
    return(
        <div>
            <h1>Coin Detail {coinId.coinId} </h1>
        </div>
    );
}
export default CoinDetailsPage;