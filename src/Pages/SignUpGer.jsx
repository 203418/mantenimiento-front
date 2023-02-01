import React, { useEffect, useState } from "react";;
import "../assets/signupGerente.css";
import img1 from "/src/assets/img/clip-104.png";
import { useForm } from '../customHooks/useForm';
import { useDispatch } from 'react-redux';
import { registerManager } from "../store/thunks/userThunks";
import { axiosInstance } from "../helpers/axios";
import { Navigate } from "react-router-dom";

const initialForm = {
    name: '',
    last_name: '',
    username: '',
    password: ''
}

const SignUpGer = ()=> {
    const dispatch = useDispatch();
    const [count, setCount] = useState(null)
    const [values, handleInputChange, reset] = useForm(initialForm);
    
    useEffect(() => {
        const count = localStorage.getItem('count');
        console.log(count);
        if (count === null || count === undefined)
            instance();
        else
            setCount(count);
    }, []);
    const instance = async() => {
        axiosInstance.get('/users/count')
        .then(r => {
            setCount(r.data.count)
            localStorage.setItem('count', r.data.count)
        });
    }
    const handleClick = () => {
        const { name, last_name, username, password } = values;
        const body = {
            name, last_name, username, password,
            rolls: ["MANAGER"]
        }
        dispatch(registerManager(body));
    };
    return  (
        <div>
            <section className="divisor">
            <div className="izquierda">
                <h1 id="h1A">Hola Gerente!</h1>
                <h2 id="h2A">Aquí puedes crear tu usuario</h2>
                <img className="Img-A" src={img1} />
            </div>
            <div className="derecha">
                <h1 id="h1R">Registrate</h1>
                <br/>
                <section id="sect">
                    <div className="mb-3 row">
                        <div className="col-sm-10 inp ">
                            <input onChange={handleInputChange} type="text" name="name"  className="form-control form-control-lg nombres"  placeholder="Nombre"/>
                            <input onChange={handleInputChange} type="text" name="last_name"  className="form-control form-control-lg apellidos"  placeholder="Apellidos"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-10">
                            <input onChange={handleInputChange} type="text" name="username"  className="form-control form-control-lg inputsL"  placeholder="Usuario"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-10">
                            <input onChange={handleInputChange} type="password" name="password" className="form-control form-control-lg inputsL" placeholder="Password"  id="inputPassword "/>
                        </div>
                    </div>
                    <button onClick={handleClick} type="button" className="btn btn-cl">Registrar</button>
                    {count !== "-1" && <Navigate to={'/auth/login'} />}
                </section>

            </div>
            </section>
        </div>
    )
}
export default SignUpGer;
