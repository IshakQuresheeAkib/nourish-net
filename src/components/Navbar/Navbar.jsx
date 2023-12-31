import { NavLink, useNavigate } from "react-router-dom";
import { stack as Menu } from 'react-burger-menu'
import './navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { enqueueSnackbar } from 'notistack';
import useAuth from "../../hook/useAuth";
import loginButton from '../../assets/login-button.json'
import Lottie from "lottie-react";

const Navbar = () => {

    const {user,logOut} = useAuth();
    const navigate = useNavigate();

    const navbarItems1 = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'Available Foods', link: '/available-foods'},

        { id: 7, title: 'FAQ', link: '/faq'}
      ];
    const navbarItems2 = [
        { id: 10, title: 'Add Food', link: '/add-food'},
        { id: 3, title: 'Manage My Foods ', link: '/manage-my-foods' },
        { id: 4, title: 'My Food Request', link: '/my-food-request' },
      ];



    AOS.init({
        duration: 1200, 
    });
    AOS.refresh();
 
    const handleLogin = () => {
        if (!user) {
            return navigate('/login');
        }
        logOut()
        .then(()=>{
            enqueueSnackbar('Logged Out Successfully!',{variant:'success'})
        })
    }
      
   
    return (
        <div className="relative w-full h-full font-semibold p-2">
            <nav className="flex justify-between items-center md:pt-3 md:px-20 pl-10" data-aos='slide-down'>
                <div >
                    <h1 onClick={()=>navigate('/')} className="font-bold md:text-5xl text-4xl font-grechen">Nourish<span className="textStyle">Net</span></h1>
                </div>
                <div className="space-x-10 lg:flex hidden navitem" >

                    {
                        navbarItems1.map(navbarItem => <span key={navbarItem.id}  className=" group items-center bg-transparent cursor-default ">
                                <NavLink  to={navbarItem.link} className={`text-center font-bold relative  after:transition-transform after:duration-700 after:ease-in-out after:absolute after:-bottom-[3.1px] after:left-0 after:block after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:myColor after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 `}>{navbarItem.title}</NavLink>
                       </span>)                       
                    } 
                    {
                        user && navbarItems2.map(navbarItem => <span key={navbarItem.id}  className=" group items-center bg-transparent cursor-default ">
                        <NavLink  to={navbarItem.link} className={`text-center font-bold relative  after:transition-transform after:duration-700 after:ease-in-out after:absolute after:-bottom-[3.1px] after:left-0 after:block after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:myColor after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 `}>{navbarItem.title}</NavLink>
                </span>)
                    }                     
                </div>                                                                 
                <button onClick={handleLogin} className={`flex items-center justify-center border-2 rounded-2xl hover:text-red-700 border-red-600 cursor-pointer text-xl w-36 h-11 pr-3`}>                       
                    <Lottie animationData={loginButton} className="w-11"></Lottie>                    
                    <span>{user? 'Log out' : 'Log in'}</span>
                </button>
                
            </nav>
            <div className="lg:hidden fixed w-full z-50 top-0 text-white menu">                
                <Menu className="bg-black text-white ">        
                {
                        navbarItems1.map(navbarItem => <span key={navbarItem.id}  className=" group items-center bg-transparent cursor-default mt-10">
                                <NavLink  to={navbarItem.link} className={`menu-item text-center font-bold text-lg relative  after:transition-transform after:duration-700 after:ease-in-out after:absolute after:-bottom-1 after:left-0 after:block after:h-[3.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:myColor after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 `}>{navbarItem.title}</NavLink>
                        </span>)

                    } 
                     {
                        user && navbarItems2.map(navbarItem => <span key={navbarItem.id}  className=" group items-center bg-transparent cursor-default mt-10">
                        <NavLink  to={navbarItem.link} className={`text-center font-bold relative  after:transition-transform after:duration-700 after:ease-in-out after:absolute after:-bottom-[3.1px] after:left-0 after:block after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:myColor after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 `}>{navbarItem.title}</NavLink>
                </span>)
                    }  
                </Menu>
            </div>
        </div>
    );
};

export default Navbar;