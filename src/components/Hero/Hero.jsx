import Navbar from "../Navbar/Navbar";


const Hero = () => {
    return (
        <div className="">                       
            <div className="md:bg-[url('https://i.ibb.co/Mf4bKDP/peter-broomfield-m3m-ln-R90u-M-unsplash-1.jpg')] bg-[url('https://i.ibb.co/smbnvN8/olav-tvedt-o-Va-YMg-BMbs-unsplash-1.jpg')] w-screen h-screen  text-white bg-cover bg-no-repeat scroll-m-16 ">
            <div className=" bg-gradient-to-b b from-black/90 w-full h-full z-0"></div>
            </div>
            <div className="text-white absolute translate-y-1/2 md:top-[42%] top-[10%] md:left-16 md:text-left text-center bg-fixed">
                <h1 className="md:text-5xl text-4xl font-semibold mb-6 md:w-1/2 myHeading">Where Elegance Meets the Road!</h1>
                <button className="myBtn py-3 px-9">Explore</button>
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Hero;