import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import { lazy, Suspense } from "react";
import MyLoader from "../ComponentLoader/ComponentLoader";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";

function Routing() {
    const Home = lazy(()=>import("../../Pages/Home"));
    const CoinDetailsPage = lazy(()=>import("../../Pages/CoinDetailsPage"))
    return(
        <CustomErrorBoundary>
            <Routes>
                <Route path="/" element={<MainLayout/>} >

                    <Route index element={
                        <Suspense fallback={<MyLoader/>}>
                            <Home />
                        </Suspense>
                    } />
                    <Route path="/details/:coinId" element={
                        <Suspense fallback={<MyLoader />}>
                            <CoinDetailsPage />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </CustomErrorBoundary>
    );

}

export default Routing;