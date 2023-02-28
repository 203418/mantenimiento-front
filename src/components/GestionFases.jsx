import React from 'react'
import CardFase from "../components/CardFase"
import "../assets/CardFase.css"
import Swal from "sweetalert2";

const GestionFases = () => {
    const mostrarAlertaMasFase=()=>{
        Swal.fire({
            title: 'Ingresa los datos',
            html:
                '<input id="txtNombre" class="swal2-input" placeholder="Nombre de fase">' +
                '<input id="txtDescripcion" class="swal2-input" placeholder="Descripcion">'+
                '<input id="txtObjetivo" class="swal2-input" placeholder="Objetivo">',
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            backdrop: true
        }).then((result) => {
            if (result.isConfirmed) {
                const nombreN = document.getElementById('txtNombre').value;
                const descrN = document.getElementById('txtDescripcion').value;
                const obejitvoN = document.getElementById('txtObjetivo').value;
            }
        });

    }

    return (
        <div>
            <button type="button" className="btn btn-light agregarFase" onClick={mostrarAlertaMasFase}>Agregar Fase</button>
            <div className="overflow-auto review" >
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-3 space">
                            <CardFase/>
                        </div>

                    </div>
                </div>
                <br/>
            </div>
        </div>

)
}

export default GestionFases