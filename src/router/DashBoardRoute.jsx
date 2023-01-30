import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Aside from '../components/Aside';
import DashboardG from '../Pages/dashboardG';

const DashBoardRoute = () => {
  return (
      <div className='container-menu'>
        <div className='menu-h col-lg-2 border-end border-2'>
          <Aside />
        </div>
        <div className='menu-d'>
          <div className='top-menu'>
            
          </div>
          <div className='content'>
            <Routes>
                <Route path='/' element={<DashboardG />} />
            </Routes>
          </div>
        </div>
    </div>
  )
}

export default DashBoardRoute