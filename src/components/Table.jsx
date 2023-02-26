import React, {useEffect, useState} from 'react'
import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel } from  '@tanstack/react-table';
import '../assets/css/gestioTeam.css'

import {useDispatch} from 'react-redux';
import {deleteUser} from "../store/thunks/userThunks";
import editar from "../assets/icons/editar.png"
import eliminar from "../assets/icons/eliminar.png"
import {useForm} from "../customHooks/useForm.js";
import {getRolls} from "../helpers/requests/rolls.js";
import {axiosCreate} from "../helpers/axios.js";

const INITIAL_DATA = {
    name: '',
    last_name: '',
    username: '',
    rolls : [],
    password: '',
};

const Table = ({data, columns}) => {
    const dispatch = useDispatch();
    const [updateData, setUpdateData] = useState();
    const [select, setSelect] = useState("")
    const [values, handleInputChange, reset] = useForm(INITIAL_DATA);
    const [formUpdate, setFormUpdate] = useState(false);
    const [rolls, setRolls] = useState(0);

    useEffect(() => {
        getRolls()
            .then(r => {
                setRolls(r.data.map(roll => roll.name));
            });

    }, [])

    const table = useReactTable({
        data,
        columns,
        rowsPerPage: 6,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    const handleDelete = (id_) => {
        // Eliminar datos en la tabla
        const secondObject = data[id_];
        const id = secondObject.Id;
        const body = {
            id
        }
        dispatch(deleteUser(body));
    };

    const handleUpdate = (id_) => {
        setFormUpdate(true)
        setUpdateData(id_)
    };

    const updatedUser = () =>{
        const { name, last_name, rolls, username, password } = values;
        const secondObject = data[updateData];
        const id = secondObject.Id;
        const body = {
            id, name, last_name, rolls: [select], username, password
        }
        axiosCreate().put('users/update', body)
            .then(response => {
                alert(response.status);
            })
            .catch(response => {
                alert(response.status);
            });
        setFormUpdate(false);
    }

    const handleSelectChange = (e) => {
        // console.log(e);
        setSelect(e.target.value);
    }
    
  return (
    <> { formUpdate ?
        <div className="updateForm">
            <section className="divisor">
                <div className="">
                    <h1 id="h1R">Actualizar usuario </h1>
                    <br/>
                    <div className="formContainer">
                        <div className="form">
                            <div className="containerInput containerGDates">
                                <input onChange={handleInputChange} name="name" type="text"  className="inputs form-control form-control-lg"  placeholder="Nombre"/>
                                <input onChange={handleInputChange} name="last_name" type="text"  className="inputs form-control form-control-lg"  placeholder="Apellidos"/>
                            </div>
                            <div className="containerInput username">
                                <input onChange={handleInputChange} name="username" type="text"  className="inputs form-control form-control-lg"  placeholder="Usuario"/>
                            </div>
                            <div className="containerInput password">
                                <input onChange={handleInputChange} name="password" type="password" className="inputs form-control form-control-lg" placeholder="Password"  id="inputPassword "/>
                            </div>
                            <div className="select">
                                <select onChange={handleSelectChange} name="roll" className="inputs selectInput form-select"  aria-label="Default select example">
                                    <option hidden value={""}>Selecciona un rol</option>
                                    {
                                        rolls.map((r, i) => <option key={`${r}${i}`} value={r}>{r}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="button">
                            <button onClick={() => updatedUser()} type="button" className="buttonI btn btn-primary">Registrar</button>
                            <button onClick={() => setFormUpdate(false)} type="button" className="buttonI btn btn-danger">Cancelar</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        :
       <table className='table table-sm table-redounded table-bordered table-hover'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="border-b border-gray-300 text-gray-600 bg-gray-100" >
              {headerGroup.headers.map(header => (
                <th key={header.id} className="py-2 px-4 text-left uppercase">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.slice(0,5).map(row => (
            <tr key={row.id} className="text-gray-600 hover:bg-slate-100" >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="py-2 px-4" >
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext(),
                  )}

                </td>
              ))}
                <td>
                    <img onClick={() => handleUpdate(row.id)} className="iconUpdate" height="20px" src={editar}/>
                    <img onClick={() => handleDelete(row.id)} className="iconDelete" height="20px" src={eliminar}/>
                </td>
            </tr>
          ))}

        </tbody>
      </table>
    }
      {data.length > 0 &&  <nav aria-label="Page navigation example">
        <ul className="pagination">
          <button onClick={() => table.previousPage()} className="btn-p page-item">
              <span className="page-link" aria-hidden="true">«</span>
          </button>
          <button onClick={() => table.nextPage()} className="btn-p page-item">
            <span className="page-link" aria-hidden="true">»</span>
          </button>
        </ul>
      </nav>}

    </>
  )
}

export default Table