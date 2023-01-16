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
        <div className="capa">
        <section className="contTablaDatosInscripcion">
            <h1>Inscripciones</h1>
            <nav className="menuTableAspirantes d-flex align-items-center">
                <form className="form-inline">
                    <input className="form-control row" type="search"  style={{width:"400px"}}
                        placeholder="Search" aria-label="Search"/>
                    <button className="btnBuscarAspirante btn-outline-primary"
                            type="submit">Buscar</button>
                </form>
            </nav>
            <h5 className="textoAd">ADMISION</h5>
            <table className="tableAspirantes table-bordered">
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
        </div>
);
}

export default TableAspirantes;