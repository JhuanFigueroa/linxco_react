import React from 'react'
import '../styles/Factura.scss'

const Factura = () =>{
    return(

        <div className="factura ">
            <div className="row justify-content-center ">
                        <div className="form-group">
                            <h5 style={{marginTop: "10px", color: "white"}}>Numero de Comprobante:</h5>
                            <input type="text" className="form-control" placeholder="Num Factura:"/>
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
                            <div className="pt-3 ">
                                <input type="file" className="btn btn-block subir"
                                       style={{width: "500px", color:"white"}}/>
                            </div>

                            <div className="text-center pt-3" style={{marginTop: "60px"}}>
                                <button type="button" style={{width: "200px", height: "45px", color: "white"}}
                                        className="btn btn-outline-primary">Finalizar
                                </button>
                            </div>

            </div>
        </div>

    )
}

export default Factura