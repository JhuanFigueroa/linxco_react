import React from 'react'
import '../styles/ConstanciaControl2.scss'
import {useNavigate} from "react-router-dom";
const ConstanciaControl2 = () =>{
    const navigate=useNavigate()
    const handleClick=(e)=>{
        e.preventDefault();
        navigate('/control/constancias/datos')
    }
    return(
        <div className="capa">
            <section className="contentConstanciaT">
                <h2 className="titleConst">DATOS</h2><br></br>
                <form className="form-inline">
                    <input className="form-control mr-sm-2 col-7" type="search" size={40} style={{width:"700px"}} placeholder="buscar" aria-label="Search" />
                    <button className="btnBuscarConCon btn-outline-primary" type="submit">Buscar</button>
                </form>
                <table className="tableConstT table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">TIPO</th>
                            <th scope="col">MATRICULA</th>
                            <th scope="col">NOMBRE COMPLETO</th>
                            <th scope="col">AGREGAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>RECURSE</td>
                            <td>BASE DE DATOS</td>
                            <td>ALAN BECERRIL</td>
                            <td>
                                <button className='btnVerCont btn-outline-info' onClick={handleClick}>VER</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
            </section>
            </div>
    )
}
export default ConstanciaControl2