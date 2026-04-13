import React, { useEffect, useState } from 'react';

export const useFriend = () => {
    const [friends,setFriends] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch('/data.json')
            const data = await res.json()
            setFriends(data)
            setLoading(false)
        }
        fetchData()
    },[])
    console.log(friends);
    return {friends,loading};
};

export default useFriend;