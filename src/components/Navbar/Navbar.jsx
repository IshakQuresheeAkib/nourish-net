import { NavLink, useNavigate } from "react-router-dom";
import { stack as Menu } from 'react-burger-menu'
import './navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// import useAuth from "../../hook/useAuth";
import { enqueueSnackbar } from 'notistack';
// import DarkMode from "../../darkmode/DarkMode";

const Navbar = () => {

    const {user,logOut} = {};
    const navigate = useNavigate();

    const navbarItems = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'Available Foods', link: '/available-foods'},
        { id: 10, title: 'Add Food', link: '/add-food'},
        { id: 3, title: 'Manage My Foods ', link: '/manage-my-foods' },
        { id: 4, title: 'My Food Request', link: '/my-food-request,' },
        { id: 7, title: 'Contact Us', link: '/contact-us'}
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
        <div className="relative w-full h-full text-white">
            <nav className="fixed w-full top-0 bg-black/80 flex justify-between items-center md:py-4 py-3 z-50 backdrop-blur-sm" data-aos='slide-down'>
                <div >
                    <h1 className="font-bold md:text-5xl text-2xl ml-16 font-grechen">Nourish<span className="textStyle">Net</span></h1>
                </div>
                <div className="space-x-10 md:flex hidden navitem" >

                    {
                        navbarItems.map(navbarItem => <span key={navbarItem.id}  className=" group items-center bg-transparent font-thin text-white cursor-default mr-10">
                                <NavLink  to={navbarItem.link} className={`text-center text-lg relative pb-1 text-white after:transition-transform after:duration-700 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:myColor after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 `}>{navbarItem.title}</NavLink>
                        </span>)
                    }                      
                </div>
                
                <div className="flex items-center gap-5 md:mr-10">               
                   <div>
                   {
                    user &&  
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56 text-black">
                        <li><a>{user?.displayName}</a></li>
                        <li><a>{user?.email}</a></li>
                    </ul>
                    </div>
                   }
                   </div>
                   
                    <button onClick={handleLogin} className="md:block hidden myBtn">
                    {user? 'Log out' : 'Log in'}
                    </button>
                </div>
            </nav>
            <div className="md:hidden fixed w-full z-50 top-0 text-white menu">                
                <Menu className="bg-black text-white ">                   
                    <NavLink className="menu-item" to='/'>Home</NavLink>            
                    <NavLink className="menu-item" to='/addproduct'>Add Product</NavLink>
                    <NavLink className="menu-item" to='/mycart'>My Cart</NavLink>
                    <button onClick={handleLogin} className="btn hover:bg-red-900 border-none bg-gradient-to-bl from-lightRed to-darkRed text-white normal-case mt-10">
                    {user? 'Log Out' : 'Log In'}
                    </button>
                </Menu>
            </div>
        </div>
    );
};

export default Navbar;