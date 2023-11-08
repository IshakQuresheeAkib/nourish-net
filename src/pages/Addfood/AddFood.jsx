import { enqueueSnackbar } from "notistack";
import useAuth from "../../hook/useAuth";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AddFood = () => {

    const {user} = useAuth();

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = form.foodQuantity.value;
        const donatorEmail = form.donatorEmail.value;
        const donatorImage = form.donatorImage.value;
        const donatorName = form.donatorName.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDateTime = form.expiredDateTime.value;
        const additionalNotes = form.additionalNotes.value;
        const foodStatus = form.foodStatus.value;


        const food = {foodName,foodImage,foodQuantity:parseInt(foodQuantity),donatorEmail,donatorImage,donatorName,pickupLocation,expiredDateTime,additionalNotes,foodStatus}
        console.log(food);

        axios.post('https://assignment-11-server-bice-zeta.vercel.app/available-foods',food)
        .then(data=>{
            console.log(data?.data);
            if (data?.data.insertedId) {
                enqueueSnackbar('Product added successfully!',{variant:'success'})
                form.reset();
            }
        })
         
        
    }

    return (
        <div className='my-24'>
            <Helmet>
                <title>NourishNet | Add Food</title>
            </Helmet>
            <div className="flex min-h-screen items-center justify-start bg-white px-3" data-aos='zoom-out-down'>
                <div className="mx-auto w-full max-w-3xl">
                <h1 className="myHeading" data-aos='zoom-in-down'>Add Food</h1>
                    <p className="mt-3">Cooked too much? Share it with those who need it. Add your surplus food here!</p>

                    <form onSubmit={handleAddProduct} className="my-10">
                        <div className="grid gap-10 sm:grid-cols-2">
                            <div className="relative z-0 mb-5">
                                <input type="text" name="foodName" required className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-base text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-bold text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-600">Name</label>
                            </div>
                            <div className="relative z-0 ">
                                <input type="text" name="foodImage" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-base text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-bold text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-600">Image</label>
                            </div>
                            <div className="relative z-0 mb-5">
                                <input type="number" name="foodQuantity" required className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-base text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-bold text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-600">Quantity <small>(no. of person to be served.)</small></label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="pickupLocation" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-base text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-bold text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-600">Pickup Location</label>
                            </div>
                            <div className="relative z-0 mb-5">
                                <input type="date" name="expiredDateTime" className="date peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-base text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-bold text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-600">Expired In</label>
                            </div>
                            <div className="relative z-0">
                                <input type="textarea" name="additionalNotes" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-base text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-bold text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-600">Additional Notes</label>                               
                            </div>
                            <div className="relative z-0 mb-5">
                                <input type="text" name="donatorImage" defaultValue={user?.photoURL} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-base text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-bold text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-600">Donator Image</label>                               
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="donatorEmail" required defaultValue={user?.email} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-base text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-bold text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-600">Donator Email</label>                               
                            </div>
                            <div className="relative z-0 mb-5">
                                <input type="text" name="donatorName" required defaultValue={user?.displayName} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-base text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-bold text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-600">Donator Name</label>                               
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="foodStatus" required disabled defaultValue='available' className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-base text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-bold text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-600">Food Status</label>                               
                            </div>
                           
                        </div>
                        <button type="submit" className="mt-5  myBtn">Add Food</button>
                    </form>
                </div>
            </div>
        </div>
    )}
export default AddFood;