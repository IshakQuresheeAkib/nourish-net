import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { enqueueSnackbar } from "notistack";
import Swal from "sweetalert2";

const RequestedFood = () => {

    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search); 
    const name = queryParams.get('name');

    const {data:requests,refetch} = useQuery({
        queryKey:['requests'],
        queryFn:()=>axios.get(`https://assignment-11-server-bice-zeta.vercel.app/requested-food?name=${name}`,{withCredentials:true})
    }) 

    const handleStatus = ({id,name}) => {
        console.log(id,name);

        Swal.fire({
            title: "Do you want to Deliver?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Deliver"
          })
          .then((result) => {
                   if (result.isConfirmed) {
                    axiosSecure.patch(`/requested-food`,{id,foodStatus:'Delivered'})
                    .then(result=>{
                        console.log(result);
                        if(result.data.modifiedCount){
                            axiosSecure.delete(`/available-foods/${name}`)
                            .then(result=> {
                                console.log(result)
                                enqueueSnackbar('Delivered Successfully!',{variant:'success'})
                                refetch()
                            })                            
                        }
                    })
                   }
   
          })
        
    }


    return (
        <div className="max-w-6xl mx-auto min-h-screen">
             <div className="overflow-x-auto">
                <h1 className="myHeading mb-10">Manage Each Food</h1>
                <table className="table">
                    <thead  className="myColor text-white text-xl">
                    <tr>
                        <th>Requester Name</th>
                        <th>Requester Email</th>
                        <th>Request Date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            requests && requests?.data?.map(request=><tr key={request._id}>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={request.userPhoto} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">{request.userName}</div>
                                    </div>
                                </div>
                                </td>
                                <td>{request.userEmail}</td>
                                <td>{request?.currentDate}</td>
                                <th>
                                <button onClick={()=>handleStatus({id:request._id,name:request.foodName})} className="myBtn text-xs">{request?.foodStatus === 'Delivered' ? 'Delivered' : 'Pending'}</button>
                                </th>
                            </tr>)
                        }
                    

                    </tbody>                      
                </table>
</div>
        </div>
    )}
export default RequestedFood;

