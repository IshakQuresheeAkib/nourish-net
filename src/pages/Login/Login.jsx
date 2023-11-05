import { MdAlternateEmail } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import useAuth from '../../hook/useAuth';
import { GrGoogle } from 'react-icons/gr';
import { enqueueSnackbar } from 'notistack';
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/3DitT1SpXK.json'

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
            <div className='shadow-xl rounded-xl  h-[80vh] border-black/5 p-10'>
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="myHeading w-fit mx-auto">Welcome Back!</h1>
                    <p className="mt-6 text-gray-500">
                        {`Your connection to our community begins here. Please enter your credentials to access your account and continue making a difference in our collective effort to reduce food waste and address hunger.`}
                    </p>
                </div>
                <button type="submit" className="w-96 mt-10 mx-auto flex items-center justify-center mb-6 md:mb-0 border  hover:border-gray-900 hover:bg-gray-900 text-sm  p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500">
                            <svg  className="w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/></svg>
                                        
                                    <span>Google</span>
                </button>
                <form  className="mx-auto mb-0 mt-9 max-w-md space-y-4">
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
                        <input type="submit" className="inline-block myBtn" value='Log in'/>
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