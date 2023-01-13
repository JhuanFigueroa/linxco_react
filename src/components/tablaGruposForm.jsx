import React from "react";
import '../styles/tablaGruposForm.scss'
import { useNavigate } from "react-router-dom";
const TipoConstancia = () => {
    const navigate = useNavigate({ nombre });
    const handleClick = (e) => {
        e.preventDefault();
        navigate('/factura')
    }
    return (
        <div >
            <div className="capa"></div>
            <section className="factura row">
                <table className="table table-bordered">
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
                        <tr>
                            <td>0032</td>
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
                <button className="btn btn-outline-primary">Finalizar</button>

            </section>
        </div>
    );
}

export default TipoConstancia;