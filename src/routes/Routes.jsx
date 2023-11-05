import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";

const Routes = () => {

    const {pathname} = useLocation();


    return (
        <div className="overflow-hidden font-quicksand">
             <div>
                    {pathname === '/' ? <Home></Home> : <Navbar></Navbar>}
                </div> 
             <div className=""><Outlet></Outlet></div>
             <Footer></Footer>
        </div>
    )}
export default Routes;