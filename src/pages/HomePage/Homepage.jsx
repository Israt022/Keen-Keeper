import React from 'react';
import Banner from './Banner';
import States from './States';
import FriendList from './FriendList';

const Homepage = () => {
    return (
        <div className='container mx-auto w-11/12'>
            <Banner/>
            <States/>
            <FriendList/>
        </div>
    );
};

export default Homepage;