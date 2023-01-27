import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({ children, isAuth }) => {
  return !isAuth ? <Navigate to={'/login'}/> : children;
}

export default PrivateRouter