import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    return (
        <Link to={`/${friend.id}`} className="card bg-base-100 shadow-sm p-6 space-y-3 hover:scale-105 transition-transform delay-75">
            <figure className='pb-2'>
                <img src={friend.picture} alt="" className='rounded-full'/>
            </figure>
            <h1 className='font-bold text-xl text-center'>
                {friend.name}
            </h1>
            <p className='text-gray-500 text-center'>
                {friend.days_since_contact}d ago
            </p>
            <div className='flex flex-wrap justify-center items-center gap-1'>
                {
                    friend.tags.map(tag => 
                        <div className="badge badge-soft badge-success">{tag}</div>
                    )
                }
            </div>
            <div className={`text-white text-center capitalize w-7/12 mx-auto px-3 py-2 rounded-full ${friend.status === 'almost due' ? 'bg-[#EFAD44]' : friend.status === 'overdue' ? 'bg-[#EF4444]' : friend.status === 'on-track' ? 'bg-[#244D3F]' : ''}`}>
                {friend.status}
            </div>
        </Link>
    );
};

export default FriendCard;