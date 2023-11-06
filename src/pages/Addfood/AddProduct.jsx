import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { enqueueSnackbar } from 'notistack';

    
AOS.init({
    duration: 200, 
});
AOS.refresh();


const AddProduct = () => {


    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value.toLowerCase();
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const products = {name,brandName,image,type,price,rating,description}
        console.log(products);
         
        fetch('https://new-car-canvas-server.vercel.app/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(products)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.insertedId) {
                enqueueSnackbar('Product added successfully!',{variant:'success'})
                form.reset();
            }
        })
        
    }

    return (
        <div className='my-24'>
            <div className="flex min-h-screen items-center justify-start bg-white px-3" data-aos='zoom-out-down'>
                <div className="mx-auto w-full max-w-lg">
                <h1 className="text-5xl mb-20 font-bold mt-10 text-center" data-aos='zoom-in-down'>Add Your Vehicle</h1>
                    <p className="mt-3">Seize the Opportunity to Showcase Your Vehicle - List It with Us Today!</p>

                    <form onSubmit={handleAddProduct} className="mt-10">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="relative z-0">
                                <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Name</label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="brandName" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Brand Name</label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="image" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Image URL</label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="type" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Type</label>
                            </div>
                            <div className="relative z-0">
                                <input type="number" name="price" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Price</label>
                            </div>
                            <div className="relative z-0">
                                <input type="number" step={0.01} name="rating" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Rating</label>
                                
                            </div>
                            <div className="relative z-0 col-span-2">
                                <textarea name="description" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Short Description</label>
                            </div>
                        </div>
                        <button type="submit" className="mt-5  bg-black px-10 btn  bg-gradient-to-bl from-lightRed to-darkRed text-white normal-case">Add Products</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;