import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center md:w-1/3 mx-auto'>
            <nav className='flex justify-around'>
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