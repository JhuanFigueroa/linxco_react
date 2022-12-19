import React from "react";
import '../styles/Menu.scss'
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <input type="checkbox" id="btn-menu"/>
            <div className="container-menu">
                <h1>Menu de Opciones</h1>
                <div className="cont-menu">
                    <nav>
                        <Link to="/inscripcion">Inscripcion</Link>
                        <Link to="/reinscripcion/carga">Reinscripcion</Link>

                        <a href="bajas.html">Bajas</a>
                        <a href="tramites.html">Tramites</a>
                        <a href="credencializacion.html">Credencializacion</a>
                        <a href="aspirantes.html">Aspirantes</a>
                        <Link to="/horarios">Horarios</Link>
                        <a href="maestros.html">Maestros</a>
                    </nav>

                    <label htmlFor="btn-menu">✖️</label>
                </div>
            </div>
        </div>
    );
}

export default Menu;