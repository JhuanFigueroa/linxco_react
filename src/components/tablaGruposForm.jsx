import React from "react";
import { useEffect, useState } from "react";
import '../styles/tablaGruposForm.scss'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API ='https://linxco-backend.herokuapp.com/api/v1/grupos'

const tablaGruposForm = () => {
    const navigate = useNavigate();
    // const navigate = useNavigate({ nombre });
    const [grupos, setGrupos] = useState([])
    const handleClick = (e) => {
        e.preventDefault();
        navigate('/')
    }
    const obtenerGrupos =()=>{
        const rta = axios.get(API).then(res=>{setGrupos(res.data)});
    }
    useEffect(() => {
        obtenerGrupos()
    }, [])
    return (
        <div>
            <div className="capa"></div>
            <section className="vistaCarreFo row">
                <div className="vistaFGr">
                    <h1>Consulta de Grupos</h1>
                    <button className="btnMa btn-outline-primary" onClick={() => navigate('/home')}>Finalizar</button>
                </div>
                <table className="tableMa table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" >id Grupo</th>
                            <th scope="col">Numero</th>
                            <th scope="col">Status</th>
                            <th scope="col">Clave Carrera</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grupos.map((grupo)=>(
                            <tr>
                            <td>{grupo.id}</td>
                            <td>{grupo.numero}</td>
                            <td>{grupo.status}</td>
                            <td>{grupo.claveCarrera}</td>
                            <td>
                                <button className="btnEditMa btn-outline-success" type="button" onclick="location.href='materia.html'" />
                            </td>
                            <td>
                                <button className="btnDeleteMa btn-outline-danger" type="button" />
                            </td>
                        </tr>    
                        
                        ))}
                        
                                            
                    </tbody>
                </table>

            </section>
        </div>
    );
}

export default tablaGruposForm;