import React, {useState} from "react";
import img1 from "../assets/img/clip-1717.png";
import "../assets/signupGerente.css"
import {useDispatch} from "react-redux";
import {registerManager} from "../store/thunks/userThunks.js";

const signupTeam = ()=>{
    const dispatch = useDispatch();
    const [form, setForm] = useState({})

    const handleClick = () => {

        const body = {
            name: form.name,
            last_name: form.last_name,
            rolls: 'MANAGER',
            username: form.username,
            password: form.password,
        };


        dispatch(registerManager(body));
    };

    const handleChange = e => {
        setForm({
            ...form, [e.target.name]: e.target.value,
        });
    };


    return(
        <div>
            <section className="divisor">
                <div className="izquierda">
                    <h1 id="h1A">Bienvenido</h1>
                    <h2 id="h2A">Aquí puedes crear los usuarios con sus respectivos roles</h2>
                    <img className="Img-R" src={img1} />
                </div>
                <div className="derecha">
                    <h1 id="h1R">Registro</h1>
                    <br/>
                    <section id="sect">
                        <div className="mb-3 row">
                            <div className="col-sm-10 inp ">
                                <input type="text"  className="form-control form-control-lg nombres" name='name' onChange={handleChange}  placeholder="Nombre"/>
                                <input type="text"  className="form-control form-control-lg apellidos" name='last_name' onChange={handleChange}  placeholder="Apellidos"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <input type="text"  className="form-control form-control-lg inputsL" name='user' onChange={handleChange} placeholder="Usuario"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <input type="password" className="form-control form-control-lg inputsL" name='password' onChange={handleChange} placeholder="Password"  id="inputPassword "/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <select className="form-select select-T"  aria-label="Default select example">
                                    <option selected>Selecciona un rol</option>
                                    <option value="1">Arquitecto de software</option>
                                    <option value="2">Diseñador</option>
                                    <option value="3">Product Owner</option>
                                    <option value="3">Scrum Master</option>
                                    <option value="3">Programador</option>
                                    <option value="3">Tester</option>
                                </select>
                            </div>
                        </div>
                        <button onClick={handleClick} type="button" className="btn btn-cl">Registrar</button>
                    </section>
                </div>
            </section>
        </div>
    )
}
export default signupTeam;