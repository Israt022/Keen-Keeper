import React from 'react';
import { useParams } from 'react-router';
import useFriend from '../../hooks/useFriend';
import { FadeLoader } from 'react-spinners';

const FriendDetails = () => {
    const {id} = useParams();
    const {friends,loading} = useFriend()
    const filterData = friends.find(friend => String(friend.id) === id)
    console.log(filterData);
    if(loading){
        return(
        <div className='flex justify-center items-center mx-auto'>
            <FadeLoader color='#244D3F'/>
        </div>
        )
    }
    if(!filterData){
        return <p>No data</p>
    }
    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 ">

            {/* Left Profile Card */}
            <div className="col-span-1 border rounded-xl p-6 text-center">
                <div>
                    <img
                        src={filterData.picture}
                        alt={filterData.name}
                        className="w-20 h-20 rounded-full mx-auto mb-3"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="col-span-2 space-y-4">

                <div className="grid grid-cols-3 gap-4">
                <div className="bg-white shadow rounded-lg p-4 text-center">
                    <h3 className="text-2xl font-semibold">
                    {filterData.days_since_contact}
                    </h3>
                    <p className="text-sm text-gray-500">Days Since Contact</p>
                </div>

                <div className="bg-white shadow rounded-lg p-4 text-center">
                    <h3 className="text-2xl font-semibold">{filterData.goal}</h3>
                    <p className="text-sm text-gray-500">Goal (Days)</p>
                </div>

                <div className="bg-white shadow rounded-lg p-4 text-center">
                    <h3 className="text-lg font-semibold">{filterData.next_due_date}</h3>
                    <p className="text-sm text-gray-500">Next Due</p>
                </div>
                </div>

                <div className="bg-white shadow rounded-lg p-5 flex justify-between items-center">
                <div>
                    <h3 className="font-semibold">Relationship Goal</h3>
                    <p className="text-sm text-gray-500">
                    Connect every {filterData.goal} days
                    </p>
                </div>

                <button className="border px-3 py-1 rounded text-sm">Edit</button>
                </div>

                <div className="bg-white shadow rounded-lg p-5">
                <h3 className="font-semibold mb-4">Quick Check-In</h3>

                <div className="grid grid-cols-3 gap-4">
                    <button className="border rounded-lg py-6 flex flex-col items-center">
                    📞
                    <span className="text-sm mt-1">Call</span>
                    </button>

                    <button className="border rounded-lg py-6 flex flex-col items-center">
                    💬
                    <span className="text-sm mt-1">Text</span>
                    </button>

                    <button className="border rounded-lg py-6 flex flex-col items-center">
                    🎥
                    <span className="text-sm mt-1">Video</span>
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;