import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../../Pages/Home";
import CoinDetailsPage from "../../Pages/CoinDetailsPage";

function Routing() {
    return(
        <Routes>
           <Route path="/" element={<MainLayout />}>
               <Route index element={<Home />} />
               <Route path="/details/:coinId" element={<CoinDetailsPage />} />
            </Route>
        </Routes>
    )

}

export default Routing;