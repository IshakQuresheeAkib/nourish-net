import { MdAlternateEmail } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import { BiSolidImage } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { enqueueSnackbar } from 'notistack';
import Lottie from 'lottie-react';
import createAccount from '../../assets/klRshCwrAK.json'

const Signup = () => {

    const {createUser} = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.email.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {email,password};
        console.log(newUser);


        // if (!/(?=.*[!#$%&?^*@~() "])/.test(password)) {
        //     return enqueueSnackbar('Password should have a special character!',{variant:'error'})
        // }else if (!/[A-Z]/.test(password)) {
        //     return enqueueSnackbar('Password should have a capital letter !',{variant:'error'})
        // }else if(!/(?=.{8,})/.test(password)){
        //     return enqueueSnackbar('Password should have minimum six character !',{variant:'error'})
        // }

        createUser(email,password)
        .then(()=>{
            enqueueSnackbar('Account created successfully!',{variant:'success'})
        })
        .catch(err=>{
            enqueueSnackbar(`${err}`,{variant:'error'})
        })
    }

    return (
        <div className='flex md:flex-row flex-col gap-10 items-center justify-center md:px-20 px-6 min-h-screen my-14'>
            <Lottie animationData={createAccount} className='md:w-1/2'></Lottie>
            <div className='shadow-xl rounded-xl border-black/5 p-10'>
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="myHeading w-fit mx-auto">Get started today!</h1>
                    <p className="mt-6 text-gray-500">
                        {`Welcome to our car enthusiast community. Create your account to unlock exclusive features, save your favorite cars, and take the next step in your car-buying experience.`}
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-6 max-w-md space-y-4">
                    <div>
                        <label className="sr-only">Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                name='name'
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Name"
                            />
                            <span className="absolute inset-y-0 text-xl end-0 grid place-content-center px-4">
                                <CiUser/>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">Photo Url</label>
                        <div className="relative">
                            <input
                                type="text"
                                name='photo'
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Photo Url"
                            />
                            <span className="absolute inset-y-0 text-xl end-0 grid place-content-center px-4">
                                <BiSolidImage></BiSolidImage>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                name='email'
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Email"
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
                                placeholder="Password"
                            />
                            <span className="absolute text-xl inset-y-0 end-0 grid place-content-center px-4">
                                <AiFillEye></AiFillEye>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">                        
                        <input type="submit" className="inline-block myBtn" value='Sign up'/>
                        <p className="text-sm text-gray-500">
                        Already have an account?
                        <Link to='/login' className="underline underline-offset-4" href="">Log in</Link>
                        </p>
                    </div>            
                    
                </form>
            </div>                    
        </div>
    );
};

export default Signup;
