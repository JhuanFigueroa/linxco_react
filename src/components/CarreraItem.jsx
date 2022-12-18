import React from "react";
import '../styles/Carreras.scss'
import {useNavigate} from "react-router-dom";
const CarreraItem = ({carrera}) => {
        const navigate=useNavigate()
    const handleSubmit=(e)=>{
            e.preventDefault()
            navigate('/inscripcion/carreras');
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