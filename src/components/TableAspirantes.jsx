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