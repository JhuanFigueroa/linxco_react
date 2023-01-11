import React, {useEffect, useState} from "react";
import '../styles/Horarios.scss'
import gif from '@imagenes/hor.gif'
import {useAuth} from "../hooks/useAuth";
import axios from "axios";
let Documento
const DownloadHorario=()=>{
    let claveCarrera=0
    const auth=useAuth()
    const user = auth.user;

    const obtnenerClaveCarrera= async ()=>{
        const rta= await axios.get('http://localhost:3000/api/v1/alumnos/'+user.clave)
        claveCarrera=rta.data.claveCarrera
        const res=await axios.get('http://localhost:3000/api/v1/horarios/carrera/'+claveCarrera)
    }

    useEffect(()=>{
        obtnenerClaveCarrera()


    },[])

    return(
        <section className="ContentHorariosJefes">
            <div className="horariosJ">
                <h2 className="textHJ">Descargar Archivo</h2><br/>


                <a href={Documento} download> <button className="descargaHA btn-outline-primary"><img src={gif} width="100%"
                                                                                                                            height="100%"/></button></a>
            </div>
        </section>
    );
}

export default DownloadHorario;