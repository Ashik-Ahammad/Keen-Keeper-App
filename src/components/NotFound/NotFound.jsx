import React from 'react';
import { Link } from 'react-router';
import { RiArrowGoBackFill } from "react-icons/ri";

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-center'>
            <h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
            <p className='mb-5 text-3xl'>The page you are looking for does not exist.</p>
            <Link to="/" className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300'>
                <span className='flex items-center gap-x-2'><RiArrowGoBackFill /> Go Back Home</span>
            </Link>
        </div>
    );
};

export default NotFound;