import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const RenunciasSeg=()=>{
    const navigate=useNavigate()
    const [matricula,setMatricula]=useState('')
    const handleClick=()=>{
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        const data={
            'matriculaAlumno':matricula,
            'fecha':hoy
        }

        const rta=axios.post('http://localhost:3000/api/v1/tramites/renuncia-seguro',data)
        navigate('/home')
    }
    return(
        <section className="contenedor-bajas-form">
            <div className="form-group">
                <h5 style={{color:"white"}}>No. Matricula</h5>
                <input type="number" className="form-control" style={{width:"300px",height:"30px"}}
                       onChange={(e)=>{setMatricula(e.target.value)}}
                />
            </div>


            <button
                type="button"
                className="btnInscribir btn-outline-primary"
                onClick={handleClick}
                style=
                    {{
                        width: "300px",
                        height: "50px",
                        marginLeft: "80px",
                        marginTop: "80px",
                        borderRadius: "0.5rem"
                    }}

            >
                GUARDAR
            </button>
        </section>
    )
}

export default RenunciasSeg