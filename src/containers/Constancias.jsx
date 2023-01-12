import React, {useEffect, useState} from "react";
import TipoConstancia from "@components/TipoConstancia";
import '../styles/TipoConstancia.scss'
import {useNavigate} from "react-router-dom";
import axios from "axios";
const Constancias=()=>{
    const navigate=useNavigate();
    const [tiposConstancia,setTiposConstancia]=useState([])
    const getTipoConstancia= async ()=>{
        const rta=axios.get('http://localhost:3000/api/v1/constancias/tipos')
            .then(res=>{
               setTiposConstancia(res.data)
                console.log(res.data)
            })

    }

    const handleClick=(desripcion)=>{
        navigate(`/factura/${desripcion}`)
    }

    useEffect(()=>{
        getTipoConstancia()
    },[])
    return(
       <div>
           <section className="contTramites">
               <div className="mensaje text-center" style={{color: "white"}}>
                   <h1>Instrucciones</h1>
               </div>
               <div className="button row">
                   {tiposConstancia.map(tipo=>(
                       <div className="conssemestre mr-3" style={{marginTop:"40px",marginLeft:"40px"}} key={tipo.id}>
                           <button
                               type="button"
                               onClick={()=>{handleClick(tipo.descripcion)}}
                               className="constancia btn-outline-primary"
                               style={{color: "cyan", width: "200px", height: "200px"}}
                           >
                               {tipo.descripcion}
                           </button>
                       </div>
                   ))}

               </div>
           </section>
       </div>
    );
}

export default Constancias