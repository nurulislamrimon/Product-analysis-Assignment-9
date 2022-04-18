import React from 'react';
import useReviewsData from '../../CustomsHooks/ReviewsDataLoader';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviewsData([]);
    return (
        <div className=' grid lg:grid-cols-4 md:grid-cols-3'>
            {reviews.map(review => <Review
                key={review._id}
                review={review} ></Review>)}
        </div>
    );
};

export default Reviews;