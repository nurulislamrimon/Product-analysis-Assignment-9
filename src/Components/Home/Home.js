import React from 'react';
import useReviewsData from '../../CustomsHooks/ReviewsDataLoader';
import Review from '../Reviews/Review'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/solid'

const Home = () => {
    const [reviews, setReviews] = useReviewsData([]);
    const mostReviews = reviews.slice(0, 3);
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
            {/* reviews section */}
            <div className=' md:w-3/4 mx-auto'>
                <div className="grid md:grid-cols-3">
                    {mostReviews.map(review => <Review
                        review={review}
                        key={review._id}
                    ></Review>)}
                </div>
                <Link to='/reviews' className='mx-auto block w-[200px] p-2 text-xl rounded-lg text-center text-white bg-indigo-800 mb-10'>See all Reviews <ArrowRightIcon className='w-5 inline'></ArrowRightIcon></Link>
            </div>

            <footer className='text-center'>&copy; All right reserved</footer>


        </div>
    );
};

export default Home;