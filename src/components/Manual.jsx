import React from 'react'
import procesosIMG from "../assets/img/19962851_6203999.jpg"
import  EvidenciaIMG from "../assets/img/3301472_490748-PH5A0U-472.jpg"
import '../assets/css/manual.css'

const manual = ({ onOptionChange }) => {
  return (
    <div className='container-pro'>
        <div onClick={() => onOptionChange(5)} className="process card size-card shadow p-3 mb-5 rounded">
            <div className="">
                <img className="img-cards" src={procesosIMG}/>
                <h5 className="label">Procesos</h5>
            </div>
        </div>
        <div className="card size-card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="">
                <img className="img-cards" src={EvidenciaIMG}/>
                <h5 className="label">Carpeta de evidencias</h5>
            </div>
        </div>
        <div className="card size-card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="">
                <img className="img-cards" src={procesosIMG}/>
                <h5 className="label">Anexos</h5>
            </div>
        </div>
        <div className="card size-card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="">
                <img className="img-cards" src={procesosIMG}/>
                <h5 className="label">Carpeta de configuración</h5>
            </div>
        </div>
    </div>
  )
}

export default manual