import React from 'react';
import useFriend from '../../hooks/useFriend';

const States = () => {
    const {friends} = useFriend()
    const onTrack = friends.filter(s=> s.status === 'on-track').length
    const overDue = friends.filter(s=> s.status === 'overdue').length
    const almostDue = friends.filter(s=> s.status === 'almost due').length
    const needAttention = overDue + almostDue 
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-10/12 mx-auto'>
            <div className='flex flex-col justify-center items-center p-8 rounded-md shadow-sm hover:scale-105 transition-transform delay-100 space-y-2'>
                <h1 className='text-3xl font-semibold'>{friends.length}</h1>
                <p className='text-[#64748B]'>Total Friends</p>
            </div>
            <div className='flex flex-col justify-center items-center p-8 rounded-md shadow-sm hover:scale-105 transition-transform delay-100 space-y-2'>
                <h1 className='text-3xl font-semibold'>{onTrack}</h1>
                <p className='text-[#64748B]'>On Track</p>
            </div>
            <div className='flex flex-col justify-center items-center p-8 rounded-md shadow-sm hover:scale-105 transition-transform delay-100 space-y-2'>
                <h1 className='text-3xl font-semibold'>{needAttention}</h1>
                <p className='text-[#64748B]'>Need Attention</p>
            </div>
            <div className='flex flex-col justify-center items-center p-8 rounded-md shadow-sm hover:scale-105 transition-transform delay-100 space-y-2'>
                <h1 className='text-3xl font-semibold'>12</h1>
                <p className='text-[#64748B]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default States;