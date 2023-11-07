import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import useAuth from "../hook/useAuth";
import Loader from "../components/Loader/Loader";

const Routes = () => {

    const {pathname} = useLocation();
    const {loading} = useAuth();


    return (
        <div className="overflow-hidden font-quicksand">
             <div>
                    {pathname === '/' ? <Home></Home> : <Navbar></Navbar>}
                </div> 
             <div className="my-24">{loading ? <Loader/> : <Outlet/>}</div>
             <Footer></Footer>
        </div>
    )}
export default Routes;