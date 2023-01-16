
import React from "react";
import '../styles/tablaMateriasForm.scss'
import { useNavigate } from "react-router-dom";
const tablaMateriasForm = () => {
    const navigate = useNavigate();
    // const navigate = useNavigate({ nombre });
    const handleClick = (e) => {
        e.preventDefault();
        navigate('/')
    }
    return (
        <div>
            <div className="capa"></div>
            <section className="factura row">
                <table className="table table-bordered">
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
                        <tr>
                            <td>0032</td>
                            <td>Simulacion</td>
                            <td>5</td>
                            <td>Activo</td>
                            <td>
                                <button className="btnEdit btn-outline-success" type="button" onclick="location.href='materia.html'" />
                            </td>
                            <td>
                                <button className="btnDelete btn-outline-danger" type="button" />
                            </td>
                        </tr>
                        <tr>
                            <td>0056</td>
                            <td>Calculo</td>
                            <td>4</td>
                            <td>Activo</td>
                            <td>
                                <button className="btnEdit btn-outline-success" type="button" onclick="location.href='materia.html'" />
                            </td>
                            <td>
                                <button className="btnDelete btn-outline-danger" type="button" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-outline-primary" onClick={()=>navigate('/')}>Finalizar</button>

            </section>
        </div>
    );
}

export default tablaMateriasForm;