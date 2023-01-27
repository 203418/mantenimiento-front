import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import PublicRouter from './PublicRouter';
import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRouter';
import DashBoardRoute from './DashBoardRoute';
const AppRouter = () => {
  const {user} = useSelector(state => state.user);
  let isLogged = false;
  if (user?.id) isLogged = true;
  else isLogged = false;
  return (
    <Router>
        <Routes>
            <Route path='/auth/*' element={
              <PublicRouter isAuth={isLogged}> <AuthRouter /> </PublicRouter>
            }/>
            <Route path='/*' element={
              <PrivateRouter isAuth={isLogged}> <DashBoardRoute /> </PrivateRouter>
            } />
            <Route path='/register' element={<Navigate to={'/auth/register'}/>}/>
            <Route path='/login' element={<Navigate to={'/auth/login'}/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter