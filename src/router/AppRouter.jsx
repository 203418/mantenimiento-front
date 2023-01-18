import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import SignUpGer from '../Pages/SignUpGer';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/signupGer' element={<SignUpGer />}/>
        </Routes>
    </Router>
  )
}

export default AppRouter