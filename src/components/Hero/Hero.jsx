import Navbar from "../Navbar/Navbar";


const Hero = () => {
    return (
        <div className=""> 
            <div className="bg-[url('https://i.ibb.co/vVx3GRj/Food-Presentation-Template.jpg')] w-screen h-screen  text-white bg-cover bg-no-repeat">
            <div className=" bg-gradient-to-b b from-black/90 w-full h-full z-0">
        <Navbar></Navbar>                      
            <div className="absolute bottom-16 translate-left-1/2 left-0 right-0 text-center ">
                <h1 className="md:text-5xl text-4xl font-semibold mb-5">Linking Surplus to Need: <br /> Less Waste, More Food, <br /> Stronger Community!</h1>
                <button className="myBtn py-3 px-9">Explore</button>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Hero;