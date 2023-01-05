import React from 'react'
import '../styles/Credencializacion.scss'
import {useNavigate} from "react-router-dom";

const Credencializacion = () =>{
    const navigate=useNavigate();
     const hadleClick=(e)=>{
         e.preventDefault();
       navigate('/')
     }
    return(
        <div className="capa">
        <section className="contentCredencializacion">
            <h2 className="titleCarga">Credencializacion</h2><br/>
            <div className="form-group-creden row">
                <h5 for="inputText" className="textNC">Matricula :</h5>
                <div className="col-sm-6">
                    <input type="text" className="format-control" id="inputNoControl" style={{width: "500px", height: "30px"}}/>
                </div>
            </div>

            <div className="form-group-creden row">
                <h5 for="inputText" className="textNC">No. de Comprobante :</h5>
                <div className="col-sm-6">
                    <input type="text" className="format-control" id="inputNoControl" style={{width: "500px", height: "30px"}}/>
                </div>
            </div>
            <button className="btnAgregarCreden btn-outline-info">Agregar</button>
            <table className="tableCreden table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Precio unitario</th>
                        <th scope="col">ELIMINAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Curso de verano</td>
                        <td>$500</td>
                        <td>
                            <button className="btnDelete btn-outline-danger" type="button"/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <label for="inputText" className="textNC" style={{marginLeft: "600px"}}>Total :</label>
            <input type="text" className="format-control" id="inputNoControl" style={{width: "143px", height: "30px", marginTop: "3px"}}/><br></br>
                <section className="botonesFR row" style={{marginTop: "10px"}}>
                    <button type='button' onClick={hadleClick} className="btnGuardarCreden btn-outline-primary">Guardar</button>
                </section>
        </section>
        </div>
    )
}
export default Credencializacion