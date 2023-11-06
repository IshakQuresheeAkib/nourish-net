import { useLoaderData } from "react-router-dom";
import FoodsCard from "../../components/FoodsCard/FoodsCard";

const AvailableFoods = () => {


    const foods = useLoaderData();

    return (
        <div className="">
             <h1 className="myHeading text-center w-fit mx-auto">Available Foods: {foods && foods?.length}</h1>
             <div className="flex justify-center gap-20 lg:px-20 px-5 my-20 flex-wrap">
             {
                foods && foods?.map(food=><FoodsCard key={food._id} food={food}></FoodsCard>) 
             }
             </div>
        </div>
    )}
export default AvailableFoods;