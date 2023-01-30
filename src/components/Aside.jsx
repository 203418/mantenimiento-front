import React from 'react'
import pruebaF from "../assets/img/avatar-removebg-preview.png"
import "../assets/dashboardG.css"
import calendar from "../assets/icons/calendar.svg"
import menu from "../assets/icons/menu.svg"
import table from "../assets/icons/table.svg"
const Aside = () => {
  return (
    <>
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
    </>
  )
}

export default Aside