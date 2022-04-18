const Review = (props) => {
    const { name, comment, picture, ratings } = props.review;
    return (
        <div className="w-[300px] m-5 border p-3">
            <div className='flex'>
                <div className="rounded-3xl w-[50px] h-[50px] bg-indigo-100 text-center mr-2">
                    <img src={picture} alt="User" className='img-fluid' />
                </div>
                <h3 className='text-lg font-bold'>{name}</h3>
            </div>

            <p className='text-sm'>{comment}</p>
            <h3 className="font-bold">Ratings: {ratings} Stars</h3>
        </div>
    );
};

export default Review;