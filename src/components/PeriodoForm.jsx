import '../styles/periodo.scss'
import React, { useState, useContext } from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";
import { useEffect } from "react";
import AppContext from "../context/AppContext";

const periodo = () =>{
    const {state}=useContext(AppContext)
    const operacion=state.operacion
    const {id}=useParams()
    const navigate = useNavigate()
    const handleClick=(e)=>{
        e.preventDefault();
        console.log(clave)
        const data={
            'nombre':numeroPeriodo,
            'descripcion':descripcionPeriodo,
        }
        const cookie= Cookie.get('token')
        axios.defaults.headers.Authorization='Bearer '+cookie;
		axios.post('http://localhost:3000/api/v1/periodo',data) //llegan lixnco, despues dependiendo se va a la funcipon y se ejecuta el query 
        actualizarInputs()
    }
    const updateClik=(e)=>{
        e.preventDefault()
        const data={
            'nombre':numeroPeriodo,
            'descripcion':descripcionPeriodo,
        }
        const cookie= Cookie.get('token')
        axios.defaults.headers.Authorization='Bearer '+cookie;
        axios.patch('http://localhost:3000/api/v1/periodo/'+id+'',data)
        navigate('/carrera/Ver')
    }
    const [numeroPeriodo,setnumeroPeriodo]=useState('')
    const [descripcionPeriodo,setdescripcionPeriodo]=useState('')

    useEffect(()=>{
        if(id!=null){
            llenarCamposPeri(id)
        }
    },[])
    function llenarCamposPeri(idP){
        console.log(idP)
		const rta = axios.get('http://localhost:3000/api/v1/periodo/'+clave+'').then(rest=>{
            
        setnumeroPeriodo(rest.data.nombre)
        setdescripcionPeriodo(rest.data.descripcion)
    })
    }
    function actualizarInputs(){
        setnumeroPeriodo(''),
        setdescripcionPeriodo('')
    }

    return(
        <><div className="capa"></div>
        <section className="formulario row">
            <div className="form-group">
                <h5>N. Periodo</h5>
                <input type="text" className="form-control" value={numeroPeriodo} onChange={(e)=>{setnumeroPeriodo(e.target.value)}}/>
            </div>
            <div className="form-group">
                <h5>Descripcion</h5>
                <input type="text" className="form-control" value={descripcionPeriodo} onChange={(e)=>{setdescripcionPeriodo(e.target.value)}}/>
            </div>        
            <section className="botonesFR row" style={{marginTop: "10px"}}>
                {operacion==='cambioOperacion1'?(<button className="btnFactsA btn-outline-primary">Editar</button>):(<button className="btnFactsA btn-outline-primary">Agregar</button>)}
                <button className="btnFactsAB btn-outline-primary" onClick={()=>navigate('/periodo/Ver')}>VER</button>
            </section>
        </section></>
    )
}

export default periodo