import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../hook/useAxiosSecure'
import { enqueueSnackbar } from "notistack";
import useAuth from "../../hook/useAuth";
import { Helmet } from "react-helmet-async";

const FoodRequest = () => {

    const {user} = useAuth()
    console.log(user?.email);
    const axiosSecure = useAxiosSecure();

    const {data,refetch} = useQuery({
        queryKey:['datas'],
        queryFn:()=> axiosSecure.get(`/requested-food/${user?.email}`)
    })

    console.log(data?.data);
    const handleDelete = id => {
        console.log(id);

        axiosSecure.delete(`/requested-food/${id}`)
        .then(result=>{
            console.log(result.data);
            if (result.data.deletedCount) {
                enqueueSnackbar('Request Deleted Successfully!',{variant:'success'})
                refetch()
            }
        })

    }

    return (
        <div className="max-w-6xl mx-auto min-h-screen">
            <Helmet>
                <title>NourishNet | Food Request</title>
            </Helmet>
             <div className="overflow-x-auto">
                <h1 className="myHeading mb-16">My Food Request</h1>
                <table className="table table-xs">
                    <thead  className="myColor text-white text-lg">
                    <tr>
                        <th>Donar Name</th>
                        <th>Pickup Location</th>
                        <th>Expire Date</th>
                        <th>Request Date</th>
                        <th>My Donation</th>
                        <th>Status</th>
                        <th className="pl-5">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            data && data?.data?.map(request=><tr key={request._id}>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12 ">
                                        <img src={request.donatorImage} alt="donar image" className="object-cover"/>
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold text-sm">{request.donatorName}</div>
                                    </div>
                                </div>
                                </td>
                                <td>{request.pickupLocation}</td>
                                <td>{request?.expiredDateTime.slice(0,10)}</td>
                                <td>{request?.currentDate}</td>
                                <td>$ {request?.donationMoney}</td>
                                <td>{request?.foodStatus}</td>
                                <th>
                                {
                                    request?.foodStatus === 'Available' && <button onClick={()=>handleDelete(request._id)} className="btn btn-sm text-xs normal-case">Cancel Request</button>
                                }
                                </th>
                            </tr>)
                        }
                    

                    </tbody>                      
                </table>
</div>
        </div>
    )}
export default FoodRequest;