import { MdAlternateEmail } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { enqueueSnackbar } from 'notistack';
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/3DitT1SpXK.json'
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';


const Login = () => {

    const {logIn,googleLogIn} = useAuth(); 
    const {state} = useLocation()
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        logIn(email,password)
        .then(async()=> {
            enqueueSnackbar('Logged in successfully!',{variant:'success'})
            navigate(state ? state : '/' )
            form.reset();
        })
        .catch(err=>{
            enqueueSnackbar(`${err}`,{variant:'error'})
        })
    }

    const handleGoogle = () => {
        googleLogIn()
        .then(()=> {
            enqueueSnackbar('Logged in successfully!',{variant:'success'})
            navigate(state ? state : '/' )
        })
        .catch(err=>{
            enqueueSnackbar(`${err}`,{variant:'error'})
        })
        
    }


    return (
        <div className='flex lg:flex-row flex-col gap-10 items-center justify-center md:px-20 px-6 min-h-screen my-14'>
            <Lottie animationData={loginAnimation} className='lg:w-1/2'></Lottie>
            <div className='shadow-xl rounded-xl border-black/5 p-10'>
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="myHeading w-fit mx-auto">Welcome Back!</h1>
                    <p className=" text-gray-500">
                        {`Your connection to our community begins here. Please enter your credentials to access your account and continue making a difference in our collective effort to reduce food waste and address hunger.`}
                    </p>
                </div>
                <button onClick={handleGoogle} type="submit" className="w-80 mt-10 mx-auto flex items-center justify-center shadow-md bg-slate-50  hover:shadow-lg hover:bg-slate-100 text-xl p-3 rounded-lg font-semibold cursor-pointer transition ease-in duration-500">
                <FcGoogle className='mr-3'/>                                        
                <span>Continue with Google</span>
                </button>
                <div className='flex items-center justify-center mx-auto mt-10'>
                    <hr className='w-20 text-darkRed mt-px mr-2'/>
                    <h1 className='text-center'>or</h1>
                    <hr className='w-20 text-darkRed mt-px ml-2'/>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-3 max-w-md space-y-4">
                    <div>
                        <label className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                name='email'
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                required
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
                                required
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
                <Helmet>
                    <title>NourishNet | Log in</title>
                </Helmet>
            </div> 
        </div>                           
    );
};

export default Login;