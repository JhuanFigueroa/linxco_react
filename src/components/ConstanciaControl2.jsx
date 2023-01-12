import React, {useEffect, useState} from 'react'
import '../styles/ConstanciaControl2.scss'
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
const ConstanciaControl2 = () =>{
    const {clave}=useParams()
    const navigate=useNavigate()
    const [peticiones,setPeticiones]=useState([])
    const getPeticiones=()=>{
        const rta=axios.get('http://localhost:3000/api/v1/peticiones/carrera/'+clave)
            .then(res=>{
                setPeticiones(res.data)
            })
    }

    const handleClick=(matricula)=>{

        navigate(`/control/constancias/datos/${matricula}`)
    }

    useEffect(()=>{
        getPeticiones()
    })
    return(
            <section className="contentFactReins">
                <h2 className="titleCarga">DATOS</h2><br></br>
                <form className="form-inline">
                    <input className="form-control mr-sm-2 col-7" type="search" size={40} style={{width:"700px"}} placeholder="buscar" aria-label="Search" />
                    <button className="btn btn-outline-primaryy mt-7" type="submit">Buscar</button>
                </form>
                <table className="tableFac table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">TIPO</th>
                            <th scope="col">MATRICULA</th>
                            <th scope="col">NOMBRE COMPLETO</th>
                            <th scope="col">AGREGAR</th>
                        </tr>
                    </thead>
                    <tbody>
                    {peticiones.map(peticion=>(
                        <tr key={peticion.matricula}>
                            <td>{peticion.tipo}</td>
                            <td>{peticion.matricula}</td>
                            <td>{peticion.nombre}</td>
                            <td>
                                <button onClick={()=>{handleClick(peticion.matricula)}}>VER</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <br></br>
            </section>
    )
}
export default ConstanciaControl2