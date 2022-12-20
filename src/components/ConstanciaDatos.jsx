import React from 'react'
import '../styles/ConstanciaDatos.scss'

const ConstanciaDatos =()=>{
    return(
        <><div className="capa"></div>
        <section className="contentReins">
            <h2 className="titleCarga" style={{color: "white", marginLeft: "20px"}}>DATOS FACTURA</h2>
            <div className="form-group row">
                <h5 for="inputText" className="textNC" style={{color: "white", marginLeft: "20px"}}>No.Comprobante :</h5>
                <div className="">
                    <input type="text" className="format-control" id="inputNoControl" style={{width: "400px", height: "30px"}}/>
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
            <h4 className="titleCarga" style={{color: "white", marginLeft: "20px"}}>DATOS DEL ALUMNO</h4>
            <table className="tableFac table-bordered">
                <thead>
                    <tr>
                        <th scope="col">MATRICULA</th>
                        <th scope="col">NOMBRE COMPLETO</th>
                        <th scope="col">SEMESTRE</th>
                        <th scope="col">CARRERA</th>
                        <th scope="col">PLAN DE ESTUDIOS</th>
                        <th scope="col">PROMEDIO GENERAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h4 className="titleCarga"></h4><br/>
                <div className="form-group row">
                    <h5 for="inputText" className="textNC" style={{color: "white", marginLeft: "20px"}}>CLAVE CONSTANCIA:</h5>
                    <div className="col-sm-6">
                        <input type="text" className="format-control" id="inputNoControl" style={{width: "400px", height: "30px"}}/>
                    </div>
                </div>
                <div className="form-fech row">
                    <h4 style={{color: "white", marginLeft: "20px"}}>Fecha Constancia</h4>
                    <input type="date" className="form-control" style={{width: "160px", height: "20px", marginLeft: "10px", marginTop: "5px"}}/>
                </div>

                <button className="btnContReins2 btn-outline-primary" onclick="location.href='constanciaControl2.html'">GUARDAR</button>
        </section></>
    )
}
export default ConstanciaDatos