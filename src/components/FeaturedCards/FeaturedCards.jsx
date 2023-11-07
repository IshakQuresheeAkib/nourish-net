import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from '../../components/Loader/Loader'
import FoodsCard from "../FoodsCard/FoodsCard";
import { useNavigate } from "react-router-dom";

const FeaturedCards = () => {

    const navigate = useNavigate();
    const {data:cards,isLoading} = useQuery({
        queryKey:['featuredCards'],
        queryFn:()=>axios.get('https://assignment-11-server-bice-zeta.vercel.app/featured-foods')
    })

    if (isLoading) {
        return <Loader></Loader>
    }
    
    console.log(cards?.data);

    return (
        <div className="max-w-7xl mx-auto my-28">
             <h1 className="myHeading mb-20 mx-auto text-center w-fit">Featured Foods</h1>
             <div className="flex gap-10 flex-wrap">
             {
                cards?.data && cards?.data?.map(food=><FoodsCard key={food._id} food={food}></FoodsCard>) 
             }
             </div>
             <button onClick={()=>navigate('/available-foods')} className="myBtn w-96 mt-16 mx-auto flex justify-center">Show All</button>
        </div>
    )}
export default FeaturedCards;