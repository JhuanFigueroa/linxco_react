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
               <div className="mensaje text-center" style={{color: "white"}}>
                   <h1>Instrucciones</h1>
               </div>
               <div className="button row">
                   <div className="conssemestre mr-3" style={{marginTop:"40px",marginLeft:"40px"}}>
                       <button
                           type="button"
                           onClick={handleClick}
                           className="constancia btn-outline-primary"
                           style={{color: "cyan", width: "200px", height: "200px"}}
                       >
                           Constancias de estudios
                       </button>
                   </div>
                   <div className="conssemestre mr-3" style={{marginTop:"40px",marginLeft:"40px"}}>
                       <button
                           type="button"
                           onClick={handleClick}
                           className="constancia btn-outline-primary"
                           style={{color: "cyan", width: "200px", height: "200px"}}
                       >
                           Constancia Semestre
                       </button>
                   </div>

                   <div className="conssemestre mr-3" style={{marginTop:"40px",marginLeft:"40px"}}>
                       <button
                           type="button"
                           onClick={handleClick}
                           className="constancia btn-outline-primary"
                           style={{color: "cyan", width: "200px", height: "200px"}}
                       >
                           Materias Cursadas
                       </button>
                   </div>
                   <div className="conssemestre mr-3" style={{marginTop:"40px",marginLeft:"40px"}}>
                       <button
                           type="button"
                           onClick={handleClick}
                           className="constancia btn-outline-primary"
                           style={{color: "cyan", width: "200px", height: "200px"}}
                       >
                           Buena conducta
                       </button>
                   </div>
                   <div className="conssemestre mr-3" style={{marginTop:"40px",marginLeft:"40px"}}>
                       <button
                           type="button"
                           onClick={handleClick}
                           className="constancia btn-outline-primary"
                           style={{color: "cyan", width: "200px", height: "200px"}}
                       >
                          Egresado simple
                       </button>
                   </div>
               </div>
           </section>
       </div>
    );
}

export default Constancias