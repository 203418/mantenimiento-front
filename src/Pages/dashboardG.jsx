import React from "react";
import pruebaF from "../assets/img/avatar-removebg-preview.png"
import calendar from "../assets/icons/calendar.svg"
import menu from "../assets/icons/menu.svg"
import table from "../assets/icons/table.svg"
import "../assets/dashboardG.css"
import Manual from '../components/Manual'

const DashboardG =()=>{
    const [option, setOption] = useState(1);

    const handleClick = (option) => {
        setOption(option);
    }

    return(
        <div className="">
            <div className="diviss background-d">
                <div className='menu-h col-lg-2 border-end border-2'>
                    <div className="head">
                        <h1 className="titulo">Gestión de archivos</h1>
                    </div>
                    <img className="img-Perfil" src={pruebaF}/>
                    <h1 className="saludo">Hola,</h1>
                    <h1 className="nameUser">Luis Paulo</h1>
                    <div className="group1">
                        <h1 className="title-w">Dashboard</h1>
                        <img className="icons" src={menu}/>
                        <h1 className="par">Menu</h1>
                        <br/>
                        <img className="icons" src={calendar}/>
                        <h1 className="par">Calendario</h1>
                        <br/>
                        <img className="icons" src={table}/>
                        <h1 className="par">Tablero</h1>
                    </div>
                    <div className="group1">
                        <h1 className="title-w">Acerca de</h1>
                        <img className="icons" src={menu}/>
                        <h1 className="par">Menu</h1>
                        <br/>
                        <img className="icons" src={calendar}/>
                        <h1 className="par">Calendario</h1>
                        <br/>
                        <img className="icons" src={table}/>
                        <h1 className="par">Tablero</h1>
                    </div>
                </div>
                <div className='prueba'>
                    <div className="row padding">
                        <div className='header col-12 border-2 border-bottom'>
                            <img className="perfilHead" src={pruebaF}/>
                        </div>
                    </div>
                    <div className="row padding">
                        <div className="options">
                            <button onClick={() => {handleClick(1)}} className="opciones">Manual</button>
                            <button onClick={() => {handleClick(2)}} className="opciones">Gestión de fases</button>
                            <button onClick={() => {handleClick(3)}} className="opciones">Gestión de equipo</button>
                                <hr className="lineaH"/>
                            {
                                option == 1 &&  <Manual />
                            }
                            {
                                option == 2 && <GestionUser />
                            }
                            {
                                option == 3 && <GestionTeam />
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

import "../assets/dashboardG.css"
import { useState } from "react";
import GestionUser from "../components/GestionUser";
import GestionTeam from "../components/GestionTeam";
export default DashboardG;