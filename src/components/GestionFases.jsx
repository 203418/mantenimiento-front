import React from 'react'
import CardFase from "../components/CardFase"
import "../assets/CardFase.css"

const GestionFases = () => {
  return (
      <div className="overflow-auto review" >
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-3 space">
              <CardFase/>
            </div>
            <div className="col-lg-3 space2">
              <CardFase/>
            </div>
            <div className="col-lg-3 space2">
              <CardFase/>
            </div>
            <div className="col-lg-3 space2">
              <CardFase/>
            </div>
          </div>
        </div>
        <br/>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-3 space">
              <CardFase/>
            </div>
            <div className="col-lg-3 space2">
              <CardFase/>
            </div>
            <div className="col-lg-3 space2">
              <CardFase/>
            </div>
            <div className="col-lg-3 space2">
              <CardFase/>
            </div>
          </div>
        </div>
        <br/>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-3 space">
              <CardFase/>
            </div>
            <div className="col-lg-3 space2">
              <CardFase/>
            </div>
          </div>
        </div>
      </div>

  )
}

export default GestionFases