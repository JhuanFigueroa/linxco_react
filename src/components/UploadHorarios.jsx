import React from "react";
import '../styles/HorariosUpload.scss';
import {useNavigate} from "react-router-dom";

const UploadHorarios=()=>{
    const navigate=useNavigate();
     const handleClick=(e)=>{
         e.preventDefault();
         navigate('/')
     }
    return(
        <div className="capa">
        <section className="ContentHorariosJefes">
            
            <div className="horariosJ">
                <h2 className="textHJ">Seleccionar o arrastrar archivo</h2><br/>
                <div className="form-control-HJ">
                <input type="file" className="subirArchHor" placeholder="Subir"/>
                </div>
                    <br/>
                        <button onClick={handleClick} className="btnHSubir btn-outline-primary">Subir</button>
            </div>

        </section>
        </div>
    );
}

export default UploadHorarios;