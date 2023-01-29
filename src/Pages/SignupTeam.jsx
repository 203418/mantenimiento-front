import React, {useState} from "react";
import img1 from "../assets/img/clip-1717.png";
import "../assets/signupGerente.css"
import {useDispatch} from "react-redux";
import { registerTeam} from "../store/thunks/userThunks.js";
import { Link } from "react-router-dom";


const signupTeam = ()=>{
    const dispatch = useDispatch();
    const [form, setForm] = useState({})




    const handleClick = () => {

        const body = {
            name: form.name,
            last_name: form.last_name,
            rolls: form.roll,
            username: form.username,
            password: form.password,
        };

        console.log(body)

        if (body.name || body.last_name || body.roll || body.username || (body.password  && body.password === '' )){
            dispatch(registerTeam(body));
        }else {
            console.log('Elementos invalidos');
        }



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
                                <input type="text"  className="form-control form-control-lg inputsL" name='username' onChange={handleChange} placeholder="Usuario"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <input type="password" className="form-control form-control-lg inputsL" name='password' onChange={handleChange} placeholder="Password"  id="inputPassword "/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <select name='roll' placeholder="Seleccione un roll" className="form-select select-T" aria-label="Default select example" onChange={handleChange}>
                                    <option value="SOFTWARE ARCHITECT">Arquitecto de software</option>
                                    <option value="DESIGNER">Diseñador</option>
                                    <option value="PRODUCT OWNER">Product Owner</option>
                                    <option value="SCRUM MASTER">Scrum Master</option>
                                    <option value="DEVELOPER">Programador</option>
                                    <option value="TESTER">Tester</option>
                                </select>
                            </div>
                        </div>
                        <button onClick={handleClick} type="button" className="btn btn-cl">Registrar</button>
                        <Link to={'/option'}> <button type="button" className="btn btn-cl"> Cancelar </button> </Link>
                    </section>
                </div>
            </section>
        </div>
    )
}
export default signupTeam;