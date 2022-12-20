import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import AppContext from "../context/AppContext";

const EstudiantesTable = () => {
    const {state}=useContext(AppContext)
    const operacion=state.operacion
    const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault()
        if (operacion==='reinscripcion'){
            navigate('/reinscripcion/carga')
        }
        if (operacion==='bajas'){
            navigate('/control/bajas/form')
        }
    }
    return (

        <section className="contenedor">
            <nav className="buscador d-flex align-items-center">
                <form className="form-inline">
                    <input className="form-control mr-sm-2 col-7" type="search"  style={{width:"700px"}}
                           placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primaryy mt-7" type="submit">Buscar</button>
                </form>
            </nav>
            <br></br>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">MATRICULA</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">CARRERA</th>
                    <th scope="col">SEMESTRE</th>
                    <th scope="col">VALIDAR</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>00001</td>
                    <td>Angel</td>
                    <td>Sistemas</td>
                    <td>Septimo</td>
                    <td>
                        <button className="btnEdit btn-light" type="button" onClick={handleClick}/>
                    </td>
                </tr>
                <tr>
                    <td>00002</td>
                    <td>Juan</td>
                    <td>Sistemas</td>
                    <td>Septimo</td>
                    <td>
                        <button className="btnEdit btn-light" type="button" onClick="location.href='bajasForm.html'"/>
                    </td>
                </tr>
                </tbody>
            </table>


        </section>
    );
}

export default EstudiantesTable