import React from "react";
import '../styles/Horarios.scss'
import gif from '@imagenes/hor.gif'
import {useNavigate} from "react-router-dom";

const DownloadHorario=()=>{
    const navigate=useNavigate();
     const handleClick=(e)=>{
         e.preventDefault();
         navigate('/')
		 
     }
    return(
        <div className="capa">
        <section className="ContentHorariosD">
            <div className="horariosD">
                <h2 className="textHD">Descargar Archivo</h2><br/>
                <button onClick={handleClick} className="descargaHD btn-outline-primary"><img src={gif} width="100%"
                                                                        height="100%"/></button>
            </div>
        </section>
        </div>
    );
}

export default DownloadHorario;