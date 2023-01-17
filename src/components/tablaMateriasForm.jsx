
import React from "react";
import { useEffect, useState } from "react";
import '../styles/tablaMateriasForm.scss'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API ='http://localhost:3000/api/v1/materias'

const tablaMateriasForm = () => {
    const navigate = useNavigate();
    const [materias, setMaterias] = useState([])
    // const navigate = useNavigate({ nombre });
    const handleClick = (e) => {
        e.preventDefault();
        navigate('/')
    }
    const retornar = ()=>{
        navigate('/')
    }
    const obtenerMaterias =()=>{
        const rta = axios.get(API).then(res=>{setMaterias(res.data)});
    }
    useEffect(() => {
        // .then(rest => {setGrupos(rest.data.verGrupos) })
        obtenerMaterias()
    }, [])
    return (
        <div>
            <div className="capa"></div>
            <section className="consuMate row">
                <div className="TituloMate">
                    <h1>Consulta de Materias</h1>
                    <button className="btnMatC btn-outline-primary" onClick={()=>navigate(retornar)}>Finalizar</button>
                </div>
                <table className="tableMatC table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" >Clave</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Creditos</th>
                            <th scope="col">Status</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {materias.map((materia)=>(
                        <tr>
                        <td>{materia.clave}</td>
                        <td>{materia.nombre}</td>
                        <td>{materia.creditos}</td>
                        <td>{materia.status}</td>
                        <td>
                            <button className="btnEdit btn-outline-success" type="button" onclick="location.href='materia.html'" />
                        </td>
                        <td>
                            <button className="btnDelete btn-outline-danger" type="button" />
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>

            </section>
        </div>
    );
}

export default tablaMateriasForm;