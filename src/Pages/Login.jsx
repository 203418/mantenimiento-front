import React from "react";
import "../assets/login.css"
import imgH from "../assets/img/clip-hardworking-man.png"

const Login = ()=>{
    return(
        <div>
            <section className="med">
                <div className="leftt">
                    <h1 className="leftH1">Hola!</h1>
                    <h2 className="leftH2">Inicia sesión con tu cuenta</h2>
                    <section id="sectioncss">
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <input type="text"  className="form-control form-control-lg inputsLogin"  placeholder="Usuario"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <input type="password" className="form-control form-control-lg inputsLogin" placeholder="Password"  id="inputPassword "/>
                            </div>
                        </div>
                        <button type="button" className="btn btn-login">Entrar</button>
                    </section>
                </div>
                <div className="rigthh">
                    <h1 className="mess">Bienvenido</h1>
                    <h2 className="frase">“La fuerza del equipo viene de cada miembro. La fuerza de cada miembro es el equipo.”</h2>
                    <h2 className="autor">-Phil Jackson.</h2>
                    <img src={imgH} className="img-H"/>
                </div>
            </section>
        </div>
    )
}
export default Login;