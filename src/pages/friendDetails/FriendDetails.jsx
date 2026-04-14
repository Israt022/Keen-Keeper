import React from 'react';
import { useParams } from 'react-router';
import useFriend from '../../hooks/useFriend';
import { FadeLoader } from 'react-spinners';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { PiArchive } from 'react-icons/pi';
import { LuPhoneCall, LuVideo } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';

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
        <div className="container w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 ">
            {/* Left Side  */}
            <div className='col-span-1 grid grid-rows-2 gap-6'>
                {/* Person Details  */}
                <div className='bg-base-100 shadow-sm p-6 rounded-md flex flex-col justify-center items-center space-y-3'>
                    <figure className='pb-2'>
                        <img src={filterData.picture} alt="" className='rounded-full'/>
                    </figure>
                    <h1 className='text-center text-xl font-bold'>
                        {filterData.name}
                    </h1>
                    <div className={`text-white text-center capitalize w-5/12 md:w-4/12 lg:w-5/12 mx-auto px-2 py-1 rounded-full ${filterData.status === 'almost due' ? 'bg-[#EFAD44]' : filterData.status === 'overdue' ? 'bg-[#EF4444]' : filterData.status === 'on-track' ? 'bg-[#244D3F]' : ''}`}>
                        {filterData.status}
                    </div>
                    <div className='flex flex-wrap justify-center items-center gap-1 capitalize'>
                        {
                            filterData.tags.map(tag => 
                                <div className="badge badge-soft badge-success">{tag}</div>
                            )
                        }
                    </div>
                    <p className='text-center text-gray-500 font-medium italic'>
                        "{filterData.bio}"
                    </p>
                    <p className='text-center text-sm text-gray-500'>
                        Preferred : {filterData.email}
                    </p>
                </div>
                {/* Buttons */}
                <div className='space-y-3'>
                    <button className='btn bg-white border-gray-100 w-full shadow-sm font-medium text-[#1F2937] flex justify-center items-center'>
                        <RiNotificationSnoozeLine size={20} /> Snooze 2 weeks
                    </button>
                    <button className='btn bg-white border-gray-100  w-full shadow-sm font-medium text-[#1F2937] flex justify-center items-center'>
                        <PiArchive size={20}/> Archive
                    </button>
                    <button className='btn bg-white border-gray-100  w-full shadow-sm font-medium text-red-500 flex justify-center items-center'>
                        <RiDeleteBinLine size={20}/> Delete
                    </button>
                </div>
            </div>
            {/* Right Side */}
            <div className='col-span-2 space-y-6 mb-15'>
                {/* Div1 */}
                <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                    <div className='flex flex-col justify-center items-center p-8 rounded-md shadow-sm hover:scale-105 transition-transform delay-100 space-y-2'>
                        <h1 className='text-3xl font-semibold'>{filterData.days_since_contact}</h1>
                        <p className='text-[#64748B]'>Days Since Contact</p>
                    </div>
                    <div className='flex flex-col justify-center items-center p-8 rounded-md shadow-sm hover:scale-105 transition-transform delay-100 space-y-2'>
                        <h1 className='text-3xl font-semibold'>{filterData.goal}</h1>
                        <p className='text-[#64748B]'>Goal (Days)</p>
                    </div>
                    <div className='flex flex-col justify-center items-center p-8 rounded-md shadow-sm hover:scale-105 transition-transform delay-100 space-y-2'>
                        <h1 className='text-3xl font-semibold'>
                            {new Date(filterData.next_due_date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            })}
                        </h1>
                        <p className='text-[#64748B]'>Next Due</p>
                    </div>
                </div>
                {/* Div2 */}
                <div className='flex flex-wrap justify-between items-center p-6 rounded-md shadow-sm'>
                    <div className='space-y-5'>
                        <h4 className='text-[#244D3F] text-xl font-medium'>
                            Relationship Goal
                        </h4>
                        <p className='text-gray-500'>
                            Connect every <span className='font-bold text-black'>{filterData.goal} days</span>
                        </p>
                    </div>
                    <button className='btn'>
                        Edit
                    </button>
                </div>
                {/* Div3 */}
                <div className='shadow-sm space-y-4 p-6'>
                    <h1 className='text-xl font-medium'>
                        Quick Check-In
                    </h1>
                    {/* Functionality Div */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {/* div 1 */}
                        <div className='p-4 flex flex-col bg-[#E9E9E9] rounded-md space-y-2 justify-center items-center hover:scale-105 transition-transform delay-100'>
                            <h1>
                                <LuPhoneCall size={30}/>
                            </h1>
                            <p>
                                Call
                            </p>
                        </div>
                        {/* div 2 */}
                        <div className='p-4 flex flex-col bg-[#E9E9E9] rounded-md space-y-2 justify-center items-center hover:scale-105 transition-transform delay-100'>
                            <h1>
                                <MdOutlineTextsms size={30}/>
                            </h1>
                            <p>
                                Text
                            </p>
                        </div>
                        {/* div 3 */}
                        <div className='p-4 flex flex-col bg-[#E9E9E9] rounded-md space-y-2 justify-center items-center hover:scale-105 transition-transform delay-100'>
                            <h1>
                                <LuVideo size={30}/>
                            </h1>
                            <p>
                                Video
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;