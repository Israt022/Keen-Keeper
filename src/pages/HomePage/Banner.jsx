import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col space-y-5 items-center justify-center my-15 '>
            <h1 className='text-4xl text-center font-bold'>
                Friends to keep close in your life
            </h1>
            <p className='text-[#64748B] text-center w-[70%] lg:w-[45%]'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.
            </p>
            <button className='btn border-none bg-[#244D3F] text-white mt-2'>
                + Add a Friend
            </button>
        </div>
    );
};

export default Banner;