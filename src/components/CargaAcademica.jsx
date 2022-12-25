import React, {useEffect, useState} from "react";
import '../styles/CargaAcademica.scss'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {useContext} from "react";
import AppContext from "../context/AppContext";
import axios from "axios";
const url='http://localhost:3000/api/v1/alumnos/datosCarga/'
const CargaAcademica=()=>{
    const {state}=useContext(AppContext)
    const operacion=state.operacion
    const auth=useAuth()
    const user=auth.user
    const periodo=auth.periodo
    const navigate=useNavigate();
    const [nombre,setNombre]=useState('');
    const [correo,setCorreo]=useState('');
    const [celular,setCelular]=useState('');
    const [carrera,setCarrera]=useState('');

    const getCargaData= async ()=>{
        const res = await axios.get(url+user.clave);
        const datos=res.data[0]
        setNombre(datos.nombre)
        setCelular(datos.telefono)
        setCorreo(datos.correo)
        setCarrera(datos.carrera)
    }
    const hadleClick=(e)=>{
        e.preventDefault();
        navigate('/reinscripcion/factura')
    }

    const addMaterias=(e)=>{
        e.preventDefault()
        setOpenModal(true)
    }

    useEffect(  () => {
        getCargaData()
    }, []);

    return(
        <section className="contentReins-carga">
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
                    <input type="text" className="form-control" value={nombre} style={{width: "540px", height: "30px"}}/>
                </div>
                <div className="form-group">
                    <h5 style={{color: "white"}}>No. Matricula</h5>
                    <input type="number" className="form-control" value={user.clave} style={{width: "200px", height: "30px"}}/>
                </div>
                <div className="form-group">
                    <h5 style={{color: "white"}}>Periodo</h5>
                    <input type="text" className="form-control" value={periodo[0].numero} style={{width: "160px", height: "30px"}}/>
                </div>
                <div className="form-group">
                    <h5 style={{color: "white"}}>Fecha</h5>
                    <input type="date" className="form-control" style={{width: "160px", height: "30px"}}/>
                </div>

                <div className="form-group">
                    <h5 style={{color: "white"}}>Carrera</h5>
                    <input type="text" className="form-control" value={carrera} style={{width: "390px", height: "30px"}}/>
                </div>

                <div className="form-group">
                    <h5 style={{color: "white"}}>No. Celular</h5>
                    <input type="number" className="form-control" value={celular} style={{width: "240px", height: "30px"}}/>
                </div>
                <div className="form-group">
                    <h5 style={{color: "white"}}>Correo</h5>
                    <input type="email" className="form-control" value={correo} style={{width: "500px", height: "30px"}}/>
                </div>
                <br/>

                    <button className="btnAdd btn-outline-info" onClick={addMaterias} type="button">Agregar</button>

                    <table className="tableR table-bordered" style={{width: "730px", height: "50px"}}>
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
                {(user.rol==2 || user.rol==5) && (operacion==="inscripcion") ?(
                    <button className="btnContReins2 btn-outline-primary"
                            >Finalizar
                    </button>
                    ): (user.rol==2 || user.rol==5) ? (
                        <section className="row-btn">
                            <button className="btnContReins2-ca btn-outline-primary"
                                    onClick="location.href='facturaReinscripcionControl.html'">Incompleto
                            </button>
                            <button className="btnContReins3 btn-outline-primary"
                                    onClick={hadleClick}>Siguiente
                            </button>
                        </section>
                    ):
                    (
                    <button className="btnContReins2 btn-outline-primary"
                    onClick={hadleClick}>Continuar
                    </button>
                    )
                }
            </section>
        </section>
);
}

export default CargaAcademica;