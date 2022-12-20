import React, {useContext, useState} from "react";
import '../styles/Carreras.scss'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import AppContext from "../context/AppContext";
const CarreraItem = ({carrera}) => {
    const {state}=useContext(AppContext)
    const operacion=state.operacion

        const navigate=useNavigate()
    const handleSubmit=(e)=>{
            e.preventDefault()
        console.log(operacion)
        if (operacion==='inscripcion'){
            navigate('/inscripcion/carreras');
        }
        if (operacion==='reinscripcion'){
            navigate('/reinscripcion/control/estudiantes');
        }
        if (operacion==='bajas'){
            navigate('/control/bajas/estudiante');
        }
        if (operacion==='constancia'){
            navigate('/control/constancias/tabla')
        }

        if (operacion==='maestro'){
            navigate('/maestros/materias')
        }
    }
    return (
        <figure>
            <img src={carrera.imagen} alt=""/>
                <h2>materia</h2>
                <div className="btnca">
                    <button type="button" className="btn btn-outline-success"
                            onClick={handleSubmit}
                            style={{marginTop: "25px", width: "150px"}}>Ingresar
                    </button>
                </div>

        </figure>
    );
}

export default CarreraItem;