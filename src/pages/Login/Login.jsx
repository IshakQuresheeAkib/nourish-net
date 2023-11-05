import { MdAlternateEmail } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import useAuth from '../../hook/useAuth';
import { GrGoogle } from 'react-icons/gr';
import { enqueueSnackbar } from 'notistack';
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/login-animation.json'

const Login = () => {

    // const {logIn,googleLogIn} = useAuth(); 
    // const {state} = useLocation()
    // const navigate = useNavigate();

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
        
    //     logIn(email,password)
    //     .then(async()=> {
    //         enqueueSnackbar('Logged in successfully!',{variant:'success'})
    //         navigate(state ? state : '/' )
    //         form.reset();
    //     })
    //     .catch(err=>{
    //         enqueueSnackbar(`${err}`,{variant:'error'})
    //     })
    // }

    // const handleGoogle = () => {
    //     googleLogIn()
    //     .then(()=> {
    //         enqueueSnackbar('Logged in successfully!',{variant:'success'})
    //         navigate(state ? state : '/' )
    //     })
    //     .catch(err=>{
    //         enqueueSnackbar(`${err}`,{variant:'error'})
    //     })
        
    // }


    return (
        <div className='flex md:flex-row flex-col gap-10 items-center justify-center md:px-20 px-6 min-h-screen my-14'>
            <Lottie animationData={loginAnimation} className='md:w-1/2'></Lottie>
            <div className='shadow-xl rounded-xl border border-black/5 p-5'>
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Welcome Back!</h1>
                    <p className="mt-4 text-gray-500">
                        {`Log in to your account to access your personalized dashboard, view your saved cars, and continue your car-buying journey.`}
                    </p>
                </div>
                <form  className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                name='email'
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />
                            <span className="absolute inset-y-0 text-xl end-0 grid place-content-center px-4">
                                <MdAlternateEmail></MdAlternateEmail>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                name="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                            <span className="absolute text-xl inset-y-0 end-0 grid place-content-center px-4">
                                <AiFillEye></AiFillEye>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">                        
                        <input type="submit" className="inline-block btn bg-gradient-to-br from-darkRed to-lightRed rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white" value='Log in'/>
                        <p className="text-sm text-gray-500">
                        No account?
                        <Link to='/signup' className="underline underline-offset-4" href="">Sign up</Link>
                        </p>
                    </div>            
                    
                </form>
                <div className='flex items-center w-72 mx-auto mt-6'>
                    <hr className='w-20 text-darkRed mt-px mr-2'/>
                    <h1 className='text-center'>continue with</h1>
                    <hr className='w-20 text-darkRed mt-px ml-2'/>
                </div>
                <GrGoogle  className=' cursor-pointer hover:text-darkRed hover:scale-110 duration-300 mx-auto mt-2 text-2xl'></GrGoogle>
            </div> 
        </div>                           
    );
};

export default Login;