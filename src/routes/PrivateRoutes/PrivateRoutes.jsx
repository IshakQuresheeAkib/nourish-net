import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Loader from "../../components/Loader/Loader";



const PrivateRoutes = ({children}) => {
    
    const {user,loading} = useAuth();
    const {pathname} = useLocation();
    
    
    
    
    if (loading) {
        return <Loader></Loader>
        
    }

    if (!user) {
        return <Navigate to='/login' state={pathname}></Navigate>
    }

    return children;
};

export default PrivateRoutes;