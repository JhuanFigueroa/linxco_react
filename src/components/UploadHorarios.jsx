import React from "react";
import '../styles/Horarios.scss'
const UploadHorarios=()=>{
    return(
        <section className="ContentHorariosJefes">
            <div className="horariosJ">
                <h2 className="textHJ">Seleccionar o arrastrar archivo</h2><br/>
                <input type="file" className="form-control" style={{height: "200px", width: "650px"}} placeholder="Subir"/>
                    <br/>
                        <button className="btnFactsA btn-outline-primary">Subir</button>
            </div>

        </section>
    );
}

export default UploadHorarios;