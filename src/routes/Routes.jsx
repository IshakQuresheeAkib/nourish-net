import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";

const Routes = () => {

    const {pathname} = useLocation();


    return (
        <div className="overflow-hidden font-quicksand">
             <div>
                    {pathname === '/' ? <Home></Home> : <Navbar></Navbar>}
                </div> 
             <div className="min-h-screen mt-28"><Outlet></Outlet></div>
        </div>
    )}
export default Routes;