import React from 'react'
import procesosIMG from "../assets/img/19962851_6203999.jpg"
import  EvidenciaIMG from "../assets/img/3301472_490748-PH5A0U-472.jpg"
import  EvidenciaCMG from "../assets/img/5275573_52393.jpg"
import  confi from "../assets/img/2606116_5596.jpg"

const manual = () => {
  return (
    <div className="row padding2">
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
  )
}

export default manual