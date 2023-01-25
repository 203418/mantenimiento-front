import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpGer from '../Pages/SignUpGer';
import AssignGC from "../Pages/AssignGC";
import Option from "../Pages/Option";
import SignupTeam from "../Pages/SignupTeam"
import Login from "../Pages/Login";

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/signupGer' element={<SignUpGer />}/>
            <Route path='/assignGC' element={<AssignGC />}/>
            <Route path='/option' element={<Option />}/>
            <Route path='/SignupTeam' element={<SignupTeam />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    </Router>
  )
}

export default AppRouter