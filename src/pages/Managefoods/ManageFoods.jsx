import { useReactTable,getCoreRowModel,flexRender } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from '../../hook/useAxiosSecure'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const ManageFoods = () => {

    const {user} = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [food,setFood] = useState({})

    const {data:items,refetch} = useQuery({
        queryKey:['foods','items'],
        queryFn:()=> axios.get(`http://localhost:5000/manage-my-foods?email=${user?.email}`)
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
        },
        
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel()});

    const handleEdit = id => {
        document.getElementById('my_modal_5').showModal()

        axiosSecure.get(`/available-foods/${id}`)
        .then(result=>{
            setFood(result.data)
        })
    }

    const handleDelete = id => {
        console.log(id);

        axios.delete(`http://localhost:5000/available-foods/${id}`)
        .then(result=>{
            console.log(result.data);
            if (result.data.deletedCount) {
                enqueueSnackbar('Food Deleted Successfully!',{variant:'success'})
                refetch()
            }
        })

    }
    const handleManage = id => {
        console.log(id);
        navigate(`/available-foods/`)
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

        const updatedFood = {_id:food._id,foodName,foodImage,foodQuantity,donatorEmail,donatorImage,donatorName,pickupLocation,expiredDateTime,additionalNotes,foodStatus}

        axiosSecure.put('/available-foods',updatedFood)
        .then(result=>{
            if (result.data.modifiedCount) {
                enqueueSnackbar(`${foodName.toUpperCase()} Updated successfully!`,{variant:'success',autoHideDuration: 4000})
                refetch()
            }
        })
    }



    return (
        <div className="lg:px-20 mx-auto px-5">
            <div className="w3-container max-w-4xl mx-auto">
                    <h1 className="myHeading mb-10 text-center w-fit mx-auto">My Foods</h1>
                    <table className="w3-table-all">
                        <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header=><th
                                key={header.id}>
                                    {flexRender(header.column.columnDef.header,header.getContext())}
                                    </th>
                                    )}
                            </tr>
                        ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows?.map(row=>(
                                <tr key={row.id}>
                                    {row.getVisibleCells().map(cell=>(
                                        <td key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell,cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-20 justify-center items-center place-items-center">
                {
                    foods && foods.map(food=> <div className="card w-96  rounded-lg bg-slate-100 border-2 border-slate-100" key={food._id}>
                        <img src={food.foodImage} alt="" className="h-80 rounded-t-lg w-full object-cover"/>
                        <div className="p-5">
                            <h1 className="font-bold text-2xl">{food.foodName}</h1>
                            <p>Food for: {food.foodQuantity} Person</p>
                            <p>Expire in: {food.expiredDateTime}</p>
                            <p>Pickup Location: {food.pickupLocation}</p>
                            <div className="flex justify-between my-5">
                                <button onClick={()=>handleEdit(food._id)} className="myBtn">Edit</button>
                                <button onClick={()=>handleDelete(food._id)} className="myBtn">Delete</button>
                            </div>
                            <button onClick={()=>handleManage(food._id)}  className="btn btn-outline w-full border-red-600 text-red-600">Manage</button>
                        </div>
                    </div> )
                }
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
                    <label htmlFor="modalText" className="text-xs">Expire Date:</label>
                    <input type="text" name='expiredDateTime' defaultValue={food.expiredDateTime} className="w-80 p-2  bg-slate-100 text-sm rounded-md"/>
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