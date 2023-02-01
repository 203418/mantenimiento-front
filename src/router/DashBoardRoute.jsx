import { Dashboard } from '@mui/icons-material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../Pages/DashBoard'
import SignupTeam from '../Pages/SignupTeam'

const DashBoardRoute = () => {
  return (
    <Routes>
      <Route index element={<DashBoard />}/>
      <Route path='/registerTeam' element={<SignupTeam />}/>
    </Routes>
  )
}

export default DashBoardRoute