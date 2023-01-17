import React from "react";
import { useEffect, useState } from "react";
import '../styles/tablaGruposForm.scss'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API ='http://localhost:3000/api/v1/grupos'

const tablaGruposForm = () => {
    const navigate = useNavigate();
    // const navigate = useNavigate({ nombre });
    const [grupos, setGrupos] = useState([])
    const handleClick = (e) => {
        e.preventDefault();
        navigate('/')
    }

    
    

    useEffect(async() => {
        // .then(rest => {setGrupos(rest.data.verGrupos) })
        const rta = await axios.get(API);
        setGrupos(rta.data)
    }, [])
    return (
        <div>
            <div className="capa"></div>
            <section className="vistaCarreFo row">
                <div className="vistaFGr">
                    <h1>Consulta de Grupos</h1>
                    <button className="btnMa btn-outline-primary" onClick={() => navigate('/')}>Finalizar</button>
                </div>
                <table className="tableMa table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" >id Grupo</th>
                            <th scope="col">Numero</th>
                            <th scope="col">Status</th>
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