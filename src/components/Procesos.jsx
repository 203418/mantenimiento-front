import React from 'react'
import Table from "./table";
import Swal from "sweetalert2";
import "../assets/Procesos.css"
const Procesos = () => {

  const mostrarAlertaMasProceso=()=>{
      Swal.fire({
          title: 'Ingresa los datos',
          html:`<br>
                <input id="txtNombre" class="swal2-input" placeholder="Nombre de fase">
                <br/>
                <select class="form-select swal2-inputOption" id="lista" data-style="btn-warning" data-live-search="true" >
                    <option value="-1">Seleccione una opción</option>
                    <option value="-2">Agregar roles</option>
                </select>                   
                <br>`,
          showCancelButton: true,
          confirmButtonText: 'Guardar',
          cancelButtonText: 'Cancelar',
          backdrop: true
      })

  }

  return (
      <div>
          <button type="button" className="btn btn-light agregarProcesos" onClick={mostrarAlertaMasProceso}>Agregar Proceso</button>

          <div className="overflow-auto review-P">
            <Table/>
          </div>
      </div>
      
  )
}

export default Procesos