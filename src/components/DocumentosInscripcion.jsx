import React from "react";
import '../styles/DocumentosInscripcion.scss'
const DocumentosInscripcion=()=>{
    return(
        <section className="cont-checks">
            <h2 className="titleDoc" style={{color: "azure", width: "100%", marginLeft: "20px"}}>Seleccione Los Archivos a
                Subir</h2>
            <br/>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1" style={{color: "aliceblue"}}>
                            Certificado de estudios
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1" style={{color: "aliceblue"}}>
                            Acta de calificaciones
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1" style={{color: "aliceblue"}}>
                            Demas archivos
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1" style={{color: "aliceblue"}}>
                            otros
                        </label>
                </div>
                <button type="button"
                        className="btnInscribir btn-outline-primary" onClick="location.href='#'">INSCRIBIRME
                </button>
        </section>
);
}

export default DocumentosInscripcion;