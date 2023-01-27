import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardG from '../Pages/dashboardG';

const DashBoardRoute = () => {
  return (
    <>
        <Routes>
            <Route index element={<DashboardG />}/>
        </Routes>
    </>
  )
}

export default DashBoardRoute