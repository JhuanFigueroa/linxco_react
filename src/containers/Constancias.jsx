import React from "react";
import TipoConstancia from "@components/TipoConstancia";
import '../styles/TipoConstancia.scss'
import {useNavigate} from "react-router-dom";
const Constancias=()=>{
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/factura')
    }
    return(
       <div>
           <section className="contTramites">
               <div className="mensajeIConst text-center" style={{color: "white"}}>
                   <h1>Instrucciones</h1>
               </div>
               <div className="button row">

                    <div className="conssemestre mr-3" >
                       <button
                           type="button"
                           onClick={handleClick}
                           className="constancia btn-outline-primary">
                           Constancia de Estudios
                       </button>
                   </div>
                   <div className="conssemestre mr-3" >
                       <button
                           type="button"
                           onClick={handleClick}
                           className="constancia btn-outline-primary">
                           Constancia Semestre
                       </button>
                   </div>

                   <div className="conssemestre mr-3" >
                       <button
                           type="button"
                           onClick={handleClick}
                           className="constancia btn-outline-primary">
                           Materias Cursadas
                       </button>
                   </div>
                   <div className="conssemestre mr-3" >
                       <button
                           type="button"
                           onClick={handleClick}
                           className="constancia btn-outline-primary">
                           Buena conducta
                       </button>
                   </div>
                   <div className="conssemestre mr-3">
                       <button
                           type="button"
                           onClick={handleClick}
                           className="constancia btn-outline-primary">
                          Egresado simple
                       </button>
                   </div>
               </div>
           </section>
       </div>
    );
}

export default Constancias