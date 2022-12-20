import React from "react";
import TipoConstancia from "@components/TipoConstancia";

const Constancias=()=>{
    return(
       <div>
           <div className="mensaje text-center" style={{color: "white"}}>
               <h1>Instrucciones</h1>
           </div>
           <div className="button row justify-content-center pt-5">
                <TipoConstancia/>
           </div>
       </div>
    );
}

export default Constancias