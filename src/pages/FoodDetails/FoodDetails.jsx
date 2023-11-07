import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import useAuth from "../../hook/useAuth";
import { enqueueSnackbar } from "notistack";
import useAxiosSecure from "../../hook/useAxiosSecure";
import CurrentDate from "../../components/CurrentDate/CurrentDate";
import { Helmet } from "react-helmet-async";

const FoodDetails = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const { isLoading, data,refetch } = useQuery({
        queryKey: ['foodData'],
        queryFn: () => axiosSecure.get(`/available-foods/${id}?email=${user?.email}`)
      })

      

      if (isLoading) {
        return <Loader></Loader>
      }

      const foodDetails = data && data?.data

      const {foodImage,foodQuantity,foodName,expiredDateTime,pickupLocation,additionalNotes,donatorImage,donatorName,donatorEmail,foodStatus} = foodDetails || {}

      const currentDate = CurrentDate();

      const handleRequest = (e)=>{
        e.preventDefault();
        const form = e.target
        const donationMoney = form.donationMoney.value;
        const updatedNotes = form.updatedNotes.value;
        const userName= user?.displayName
        const userEmail= user?.email
        const userPhoto= user?.photoURL
        const foodRequest = {foodImage,foodName,expiredDateTime,pickupLocation,donatorImage,donatorName,donatorEmail,userEmail,userName,userPhoto,currentDate,additionalNotes:updatedNotes,donationMoney,foodStatus}
        
        axiosSecure.post('/requested-food',foodRequest)
        .then(result=>{
        console.log(result.data);
        if (result.data.insertedId) {
            enqueueSnackbar(`You've Requested ${foodName} Successfully!`,{variant:'success',autoHideDuration:4000})
            refetch();
        }
    })

        axios.patch('https://assignment-11-server-bice-zeta.vercel.app/available-foods',{id,foodQuantity})
        .then(result=>  {
            if (result.data?.deletedCount) {
                navigate('/available-foods')
                enqueueSnackbar(`${foodName} isn't available now!`,{autoHideDuration:4000})
            }
            refetch()
        })
      }

    return (
        <div className="md:px-20">
            <Helmet>
                <title>NourishNet | Food Details</title>
            </Helmet>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={foodImage} className="md:max-w-xl max-w-sm rounded-lg shadow-xl" />
                    <div>
                    <h1 className="myHeading">{foodName}</h1>
                    <ul>
                        <li className="list-inside list-disc">Food for: {foodQuantity} Person</li>
                        <li className="list-inside list-disc">Pickup Location: {pickupLocation}</li>
                        <li className="list-inside list-disc">Expired Date: {expiredDateTime}</li>
                        <li className="list-inside list-disc">Additional information: {additionalNotes}</li>
                    </ul>
                    <div className="flex gap-3 items-center mt-6">
                            <img src={donatorImage} className="w-20 h-20 rounded-full" alt="" />
                            <div className="text-sm">
                            <p>Donated By:</p>
                            <p className="font-semibold">{donatorName}</p>
                            <small>Contact: {donatorEmail}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="flex justify-center w-fit mx-auto myBtn my-14">Request for Food</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle lg:w-1/2 mx-auto px-2">
            <div className="modal-box">
                {
                    foodDetails && <form onSubmit={handleRequest} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Food Name:</label>
                    <input type="text" name='modalText' value={foodName} disabled className="w-80 p-2 bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Image:</label>
                    <input type="text" value={foodImage} disabled className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">ID:</label>
                    <input type="text"value={id.toUpperCase()} disabled className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Donator Name:</label>
                    <input type="text"value={donatorName} disabled className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Donator Email:</label>
                    <input type="text" value={donatorEmail} disabled className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">User Email:</label>
                    <input type="text" name='modalText' value={user?.email} disabled className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Date:</label>
                    <input type="text" value={new Date()} disabled className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Pickup Location:</label>
                    <input type="text" value={pickupLocation} disabled className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Expire Date:</label>
                    <input type="text" value={expiredDateTime} disabled className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Additional Notes:</label>
                    <textarea type="text" name='updatedNotes' defaultValue={additionalNotes} className="w-80 p-2 bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Donation Money: <small>($)</small> </label>
                    <input type="number" name='donationMoney' className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <input type="submit" className="myBtn w-36" value='Request'/>
                </form>
                }
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                </div>
            </div>
            </dialog>
        </div>
    )}
export default FoodDetails;

