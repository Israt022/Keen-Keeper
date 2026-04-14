import React from 'react';
import { TiHomeOutline } from 'react-icons/ti';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <div className="text-center">

                <h1 className="text-8xl font-bold text-green-950">404</h1>

                <h2 className="text-2xl font-semibold mt-4 text-green-950">
                Oops! Page Not Found
                </h2>

                <p className="text-gray-500 mt-2 max-w-md mx-auto">
                The page you're looking for doesn't exist or has been moved.
                </p>

                <button
                    onClick={() => window.history.back()}
                    className="mt-6 px-6 py-2 bg-green-950  hover:bg-green-500 cursor-pointer rounded-lg transition"
                >
                   <span className='flex justify-center items-center gap-1 '> <TiHomeOutline /> Go Back</span>
                </button>

            </div>
        </div>
    );
};

export default ErrorPage;