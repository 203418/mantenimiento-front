import React from "react";
import pruebaF from "../assets/img/avatar-removebg-preview.png"
import calendar from "../assets/icons/calendar.svg"
import menu from "../assets/icons/menu.svg"
import table from "../assets/icons/table.svg"

import "../assets/dashboardG.css"
import { useState } from "react";
import GestionFases from "../components/GestionFases";
import GestionTeam from "../components/GestionTeam";
import "../assets/dashboardG.css"
import Manual from '../components/Manual'

const DashboardG =()=>{
    const [option, setOption] = useState(1);

    const handleClick = (option) => {
        setOption(option);
    }

    return(        
            
        <div>
            
                <button onClick={() => {handleClick(1)}} className="opciones">Manual</button>
                <button onClick={() => {handleClick(2)}} className="opciones">Gestión de fases</button>
                <button onClick={() => {handleClick(3)}} className="opciones">Gestión de equipo</button>
                    <hr className="lineaH"/>
                {
                    option == 1 &&  <Manual />
                }
                {
                    option == 2 && <GestionFases />
                }
                {
                    option == 3 && <GestionTeam />
                }
            
        </div>
    )
}
export default DashboardG;