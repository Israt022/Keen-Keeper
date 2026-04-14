import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { friendsContext } from '../../context/FriendsProvider';

const Status = () => {
    const {call,
        texts,
        videos,} = useContext(friendsContext)
    // const {friends,loading} = useFriend()
    // const UninstallAppsLength = apps.length - installApps.length
    const data = [
        { name: 'Calls', value: call.length, fill: '#052e16' },
        { name: 'Texts', value: texts.length, fill: '#a855f7' },
        { name: 'Video Calls', value: videos.length, fill: '#22c55e' },
    ];
    return (
        <div className='container mx-auto mt-20'>
            <h1 className='text-3xl font-bold'>Friendship Analytics</h1>
                <div className='my-10  shadow-sm bg-base-100 rounded-md'>
                    <p className='text-xl text-green-950 p-8'>
                        By Interaction Type
                    </p>
                    {
                        call.length === 0 && texts.length === 0 && videos.length === 0
                            ? <div className='text-gray-500 h-[20vh] flex justify-center items-center'>
                                No Interactions logged yet!
                            </div>
                            :
                            <div className='flex justify-center items-center pb-6 space-y-2'>
                                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                                    <Pie
                                        data={data}
                                        innerRadius="80%"
                                        outerRadius="100%"
                                        // Corner radius is the rounded edge of each pie slice
                                        cornerRadius="50%"
                                        fill="#8884d8"
                                        // padding angle is the gap between each pie slice
                                        paddingAngle={5}
                                        dataKey="value"
                                        isAnimationActive={true}
                                    />
                                    <Legend/>
                                    <Tooltip/>
                                </PieChart>
                            </div>
                    }
                </div>
        </div>
    );
};

export default Status;