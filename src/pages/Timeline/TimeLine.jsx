import React, { useContext, useRef, useState } from 'react';
import { friendsContext } from '../../context/FriendsProvider';
import callImg from '../../assets/images/call.png'
import textImg from '../../assets/images/text.png'
import vdoImg from '../../assets/images/video.png'
import { CiInboxIn } from 'react-icons/ci';
const TimeLine = () => {
    const {call,texts,videos} = useContext(friendsContext);
    const allData = [...call,...texts,...videos]
    
    const sortData = allData.sort((a,b)=> b.time - a.time)

    const [filter,setFilter] = useState('all')

    const handleFilter = (type) =>{
        setFilter(type);

        // dropdown close
        if (dropdownRef.current) {
            dropdownRef.current.open = false;
        }
    }
    const filterData = 
        filter === 'all' 
        ? sortData
        : sortData.filter(item => item.type === filter)

    const dropdownRef = useRef()
    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-3xl font-bold my-2'>
                Timeline 
            </h1>
            <details ref={dropdownRef} className="dropdown">
                <summary className="btn m-1 capitalize">
                    {filter === 'all' ? 'Filter Timeline' : filter}
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=> handleFilter("all")}><a>All</a></li>
                    <li onClick={()=> handleFilter('text')}><a>Text</a></li>
                    <li onClick={()=> handleFilter('call')}><a>Call</a></li>
                    <li onClick={()=> handleFilter('video')}><a>Video</a></li>
                </ul>
            </details>
            <div className='space-y-3 my-5'>
                {
                    filterData.length == 0 ? 
                    <div className='h-[40vh] shadow-sm bg-base-100 space-y-4 flex flex-col justify-center items-center'>
                        <CiInboxIn size={70} className='text-gray-500 font-bold' />
                        <h1 className='text-2xl font-bold text-center'>You haven’t interacted yet</h1>
                        <p className='text-gray-500 text-center'>Send a quick message or make a call to reconnect.</p>
                    </div> :
                    filterData.map(item => {
                        return(
                            <div className='flex items-center gap-5 p-4 rounded-md shadow-sm'>
                                <img 
                                    src={
                                        item.type === "call" 
                                        ? callImg :
                                        item.type === "text" 
                                        ? textImg 
                                        : vdoImg
                                    } 
                                    alt="Call" 
                                    className='w-[40px] h-[40px]'/>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-lg capitalize'>{item.type} <span className='text-sm text-gray-500'>with {item.name}</span>  </p>
                                    <p className='text-sm text-gray-500'>
                                        {new Date().toLocaleDateString("en-US", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric"
                                        })}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TimeLine;