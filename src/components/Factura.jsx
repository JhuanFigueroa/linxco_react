import React from 'react'
import '../styles/Factura.scss'
import {useNavigate} from "react-router-dom";

const Factura = () =>{
    const navigate=useNavigate();
     const handleClick=(e)=>{
         e.preventDefault();
         navigate('/')
     }
    return(
<div className="capa">
        <div className="facturaAl">
            
            <div className="row justify-content-center ">
                        <div className="form-group-FAl">
                            <h5 style={{marginTop: "10px", color: "white"}}>Numero de Comprobante:</h5>
                            <input type="text" className="form-control" placeholder="Num Factura:"/>
                        </div>
                <table className="tableFacAl table-bordered">
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
                            <div className="archivosFacA pt-3 ">
                                <input type="file" className="btnArchFac btn-block subir"
                                       style={{color:"white"}}/>
                            </div>

                            <div className="text-center pt-3" style={{marginTop: "60px"}}>
                                <button type="button" style={{width: "200px", height: "45px", color: "white"}}
                                        onClick={handleClick}
                                        className="btnFinFacAl btn-outline-primary">Finalizar
                                </button>
                            </div>

            </div>
        </div>
        </div>

    )
}

export default Factura