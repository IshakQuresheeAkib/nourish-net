import { GiRoundStruck } from "react-icons/gi";

const Loader = () => {
    return (
        <div className="flex justify-center h-screen items-center">
        <GiRoundStruck  className='animate-ping text-red-600 -rotate-180 text-4xl h-20'></GiRoundStruck> 
    </div>
    )}
export default Loader;