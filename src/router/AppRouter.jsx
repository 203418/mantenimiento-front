import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    </Router>
  )
}

export default AppRouter