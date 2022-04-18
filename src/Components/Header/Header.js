import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-indigo-800'>
            <nav className='flex justify-around md:w-1/3 text-center mx-auto p-5 text-white md:text-lg'>
                <Link to='/home'>HOME</Link >
                <Link to='/reviews'>REVIEWS</Link >
                <Link to='/dashboard'>DASHBOARD</Link >
                <Link to='/blogs'>BLOGS</Link >
                <Link to='/about'>ABOUT</Link >
            </nav>
        </div>
    );
};

export default Header;