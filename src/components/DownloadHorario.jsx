import React from "react";
import '../styles/Horarios.scss'
import gif from '@imagenes/hor.gif'
const DownloadHorario=()=>{
    return(
        <section className="ContentHorariosJefes">
            <div className="horariosJ">
                <h2 className="textHJ">Descargar Archivo</h2><br/>
                <button className="descargaHA btn-outline-primary"><img src={gif} width="100%"
                                                                        height="100%"/></button>
            </div>
        </section>
    );
}

export default DownloadHorario;