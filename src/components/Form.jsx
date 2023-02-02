import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/css/gestioTeam.css'
import { useForm } from '../customHooks/useForm';
import { axiosCreate } from '../helpers/axios';

const INITIALDATA = {
    name : '',
    object : '',
    identifier : '',
    indicators : '',
    diagram : '',
    evidenciaE : '',
    evidenciaS : '',
    participants : '',
    frecuency : '',
    fase: ''
}

const Form = ({onOptionChange}) => {
  const [values, handleInputChange, reset] = useForm(INITIALDATA);

  const {user} = useSelector(state => state.user);

  const handleclick = async() => {
    const {
      name,
      object,
      identifier,
      indicators,
      diagram,
      evidenciaE,
      evidenciaS,
      participants,
      frecuency,
      fase,
    } = values;

    const body = {
      name,
      object,
      identifier,
      indicators,
      flujo_digram: diagram,
      participantes: participants,
      evidencia_entrada: evidenciaE,
      evidencia_salida: evidenciaS,
      frecuencia: frecuency,
      fase,
      idR: user.id,
    }

    const resp = await axiosCreate().post('process/register-process', body);
    if (resp.status === 200){
      alert('Proceso agregado exitosamente');
      onOptionChange(1);
    }
    console.log(resp);
  }
  
  return (
    <div className='containerForm'>
      <p onClick={() => onOptionChange(1)} style={{color: 'blue', fontSize: 20, cursor: 'pointer'}}>{"< Atras"}</p>
        <div className='form'>
            <div className='row'>
              <div className="col-4">
                <label htmlFor="name" className="form-label">Nombre del proceso</label>
                <input onChange={handleInputChange} type="text" name="name" className="form-control" id="name" placeholder="Nombre del proceso" />
              </div>
              <div className="col-4">
                <label htmlFor="object" className="form-label">Objetivo del proceso</label>
                <input onChange={handleInputChange} type="text" name="object" className="form-control" id="object" placeholder="Objectivo" />
              </div>
            </div>
            <div className='row'>
              <div className="col-3">
                <label htmlFor="identifier" className="form-label">Identificador del Proceso</label>
                <input onChange={handleInputChange} type="text" name="identifier" className="form-control" id="identifier" placeholder="wwww.google...." />
              </div>
              <div className="col-3">
                <label htmlFor="indicators" className="form-label">Indicadores del proceso</label>
                <input onChange={handleInputChange} type="text" name="indicators" className="form-control" id="indicators" placeholder="Indicadores" />
              </div>
              <div className="col-2">
                <label htmlFor="fase" className="form-label">Fase del proceso</label>
                <input onChange={handleInputChange} type="number" name="fase" className="form-control" id="fase" placeholder="Fase" />
              </div>
            </div>
            <div className='row'>
              <div className="col-4">
                <label htmlFor="diagram" className="form-label">URL del diagrama de flujo</label>
                <input onChange={handleInputChange} type="text" name="diagram" className="form-control" id="diagram" placeholder="wwww.google...." />
              </div>
              <div className="col-4">
                <label htmlFor="evidenciaE" className="form-label">URL de la evidencia de entrada</label>
                <input onChange={handleInputChange} type="text" name="evidenciaE" className="form-control" id="evidenciaE" placeholder="wwww.google..." />
              </div>
            </div>
            <div className='row'>
              <div className="col-8">
                <label htmlFor="evidenciaS" className="form-label">URL de la evidencia de salida</label>
                <input onChange={handleInputChange} type="text" name="evidenciaS" className="form-control" id="evidenciaS" placeholder="wwww.google...." />
              </div>
            </div>
            <div className='row'>
              <div className="col-4">
                <label htmlFor="participants" className="form-label">Participantes</label>
                <input onChange={handleInputChange} type="text" name="participants" className="form-control" id="participants" placeholder="Roy1234" />
              </div>
              <div className="col-4">
                <label htmlFor="frecuency" className="form-label">Frecuencia del proceso</label>
                <input onChange={handleInputChange} type="text" name="frecuency" className="form-control" id="frecuency" placeholder="1 vez" />
              </div>
            </div>

        </div>
        <div className='btns'>
          <button onClick={handleclick} className='btn btn-success'>Agregar proceso</button>
        </div>
    </div>
  )
}

export default Form