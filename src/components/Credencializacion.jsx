import React from 'react'
import '../styles/Credencializacion.scss'

const Credencializacion = () =>{
    return(
        <><div className="capa"></div>
        <section className="contentFactReins">
            <h2 className="titleCarga">Credencializacion</h2><br/>
            <div className="form-group row">
                <h5 for="inputText" className="textNC">Matricula :</h5>
                <div className="col-sm-6">
                    <input type="text" className="format-control" id="inputNoControl" style={{width: "500px", height: "30px"}}/>
                </div>
            </div>

            <div className="form-group row">
                <h5 for="inputText" className="textNC">No. de Comprobante :</h5>
                <div className="col-sm-6">
                    <input type="text" className="format-control" id="inputNoControl" style={{width: "500px", height: "30px"}}/>
                </div>
            </div>

            <table className="tableFac table-bordered">
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
                    <button className="btnFactsA btn-outline-primary">Guardar</button>
                </section>
        </section></>
    )
}
export default Credencializacion