import React, {useState} from "react";
import "../assets/login.css"
import imgH from "../assets/img/clip-hardworking-man.png"
import {login, registerManager} from "../store/thunks/userThunks.js";
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = ()=>{
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({})
    const [redirect, setRedirect] = useState(false);
    const handleClick = () => {
        const body = {
            name: formData.name,
            last_name: formData.last_name,
            rolls: 'MANAGER',
            username: formData.username,
            password: formData.password,
        };
        dispatch(login(body));

        if(localStorage.getItem('token')){
            setRedirect(true)
            console.log(localStorage.getItem('token'))
        }

    };

    const handleChange = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    };

    return(
        <>
            {localStorage.getItem('token') || redirect === true ?
                <Navigate to='/option'/>
                :
                <div>
                    <section className="med">
                        <div className="leftt">
                            <h1 className="leftH1">Hola!</h1>
                            <h2 className="leftH2">Inicia sesión con tu cuenta</h2>
                            <section id="sectioncss">
                                <div className="mb-3 row">
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control form-control-lg inputsLogin"
                                               name='user' onChange={handleChange} placeholder="Usuario"/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control form-control-lg inputsLogin"
                                               placeholder="Password" name='password' onChange={handleChange}
                                               id="inputPassword "/>
                                    </div>
                                </div>
                                <button onClick={handleClick} type="button" className="btn btn-login">Entrar</button>
                            </section>
                        </div>
                        <div className="rigthh">
                            <h1 className="mess">Bienvenido</h1>
                            <h2 className="frase">“La fuerza del equipo viene de cada miembro. La fuerza de cada miembro
                                es el equipo.”</h2>
                            <h2 className="autor">-Phil Jackson.</h2>
                            <img src={imgH} className="img-H"/>
                        </div>
                    </section>
                </div>
            }
        </>
    )
}
export default Login;