import FoodsCard from "../../components/FoodsCard/FoodsCard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from '../../components/Loader/Loader'
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {

    const checkboxRef = useRef()
    const navigate = useNavigate();
    const [isSort,setIsSort] = useState(false)
    const [search,setSearch] = useState('')
    const [foods,setFoods] = useState([])


    useEffect(()=>{
        axios.get(`https://assignment-11-server-bice-zeta.vercel.app/available-foods?isSort=${isSort}&search=${search}`)
        .then(result=>{
            setFoods(result?.data)
            console.log(result?.data);
        })
    },[isSort,search,navigate])


    const handleCheckboxChange = () => {
        const isChecked = checkboxRef.current.checked;
        console.log(isChecked);
        setIsSort(isChecked)
      };
      
    const handleSubmit = e => {
        e.preventDefault();
        console.log(search);
        const searchValue = e.target.search.value        
        setSearch(searchValue)
    }

    foods?.message === 'ERROR'


    return (
        <div>
            <Helmet>
                <title>NourishNet | Available Foods</title>
            </Helmet>
             <h1 className="myHeading text-center w-fit mx-auto">Available Foods: {foods ? foods?.length : <Loader></Loader>}</h1>
             <div className="flex justify-center mx-auto  mt-7 gap-10">
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Sort By Expire Date</span> 
                        <input type="checkbox" className="checkbox" ref={checkboxRef} onChange={handleCheckboxChange}/>
                    </label>
                </div>
                <form className="form-control"  onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" placeholder="Search…" name='search' className="input input-bordered" />
                        <button type="submit" className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </form>
             </div>
             <div>
             {
               foods?.message !== 'ERROR' ? 
               <div>
                {
                   foods?.length ? <div className="flex justify-center gap-20 lg:px-20 px-5 my-16 flex-wrap">{foods?.map(food=><FoodsCard key={food._id} food={food}></FoodsCard>) }</div>
                   : <Loader></Loader>
                }
                </div> : <div>
                <h1 className="text-center mt-20">No Food Available</h1>
                 <button onClick={()=>window.location.reload()} className="myBtn w-96 mt-16 mx-auto flex justify-center">Show All</button>
                </div>
             }
             </div>
        </div>
    )}
export default AvailableFoods;