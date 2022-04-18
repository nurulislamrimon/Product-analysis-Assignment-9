import React from 'react';
import CustomLink from '../CustomLinks/CustomLinks';

const Header = () => {
    return (
        <div className='bg-indigo-800'>
            <nav className='flex justify-around md:w-1/3 text-center mx-auto p-5 text-white md:text-lg'>
                <CustomLink to='/home'>HOME</CustomLink >
                <CustomLink to='/reviews'>REVIEWS</CustomLink >
                <CustomLink to='/dashboard'>DASHBOARD</CustomLink >
                <CustomLink to='/blogs'>BLOGS</CustomLink >
                <CustomLink to='/about'>ABOUT</CustomLink >
            </nav>
        </div>
    );
};

export default Header;