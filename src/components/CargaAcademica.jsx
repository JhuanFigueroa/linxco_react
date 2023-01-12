import React, {useEffect, useState} from "react";
import '../styles/CargaAcademica.scss'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {useContext} from "react";
import AppContext from "../context/AppContext";
import axios from "axios";
import ListaMaterias from "@components/ListaMaterias";
import Cookie from 'js-cookie'
const url='http://localhost:3000/api/v1/alumnos/datosCarga/'
let idC=0
const CargaAcademica=()=>{
    const {state}=useContext(AppContext)
    const operacion=state.operacion
    const auth=useAuth()
    const user=auth.user
    const periodo=auth.periodo
    const navigate=useNavigate();
     const handleClickk=(e)=>{
         e.preventDefault();
         navigate('/')
     }

    const [openModal,setOpenModal]=useState(false)
    const [materiasCarga,setMateriasCarga]=useState([])
    const [tiposCarga,setTiposCarga]=useState([])

    const [nombre,setNombre]=useState('');
    const [correo,setCorreo]=useState('');
    const [celular,setCelular]=useState('');
    const [carrera,setCarrera]=useState('');
    const [fecha,setFecha]=useState(null);
    const [tipoCarga,setTipoCarga]=useState(null)

    const totalCreditos=()=>{
        let sum=0
        const creditos=materiasCarga.map((materia)=>{
            return sum+=materia.creditos
        })
        return sum
    }
    const getCargaData= async ()=>{
        const res = await axios.get(url+user.clave);
        const datos=res.data[0]
        setNombre(datos.nombre)
        setCelular(datos.telefono)
        setCorreo(datos.correo)
        setCarrera(datos.carrera)
    }

    const getTiposCarga= async ()=>{
        const cookie= Cookie.get('token')
        axios.defaults.headers.Authorization='Bearer '+cookie;
        const res = await axios.get('http://localhost:3000/api/v1/tipoCarga');
        setTiposCarga(res.data)
    }
    const hadleClick=(e)=>{
        e.preventDefault();

        const data={
            'fecha':fecha,
            'claveTipoCarga':tipoCarga,
            'matriculaAlumno':user.clave,
            'idPeriodo':periodo[0].id
        }
        const cookie= Cookie.get('token')
        axios.defaults.headers.Authorization='Bearer '+cookie;
        const rta=axios.post('http://localhost:3000/api/v1/carga-academica',data)
            .then(function(response){
                idC=response.data
                materiasCarga.map(materia=>{
                    const dtaMateriaCarga={
                        'claveMateria':materia.clave,
                        'idCarga':idC
                    }
                    axios.post('http://localhost:3000/api/v1/materia-carga',dtaMateriaCarga)

                });
        })

        navigate('/reinscripcion/factura')
    }

    useEffect(  () => {
        getCargaData()
        getTiposCarga()
    }, []);

    return(
        <div>
            <div className="capa"></div>
            <section className="contentReins-carga">
                <h2 className="titleCarga">Carga Academica</h2><br/>
                <section className="FormReins row">
                    <section className="checksR">
                        {tiposCarga.map((tipo)=>(
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="checkbox" name="tipoCarga[]" value={tipo.clave} aria-label="Checkbox for following text input" onChange={(e)=>{
                                    if (e.target.checked){
                                        setTipoCarga(e.target.value)
                                    }
                                }}/>

                                <label style={{marginTop: "10px"}}>{tipo.nombre}</label>
                            </div>
                        ))}
                    </section>
                    <div className="form-group-cargaIns">
                        <h5 style={{color: "white"}}>Nombre del estudiante</h5>
                        <input type="text" className="form-control" value={nombre} style={{width: "540px", height: "30px"}}/>
                    </div>
                    <div className="form-group-cargaIns">
                        <h5 style={{color: "white"}}>No. Matricula</h5>
                        <input type="number" className="form-control" value={user.clave} style={{width: "200px", height: "30px"}}/>
                    </div>
                    <div className="form-group-cargaIns">
                        <h5 style={{color: "white"}}>Periodo</h5>
                        <input type="text" className="form-control" value={periodo[0].numero} style={{width: "160px", height: "30px"}}/>
                    </div>
                    <div className="form-group-cargaIns">
                        <h5 style={{color: "white"}}>Fecha</h5>
                        <input type="date" className="form-control" onChange={(e)=>{setFecha(e.target.value)}} style={{width: "160px", height: "30px"}}/>
                    </div>

                    <div className="form-group-cargaIns">
                        <h5 style={{color: "white"}}>Carrera</h5>
                        <input type="text" className="form-control" value={carrera} style={{width: "390px", height: "30px"}}/>
                    </div>

                    <div className="form-group-cargaIns">
                        <h5 style={{color: "white"}}>No. Celular</h5>
                        <input type="number" className="form-control" value={celular} style={{width: "240px", height: "30px"}}/>
                    </div>
                    <div className="form-group-cargaIns">
                        <h5 style={{color: "white"}}>Correo</h5>
                        <input type="email" className="form-control" value={correo} style={{width: "500px", height: "30px"}}/>
                    </div>


                        <button className="btnAdd btn-outline-info"  onClick={()=>{setOpenModal(true)}} type="button">Agregar</button>


                    {!!openModal &&(
                        <ListaMaterias
                        setOpenModal={setOpenModal}
                        setMateriasCarga={setMateriasCarga}
                        />
                    )}
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

                            {materiasCarga.map((materia)=>(
                                <tr key={materia.clave}>
                                    <td>{materia.clave}</td>
                                    <td>{materia.nombre}</td>
                                    <td>{materia.creditos}</td>
                                    <td></td>
                                    <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                                    <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                                    <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                                </tr>
                            ))}

                            <tr>
                                <td></td>
                                <td>Total:</td>
                                <td>{totalCreditos()}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    {(user.rol==2 || user.rol==5) && (operacion==="inscripcion") ?(
                        <button className="btnContReinsCarga btn-outline-primary" onClick={handleClickk}
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
                        <button className="btnContReinsCarga btn-outline-primary"
                        onClick={hadleClick}>Continuar
                        </button>
                        )
                    }
                </section>
            </section>
            </div>
);
}

export default CargaAcademica;