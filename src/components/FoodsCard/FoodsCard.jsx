const FoodsCard = ({food}) => {
    return (
            <div className="relative pl-1 flex justify-center w-96 rounded-md hover:scale-105 duration-500 transform transition cursor-pointer">
                <div className="top-0 left-0 mt-3 px-2 rounded-md absolute z-30 myColor text-gray-100 text-xs md:text-sm font-medium md:block">{food.foodStatus}</div>
                <div className="top-0 left-0 h-2 md:h-3 mt-5 px-2 absolute z-20 bg-red-600"></div>
                <div className="top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-md absolute z-0 bg-red-600"></div>
                <div className=" pb-2 bg-white rounded-md shadow-xl z-10 ">
                    <div className="relative rounded-md">
                        <img src={food.foodImage} className=" w-96 h-64 object-cover rounded-t-md" alt=""/>
                        <div className="bottom-0 right-0 mb-2 mr-2 px-2 rounded-md absolute bg-orange-500 text-gray-100 text-xs font-medium">Food for: {food.foodQuantity}</div>
                    </div>
                    <div className="px-4 pb-10 flex flex-col justify-between h-64 gap-3 text-left">
                        {/* <!-- food Title --> */}
                        <div className="text-lg text-black/80 font-bold ">{food.foodName}</div>
                        <div className="flex gap-3 items-center">
                            <img src={food.donatorImage} className="w-10 h-10 avatar object-cover rounded-full" alt="" />
                            <div className="text-sm">
                            <p>Donated By:</p>
                            <p className="font-semibold">{food.donatorName}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            {/* <!-- Distance --> */}
                            <div className="flex justify-between item-center">
                                <p className="bg-gray-200 p-2 mr-2 rounded-full text-xs font-light text-gray-900">Expired in: {food.expiredDateTime}</p>
                            </div>
                        </div>
                        <div className="text-xs font-semibold ">
                            <h3>Pickup Location: {food.pickupLocation}</h3>
                            <p className="text-sm font-normal text-left pt-2 pb-10">{food.additionalNotes}</p>
                        </div>
                        <button className="myBtn absolute bottom-5 w-80 ">View Details</button>
                    </div>
                </div>
            </div> 

    )}
export default FoodsCard;