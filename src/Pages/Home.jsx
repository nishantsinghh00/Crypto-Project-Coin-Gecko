import Banner from "../Component/Banner/Banner";
import CoinTable from "../Component/CoinTable/CoinTable";
import Navbar from "../Component/Navbar/Navbar";

function Home() {

    return(
        <>
            <Navbar />
            <Banner/>
            <CoinTable />
        </>
    )

}

export default Home;