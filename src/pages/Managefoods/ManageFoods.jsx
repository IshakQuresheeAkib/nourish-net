import { useReactTable,getCoreRowModel,flexRender } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from '../../hook/useAxiosSecure'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageFoods = () => {

    const {user} = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [food,setFood] = useState({})
    
    const {data:items,refetch} = useQuery({
        queryKey:['foods','items'],
        queryFn:()=> axiosSecure.get(`/manage-my-foods?email=${user?.email}`)
    })
    const foods = items ? items?.data : []
    
    const data = useMemo(()=>foods,[foods])

    /** @type import('@tanstack/react-table').ColumnDef<any>*/

    const columns = [
        
        {
            header:'Donator Name',
            accessorKey:'donatorName',
            footer:'Name'
        },
        {
            header:'Food Name',
            accessorKey:'foodName',
            footer:'ID'
        },
        {
            header:'Expire in:',
            accessorKey:'expiredDateTime',
            footer:'ID'
        },       
        {
            header:'Food Status',
            accessorKey:'foodStatus',
            footer:'ID'
        }       
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel()});

    const handleEdit = id => {
        console.log(id);
        document.getElementById('my_modal_5').showModal()

        axiosSecure.get(`/available-foods/${id}?email=${user?.email}`)
        .then(result=>{
            setFood(result.data)
        })
    }

    const handleDelete = name => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://assignment-11-server-bice-zeta.vercel.app/available-foods/${name}`)
                .then(result=>{
                    console.log(result.data);
                    if (result.data.deletedCount) {
                        enqueueSnackbar('Food Deleted Successfully!',{variant:'success'})
                        refetch()
                    }
                })
              
            }
          })

    }
    const handleManage = foodName => {
        console.log(foodName);
        navigate(`/requested-food?name=${foodName}`)        
    }
    
    const handleUpdate = e =>{
        e.preventDefault();

        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = form.foodQuantity.value;
        const donatorName = form.donatorName.value;
        const donatorEmail = form.donatorEmail.value;
        const donatorImage = form.donatorImage.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDateTime = form.expiredDateTime.value;
        const foodStatus = form.foodStatus.value;
        const additionalNotes = form.additionalNotes.value;

        const updatedFood = {_id:food._id,foodName,foodImage,foodQuantity:parseInt(foodQuantity),donatorEmail,donatorImage,donatorName,pickupLocation,expiredDateTime,additionalNotes,foodStatus}

        axiosSecure.put('/available-foods',updatedFood)
        .then(result=>{
            if (result.data.modifiedCount) {
                enqueueSnackbar(`${foodName.toUpperCase()} Updated successfully!`,{variant:'success',autoHideDuration: 4000})
                refetch()
            }
        })
    }

    

    return (
        <div className="max-w-6xl mx-auto min-h-screen">
            <Helmet>
                <title>NourishNet | Manage My Food</title>
            </Helmet>
            <div className="overflow-x-auto">
                    <h1 className="myHeading mb-10">My Foods</h1>
                    <table className="table ">
                        <thead className="myColor text-white text-xl">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id} className="">
                                {headerGroup.headers.map(header=><th
                                key={header.id}>
                                    {flexRender(header.column.columnDef.header,header.getContext())}
                                    </th>
                                    )}
                                    <th className="pl-20">Action</th>
                            </tr>
                        ))}
                        </thead>
                        <tbody className="">                          
                            {table.getRowModel().rows?.map(row=>(
                                <tr key={row.id} className="hover">
                                    
                                    {row.getVisibleCells().map(cell=>(
                                        <td key={cell.id} className="">
                                            {flexRender(cell.column.columnDef.cell,cell.getContext())}
                                        </td>
                                    ))}
                                    <td>                               
                                        <button onClick={()=>handleEdit(row.original._id)} className="myBtn mr-3 btn-xs text-xs px-3 py-0">Edit</button>
                                        <button onClick={()=>handleDelete(row.original.foodName)} className="myBtn mr-3 btn-xs text-xs px-3 py-0">Delete</button>
                                        <button onClick={()=>handleManage(row.original.foodName)} className="myBtn btn-xs text-xs px-3 py-0">Manage</button>                      
                                    </td>                            
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
            <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle w-1/2 mx-auto">
            <div className="modal-box">
                <h1 className="myHeading mb-10">Update Info</h1>
                {
                    food && <form  onSubmit={handleUpdate} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Food Name:</label>
                    <input type="text" name='foodName' defaultValue={food.foodName} className="w-80 p-2 bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Image:</label>
                    <input type="text" name='foodImage' defaultValue={food.foodImage} className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Food Quantity: <small>(no. of person to be served.)</small></label>
                    <input type="number" name='foodQuantity' defaultValue={food.foodQuantity} className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Donator Name:</label>
                    <input type="text" name='donatorName' defaultValue={food.donatorName} className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Donator Email:</label>
                    <input type="text" name='donatorEmail' defaultValue={food.donatorEmail} className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Donator Image:</label>
                    <input type="text" name='donatorImage' defaultValue={food.donatorImage} className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Pickup Location:</label>
                    <input type="text" name='pickupLocation' defaultValue={food.pickupLocation} className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Food Status:</label>
                    <input type="text" name='foodStatus' defaultValue={food.foodStatus} className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="modalText" className="text-xs">Additional Notes:</label>
                    <textarea type="text" name='additionalNotes' defaultValue={food.additionalNotes} className="w-80 p-2 bg-slate-100 text-sm rounded-md"/>
                    </div>
                    <input type="submit" className="myBtn w-36" value='Update'/>                   
                </form>
                }
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</button>
                </form>
                </div>
            </div>
            </dialog>
            </div>
        </div>
    )}
export default ManageFoods;