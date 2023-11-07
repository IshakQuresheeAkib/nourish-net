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
             <h1 className="myHeading  mx-auto text-center w-fit">Featured Foods</h1>
             <p className="mb-20 lg:w-1/2 text-center mx-auto pt-4">Big Portions for Those in Need: Serving Up More Goodness, One Hearty Meal at a Time - Offering a Variety of Food, Sorted by How Much You Get!</p>
             <div className="flex gap-10 flex-wrap justify-center">
             {
                cards?.data && cards?.data?.map(food=><FoodsCard key={food._id} food={food}></FoodsCard>) 
             }
             </div>
             <button onClick={()=>navigate('/available-foods')} className="myBtn w-96 mt-16 mx-auto flex justify-center">Show All</button>
        </div>
    )}
export default FeaturedCards;