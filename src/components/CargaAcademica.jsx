import React from "react";
import '../styles/CargaAcademica.scss'
import {useNavigate} from "react-router-dom";
const CargaAcademica=()=>{
    const navigate=useNavigate();
    const hadleClick=(e)=>{
        e.preventDefault();
        navigate('/reinscripcion/factura')
    }

    return(
        <section className="contentReins">
            <h2 className="titleCarga">Carga Academica</h2><br/>
            <section className="FormReins row">
                <section className="checksR">
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                            <label style={{marginTop: "10px"}}>INSCRIPCION</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                            <label style={{marginTop: "10px"}}>REINSCRIPCION</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                            <label style={{marginTop: "10px"}}>CURSO DE VERANO</label>
                    </div>
                </section>
                <div className="form-group">
                    <h5 style={{color: "white"}}>Nombre del estudiante</h5>
                    <input type="text" className="form-control" style={{width: "540px", height: "30px"}}/>
                </div>
                <div className="form-group">
                    <h5 style={{color: "white"}}>No. Matricula</h5>
                    <input type="number" className="form-control" style={{width: "200px", height: "30px"}}/>
                </div>
                <div className="form-group">
                    <h5 style={{color: "white"}}>Periodo</h5>
                    <input type="text" className="form-control" style={{width: "160px", height: "30px"}}/>
                </div>
                <div className="form-group">
                    <h5 style={{color: "white"}}>Fecha</h5>
                    <input type="date" className="form-control" style={{width: "160px", height: "30px"}}/>
                </div>
                <div className="form-group">
                    <h5 style={{color: "white"}}>Carrera</h5>
                    <button className="btnComboCar btn-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                            aria-expanded="false" style={{width: "390px", height: "30px", color: "white"}}>
                        seleccionar
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Carrera 1</a>
                        <a className="dropdown-item" href="#">carrera 2</a>
                        <a className="dropdown-item" href="#">carrera 3</a>
                    </div>
                </div>

                <div className="form-group">
                    <h5 style={{color: "white"}}>No. Celular</h5>
                    <input type="number" className="form-control" style={{width: "240px", height: "30px"}}/>
                </div>
                <div className="form-group">
                    <h5 sstyle={{color: "white"}}>Correo</h5>
                    <input type="email" className="form-control"  style={{width: "500px", height: "30px"}}/>
                </div>
                <br/>

                    <table className="tableR table-bordered"  style={{width: "730px", height: "50px"}}>
                        <thead>
                        <tr>
                            <th scope="col">CLAVE</th>
                            <th scope="col">ASIGNATURA</th>
                            <th scope="col">CR</th>
                            <th scope="col">GRUPO</th>
                            <th scope="col">1A</th>
                            <th scope="col">2A</th>
                            <th scope="col">3A</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><input type="text" className="textTR" style={{color: "white"}}/></td>
                            <td><input type="text" className="textTR" style={{color: "white"}}/></td>
                            <td><input type="text" className="textTR" style={{color: "white"}}/></td>
                            <td><input type="text" className="textTR" style={{color: "white"}}/></td>
                            <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                            <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                            <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                        </tr>
                        <tr>
                            <td>.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Total:</td>
                            <td>5</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                    <button className="btnContReins2 btn-outline-primary"
                            onClick={hadleClick}
                          >Continuar
                    </button>
            </section>
        </section>
);
}

export default CargaAcademica;