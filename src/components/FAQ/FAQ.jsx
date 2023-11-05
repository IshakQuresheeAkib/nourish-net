import Lottie from 'lottie-react';
import faq_animation from '../../assets/faq_animation.json'

const FAQ = () => {
    return (
        <div className="flex flex-col justify-center items-center my-28 lg:mx-20 mx-10">
           <div className='lg:w-1/2 mb-10 mx-auto'>
                <div className='lg:w-3/4 md:w-1/2 mx-auto'><Lottie animationData={faq_animation}></Lottie></div>
                <h1 className='myHeading lg:text-5xl text-4xl'>Frequently Asked Questions</h1>
                <p className=''>Here are answers to some common questions that might help you better understand how we work and how you can get involved.</p>
           </div>
            <form className='grid md:grid-cols-2 grid-cols-1 gap-10 lg:w-3/4'>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked="defaultChecked" /> 
                <div className="collapse-title text-xl font-medium">
                How does the platform work for donors?
                </div>
                <div className="collapse-content"> 
                    <p>Our platform provides a simple and user-friendly interface for donors to list their surplus food. Once listed, it becomes visible to individuals seeking food assistance. Donors can then coordinate the sharing process directly with those in need.</p>
                </div>
            </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked="defaultChecked" /> 
                    <div className="collapse-title text-xl font-medium">
                    {`How can I find surplus food if I'm in need?`}
                    </div>
                    <div className="collapse-content"> 
                        <p>Recipients can search for available surplus food based on location, type, or availability. Once a suitable listing is found, they can request the food and coordinate pickup or delivery with the donor.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked="defaultChecked" /> 
                    <div className="collapse-title text-xl font-medium">
                    {`What kind of food items are typically available?`}
                    </div>
                    <div className="collapse-content"> 
                        <p>The available food varies, ranging from fresh produce to canned goods and prepared meals. Donors often list surplus fruits, vegetables, grains, and other perishable/non-perishable food items.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked="defaultChecked" /> 
                    <div className="collapse-title text-xl font-medium">
                    Is there a cost involved in using the platform?
                    </div>
                    <div className="collapse-content"> 
                        <p>No, our platform is free to use for both donors and recipients. We aim to facilitate a seamless and cost-free process for food sharing.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked="defaultChecked" /> 
                    <div className="collapse-title text-xl font-medium">
                    {`How can I find surplus food if I'm in need?`}
                    </div>
                    <div className="collapse-content"> 
                        <p>Recipients can search for available surplus food based on location, type, or availability. Once a suitable listing is found, they can request the food and coordinate pickup or delivery with the donor.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked="defaultChecked" /> 
                    <div className="collapse-title text-xl font-medium">
                    {`How can I find surplus food if I'm in need?`}
                    </div>
                    <div className="collapse-content"> 
                        <p>Recipients can search for available surplus food based on location, type, or availability. Once a suitable listing is found, they can request the food and coordinate pickup or delivery with the donor.</p>
                    </div>
                </div>
                </form>
        </div>
    )}
export default FAQ;