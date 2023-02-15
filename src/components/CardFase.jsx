import React from "react";
import "../assets/CardFase.css"
import imgD from "../assets/img/docs.jpg"

const CardFase =()=>{
    return(
        <div className="card size-card-fases">
                <div className="card-body shadow bg-body-tertiary rounded">
                    <img src={imgD} className="img-fases"/>
                    <h5 className="font">Fase 1</h5>
                </div>
        </div>
    )
}
export default CardFase;
