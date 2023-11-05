import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { GiRoundStruck } from 'react-icons/gi';



const PrivateRoutes = ({children}) => {
    
    const {user,loading} = useAuth();
    const {pathname} = useLocation();
    
    
    
    
    if (loading) {
        return <div className="flex justify-center h-screen items-center">
        <GiRoundStruck  className='animate-ping text-red-600 -rotate-180 text-4xl h-20'></GiRoundStruck> 
    </div>
        
    }

    if (!user) {
        return <Navigate to='/login' state={pathname}></Navigate>
    }

    return children;
};

export default PrivateRoutes;