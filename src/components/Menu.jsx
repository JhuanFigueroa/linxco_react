import React from "react";
import '../styles/Menu.scss'
import {Link, useNavigate} from "react-router-dom";
import AppContext from "../context/AppContext";

const Menu = () => {
    const{addOperacion}=React.useContext(AppContext);

    const navigate=useNavigate()
    const handleClickInsvripcion=(operacion)=>{
        addOperacion(operacion)
        if (operacion==='inscripcion'){
            navigate('/inscripcion')
        }

        if (operacion==='reinscripcion'){
            navigate('/reinscripcion/carga')
        }

        if (operacion==='bajas'){
            navigate('/control/bajas')
        }


    }

    return (
        <div>
            <input type="checkbox" id="btn-menu"/>
            <div className="container-menu">
                <h1>Menu de Opciones</h1>
                <div className="cont-menu">
                    <nav>
                        <button onClick={()=>handleClickInsvripcion('inscripcion')}>Inscripcion</button>
                        <button onClick={()=>handleClickInsvripcion('reinscripcion')}>Reinscripcion</button>
                        <Link to="/reinscripcion/control">Reinscripcion control</Link>
                        <Link to="/bajas">Bajas</Link>
                        <button onClick={()=>handleClickInsvripcion('bajas')}>Bajas</button>
                        <Link to="/constancias">Constancias</Link>
                        <Link to="/factura">Factura</Link>


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