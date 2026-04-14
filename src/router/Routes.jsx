import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import Homepage from '../pages/HomePage/Homepage';
import TimeLine from '../pages/Timeline/TimeLine';
import Status from '../pages/Status/Status';
import FriendDetails from '../pages/friendDetails/FriendDetails';
import ErrorPage from '../pages/errorPage/ErrorPage';


export const router = createBrowserRouter([
  {
    path : '/',
    Component : Root,
    children : [
        {index : true, Component : Homepage},
        {
            path : '/:id',
            Component : FriendDetails
        },
        {
            path : '/timeline',
            Component : TimeLine
        },
        {
            path : '/status',
            Component : Status
        },
    ],
    errorElement : <ErrorPage/>
  }
])
