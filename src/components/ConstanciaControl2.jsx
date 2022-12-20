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
                        <tr>
                            <td>RECURSE</td>
                            <td>BASE DE DATOS</td>
                            <td>ALAN BECERRIL</td>
                            <td>
                                <button onClick={handleClick}>VER</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
            </section>
    )
}
export default ConstanciaControl2