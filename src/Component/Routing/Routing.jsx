import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import { lazy, Suspense } from "react";
import MyLoader from "../ComponentLoader/ComponentLoader";

function Routing() {
    const Home = lazy(()=>import("../../Pages/Home"));
    const CoinDetailsPage = lazy(()=>import("../../Pages/CoinDetailsPage"))
    return(
      <Suspense fallback={<MyLoader />}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/details/:coinId" element={<CoinDetailsPage />} />
                </Route>
            </Routes>
      </Suspense>
    );

}

export default Routing;