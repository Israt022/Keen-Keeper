import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import Homepage from '../pages/HomePage/Homepage';

export const router = createBrowserRouter([
  {
    path : '/',
    Component : Root,
    children : [
        {index : true, Component : Homepage}
    ]
  }
])
