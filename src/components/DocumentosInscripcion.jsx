import React from "react";
import '../styles/DocumentosInscripcion.scss'
const DocumentosInscripcion=()=>{
    return(
        <section className="cont-checks">
            <h2 className="titleDoc">Seleccione Los Archivos a Subir</h2>
            <br/>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Certificado de estudios
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Acta de calificaciones
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Demas archivos
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            otros
                        </label>

                </div>
                <button type="button" className="btnInscribir btn-outline-primary mt-7"
                        onClick="location.href='#'">INSCRIBIRME
                </button>
        </section>
    );
}

export default DocumentosInscripcion;