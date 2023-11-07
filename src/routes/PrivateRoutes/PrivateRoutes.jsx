import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Loader from "../../components/Loader/Loader";
import { enqueueSnackbar } from "notistack";



const PrivateRoutes = ({children}) => {
    
    const {user,loading} = useAuth();
    const {pathname} = useLocation();
          
    if (loading) {
        return <Loader></Loader>
        
    }

    if (!user) {
        enqueueSnackbar('Log in to explore More!',{variant:'warning'})
        return <Navigate to='/login' state={pathname}></Navigate>
    }

    return children;
};

export default PrivateRoutes;