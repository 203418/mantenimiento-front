import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import SignUpGer from '../Pages/SignUpGer';
import AssignGC from "../Pages/AssignGC";
import Option from "../Pages/Option";
import SignupTeam from "../Pages/SignupTeam"
import Login from "../Pages/Login";
import DashboardG from "../Pages/dashboardG";
const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/signupGer' element={<SignUpGer />}/>
            <Route path='/assignGC' element={<AssignGC />}/>
            <Route path='/option' element={<Option />}/>
            <Route path='/SignupTeam' element={<SignupTeam />}/>
            <Route path='/login' element={<Login />}/>ç
            <Route path='/dashboardG' element={<DashboardG />}/>
        </Routes>
    </Router>
  )
}

export default AppRouter