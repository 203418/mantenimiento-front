import React from "react";
import "../assets/CardFase.css"
import imgD from "../assets/img/docs.jpg"
import deletee from "../assets/icons/delete_FILL0_wght400_GRAD0_opsz48.svg";
import edit from "../assets/icons/edit_FILL0_wght400_GRAD0_opsz48.svg"
import {useEffect} from "react";
import Swal from "sweetalert2";


const CardFase =()=>{

    useEffect(()=>{
            //mostrarAlerta()
        },[]);

    const mostrarAlertaDelete=()=>{
        Swal.fire({
            icon: "warning",
            title: "Alerta",
            html:"<p>¿Deseas eliminar esta fase?</p>",
            showDenyButton: true,
            denyButtonText: "No",
            confirmButtonText: "Si",

        }
       )
    }
    const mostrarAlertaEdit=()=>{
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
                const nombre = document.getElementById('txtNombre').value;
                const descr = document.getElementById('txtDescripcion').value;
                const obejitvo = document.getElementById('txtObjetivo').value;
            }
        });

    }
    return(
        <div>
            <div className="card size-card-fases">
                <div className="card-body shadow bg-body-tertiary rounded">
                    <img src={imgD} className="img-fases"/>
                    <h5 className="font" readonly>Fase 1</h5>
                </div>
            </div>

                <button className="button-ic" id="option_Card" onClick={mostrarAlertaDelete}><img className="icons-card" src={deletee}/></button>
            <div className="option_Card2">
                <button type="button" className="shadow button-ic" onClick={mostrarAlertaEdit}><img className="icons-card" src={edit}/></button>
            </div>

        </div>

)
}
export default CardFase;
