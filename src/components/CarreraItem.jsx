import React, {useContext, useState} from "react";
import '../styles/Carreras.scss'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import AppContext from "../context/AppContext";

const CarreraItem = ({carrera}) => {
    const {state}=useContext(AppContext)
    const operacion=state.operacion
    const auth=useAuth()
    const user=auth.user
        const navigate=useNavigate()
    const handleSubmit=(clave)=>{
            
        if (operacion==='inscripcion'){
            navigate('/inscripcion/carreras');
        }
        if (operacion==='reinscripcion'){
            navigate(`/reinscripcion/control/estudiantes/${clave}`);
        }
        if (operacion==='bajas'){
            navigate(`/control/bajas/estudiantes/${clave}`);
        }
        if (operacion==='constancia'){
            navigate('/control/constancias/tabla')
        }

        if (operacion==='acta'){
            if (user.rol==1){
                navigate('/actas/grupos')
            }else{
                navigate('/control/actas/materias')
            }
        }
        if (operacion==='horario'){
            navigate('/horarios')
        }
    }
    return (
        <figure>
            <img src={carrera.imagen} alt=""/>
                <h2>materia</h2>
                <div className="btnca">
                    <button type="button" className="btn btn-outline-success"
                            onClick={()=>{handleSubmit(carrera.clave)}}
                            style={{marginTop: "25px", width: "150px"}}>Ingresar
                    </button>
                </div>

        </figure>
    );
}

export default CarreraItem;