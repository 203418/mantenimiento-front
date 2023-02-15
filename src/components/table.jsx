import React from "react";
import "../assets/Table.css"
import DeleteIcon from "../assets/icons/delete_black_24dp.svg"

const Table = ()=>{
    return(
        <div className="sizeTable">
            <table className="table">
                <thead>
                <tr className="color-t">
                    <th scope="col"># Procesos</th>
                    <th scope="col">Identificador</th>
                    <th scope="col">Responsable</th>
                    <th scope="col">Fase</th>
                    <th scope="col">Acciones</th>
                </tr>
                </thead>
                <tbody>
                <tr className="table-primary">
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>1</td>
                    <button type="button" className="btn buttonE btn-sm"><img src={DeleteIcon}/></button>
                </tr>
                <tr >
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>1</td>
                    <button type="button" className="btn buttonE btn-sm"><img src={DeleteIcon}/></button>
                </tr>
                <tr className="table-primary">
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>1</td>
                    <button type="button" className="btn  buttonE btn-sm"><img src={DeleteIcon}/></button>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>1</td>
                    <button type="button" className="btn  buttonE btn-sm"><img src={DeleteIcon}/></button>
                </tr>
                <tr className="table-primary">
                    <th scope="row">5</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>1</td>
                    <button type="button" className="btn  buttonE btn-sm"><img src={DeleteIcon}/></button>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>1</td>
                    <button type="button" className="btn  buttonE btn-sm"><img src={DeleteIcon}/></button>
                </tr>
                <tr className="table-primary">
                    <th scope="row">7</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>1</td>
                    <button type="button" className="btn  buttonE btn-sm"><img src={DeleteIcon}/></button>
                </tr>
                <tr>
                    <th scope="row">8</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>1</td>
                    <button type="button" className="btn  buttonE btn-sm"><img src={DeleteIcon}/></button>
                </tr>
                <tr className="table-primary">
                    <th scope="row">9</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>1</td>
                    <button type="button" className="btn  buttonE btn-sm"><img src={DeleteIcon}/></button>
                </tr>
                <tr>
                    <th scope="row">10</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>1</td>
                    <button type="button" className="btn  buttonE btn-sm"><img src={DeleteIcon}/></button>
                </tr>
                </tbody>
            </table>
        </div>

    )

}
export default Table;