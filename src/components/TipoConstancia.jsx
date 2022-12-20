import React from "react";
import '../styles/TipoConstancia.scss'
const TipoConstancia=()=>{
    return(
        <div className="conssemestre mr-3">
            <button
                type="button"
                onClick="location.href='factura.html'"
                className="constancia btn-outline-primary"
                style={{color: "cyan", width: "200px", height: "200px"}}
            >
                Constancia de Estudios
            </button>
        </div>
    );
}

export default TipoConstancia;