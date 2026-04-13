import React from 'react';
import Navbar from '../component/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/shared/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;