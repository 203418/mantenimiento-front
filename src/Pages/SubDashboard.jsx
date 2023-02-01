import React, { useEffect, useState } from "react";
import "../assets/dashboardG.css"
import GestionFases from "../components/GestionFases";
import GestionTeam from "../components/GestionTeam";
import "../assets/dashboardG.css"
import Manual from '../components/Manual'
import { useSelector } from "react-redux";

const rolesG = [
    'SCRUM', 'QUALITY MANAGER', 'SOFTWARE ARCHITECT', 'PRODUCT OWNER', 'DEVELOPER','REQUIREMENTS', 'DESIGNER'
]

const rolesM = ['MANAGER', 'QUALITY MANAGER'];

const rolesGest = ['QUALITY MANAGER'];

const SubDashboard =()=>{
    const { user } = useSelector(state => state.user);
    const [manual, setManual] = useState(false);
    const [manager, setManager] = useState(false);
    const [gestor, setGestor] = useState(false);
    const [option, setOption] = useState(0);
    
    useEffect(() => {
        user.rolls.map(roll => {
            if (rolesG.includes(roll)) {
                setManual(true);
                setOption(1);
            }
            if (rolesM.includes(roll)){
                setManager(true);
                setOption(3);
            }
            if (rolesGest.includes(roll)) {
                setGestor(true);
                setOption(1);
            }
        });
        console.log(rolesG)
    }, [])
    

    const handleClick = (option) => {
        setOption(option);
    }
    

    return(        
            
        <>
            
                { manual && <button onClick={() => {handleClick(1)}} className="opciones">Manual</button> }
                { gestor && <button onClick={() => {handleClick(2)}} className="opciones">Gestión de fases</button>}
                { manager && <button onClick={() => {handleClick(3)}} className="opciones">Gestión de equipo</button>}
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
            
        </>
    )
}
export default SubDashboard;