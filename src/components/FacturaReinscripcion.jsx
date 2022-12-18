import React from "react";

const FacturaReinscripcion=()=>{
    return(
        <section className="contentFactReins">
            <h2 className="titleCarga">Carga Academica</h2><br/>
            <div className="form-group row">
                <h5 htmlFor="inputText" className="textNC" style={{color: "rgb(255, 255, 255)"}}>No. de Comprobante :</h5>
                <div className="col-sm-6">
                    <input type="text" className="format-control" id="inputNoControl"
                           style={{width: "500px", height: "30px"}}/>
                </div>
            </div>
            <div className="form-group">
                <h5 className="" style={{color: "rgb(250, 250, 250)"}}>Seleccione el tipo de factura</h5>
                <button className="btnComboCar btn-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                        aria-expanded="false" style={{width: "390px", height: "30px"}}>
                    seleccionar
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Incripcion</a>
                    <a className="dropdown-item" href="#">Curso de verano</a>
                    <a className="dropdown-item" href="#">Seguro facultativo</a>
                </div>
            </div>
            <button className="btnAdd btn-outline-info" type="button">Agregar</button>
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
            <label htmlFor="inputText" className="textNC" style={{color: "rgb(255, 255, 255)", marginLeft: "600px"}}>Total
                :</label>
            <input type="text" className="format-control" id="inputNoControl"
                   style={{width: "143px", height: "30px", marginTop:"3px"}}/><br/>
                <section className="botonesFR row" style={{marginTop: "10px"}}>
                    <button className="btnFactsA btn-outline-primary">Subir</button>
                    <button className="btnFactsAB btn-outline-primary">Guardar</button>
                </section>
        </section>
    );
}

export default FacturaReinscripcion;