import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Hero = () => {

    const navigate = useNavigate();

    return (
        <div className="">                       
            <div className="bg-[url('https://i.ibb.co/TtcLsG6/b.jpg')] w-screen h-screen text-white bg-cover bg-no-repeat bg-fixed">
            <div className=" bg-gradient-to-b b from-black/90 w-full h-screen z-0 backdrop-blur-sm bg-fixed">
            <Navbar></Navbar>
            <div className="absolute bottom-16 tracking-wider translate-left-1/2 md:left-10 md:right-0 text-center px-5">
                <h1 className="lg:text-6xl text-3xl font-semibold mb-5 myHeading w-fit mx-auto text-white ">Linking Surplus to Need: <p className="textStyle font-bold"> Less Waste, More Food, </p> Stronger Community!</h1>
                <button onClick={()=>navigate('/available-foods')} className="myBtn py-3 px-9">Explore</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Hero;