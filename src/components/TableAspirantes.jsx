import React from "react";
import '../styles/Inscripcion.scss'
import {useNavigate} from "react-router-dom";
const TableAspirantes=()=>{
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate('/inscripcion/estudiante')
    }
    return(
        <section className="contTablaDatos">
            <nav className="menu2 d-flex align-items-center">
                <form className="form-inline">
                    <input className="form-control mr-sm-2 col-7" type="search"  style={{width:"700px"}}
                        placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary" style={{marginTop: "10px",height: "45px", color: "white"}}
                            type="submit">Buscar</button>
                </form>
            </nav>
            <h5 className="textoAd">ADMISION</h5>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">NO. FICHA</th>
                    <th scope="col">NOMBRE COMPLETO</th>
                    <th scope="col">EDITAR</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>00001</td>
                    <td>Angel</td>
                    <td>
                        <button className="btnEdit btn-light" type="button"
                                onClick={handleSubmit}/>
                    </td>
                </tr>

                </tbody>
            </table>
        </section>
);
}

export default TableAspirantes;