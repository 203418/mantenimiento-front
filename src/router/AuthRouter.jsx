import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import SignUpGer from '../Pages/SignUpGer';

const AuthRouter = () => {
  return (
    <Routes>
        <Route path='login' element={<Login />}/>
        <Route path='signUp/Ger' element={<SignUpGer />}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>
  )
}

export default AuthRouter