import React from "react";

const DownloadHorario=()=>{
    return(
        <section className="ContentHorariosJefes">
            <div className="horariosJ">
                <h2 className="textHJ">Descargar Archivo</h2><br/>
                <button className="descargaHA btn-outline-primary"><img src="images/hor.gif" width="100%"
                                                                        height="100%"/></button>
                <button className="btnHA btn-outline-primary">Descargar</button>
            </div>
        </section>
    );
}

export default DownloadHorario;