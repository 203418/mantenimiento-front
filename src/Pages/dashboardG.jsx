import React from "react";
import pruebaF from "../assets/img/avatar-removebg-preview.png"
import calendar from "../assets/icons/calendar.svg"
import menu from "../assets/icons/menu.svg"
import table from "../assets/icons/table.svg"
import "../assets/dashboardG.css"
import procesosIMG from "../assets/img/19962851_6203999.jpg"
import  EvidenciaIMG from "../assets/img/3301472_490748-PH5A0U-472.jpg"
import  EvidenciaCMG from "../assets/img/5275573_52393.jpg"
import  confi from "../assets/img/2606116_5596.jpg"

const DashboardG =()=>{
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
                            <h1 className="opciones">Manual</h1>
                            <h1 className="opciones2">Gestión de fases</h1>
                            <h1 className="opciones2">Gestión de equipo</h1>
                            <hr className="lineaH"/>
                            <div className="row padding2"> *//
                                <div className="card size-card shadow p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="card-body">
                                        <img className="img-cards" src={procesosIMG}/>
                                        <h5 className="label">Procesos</h5>
                                    </div>
                                </div>
                                <div className="card size-card2 shadow p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="card-body">
                                        <img className="img-cards2" src={EvidenciaIMG}/>
                                        <h5 className="label">Evidencias</h5>
                                    </div>
                                </div>
                                <div className="card size-card2 shadow p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="card-body">
                                        <img className="img-cards3" src={EvidenciaCMG}/>
                                        <h5 className="label">Evidencias del proyecto</h5>
                                    </div>
                                </div>
                                <div className="card size-card2 shadow p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="card-body">
                                        <img className="img-cards4" src={confi}/>
                                        <h5 className="label">Carpeta de configuración</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

import "../assets/dashboardG.css"
export default DashboardG;