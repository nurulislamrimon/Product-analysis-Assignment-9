import React from 'react';

const Home = () => {
    return (
        <div>
            {/* top section */}
            <div className='home-container grid md:grid-cols-2 gap-10 p-10'>
                <div className="img-container md:order-2">
                    <img src="images/pc.jpg" alt="" />
                </div>
                <article className='md:order-1'>
                    <h1 className='md:text-4xl font-bold'>The world's simplist machine, <br /> for the best <span className='text-indigo-800'>services</span>!</h1>
                    <p className='md:text-2xl mt-3'>▒ We are here to provide you your expected personal computer. Grab your favourite one and give us your feedback on that. <span className='text-indigo-800'>Don't be upsat!</span> Your satisfaction is our only priority.  <span className='text-red-800'>Stay Tuned! Stay Happy! ▒</span></p>
                </article>
            </div>



        </div>
    );
};

export default Home;