import React from "react";;
import "../assets/signupGerente.css";
import img1 from "/src/assets/img/clip-104.png";
import { useDispatch } from 'react-redux';
import { registerManager } from "../store/thunks/userThunks";

const SignUpGer = ()=> {
    const dispatch = useDispatch();
    const handleClick = () => {
        const body = {
            name: 'Jesus Eduardo',
            last_name: 'Jímenez Guillen',
            rolls: 'MANAGER',
            username: 'JEduardo27',
            password: '12345678',
        };
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
                            <input type="text"  className="form-control form-control-lg nombres"  placeholder="Nombre"/>
                            <input type="text"  className="form-control form-control-lg apellidos"  placeholder="Apellidos"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-10">
                            <input type="text"  className="form-control form-control-lg inputsL"  placeholder="Usuario"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-10">
                            <input type="password" className="form-control form-control-lg inputsL" placeholder="Password"  id="inputPassword "/>
                        </div>
                    </div>
                    <button onClick={handleClick} type="button" className="btn btn-cl">Registrar</button>
                </section>

            </div>
            </section>
        </div>
    )
}
export default SignUpGer;
