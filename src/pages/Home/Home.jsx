import { Helmet } from "react-helmet-async";
import FAQ from "../../components/FAQ/FAQ";
import FeaturedCards from "../../components/FeaturedCards/FeaturedCards";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NourishNet | Home</title>
            </Helmet>
             <Hero></Hero>
             <FeaturedCards></FeaturedCards>
             <FAQ></FAQ>
             <Testimonials></Testimonials>           
        </div>
    )}
export default Home;