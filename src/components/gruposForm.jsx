import React, { useState, useContext } from "react";
import '../styles/carrerasIn.scss'
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";
import { useEffect } from "react";
import AppContext from "../context/AppContext";

const gruposForm=()=>{
const navigate=useNavigate();
    const hadleClick=(e)=>{
        e.preventDefault();
    navigate('/')
    }
return(
    <div>
        
	<div className="capa"></div>
<section className="carreraV row">
    <div className="regGrup">
        <h1>Registro de Grupos</h1>
    </div>
    <div className="form-group">
        <h5>Id del grupo</h5>	
        <input type="text" style={{color:"white"}} className="form-control"/>
    </div>	
    <div className="form-group">
        <h5>Numero del grupo</h5>	
        <input type="text" style={{color:"white"}}  className="form-control"/>
    </div>
    <div className="form-group">
        <h5>Status</h5>	
        <input type="text" style={{color:"white"}}  className="form-control"/>
    </div>
    <section className="botonesFR row" style={{marginTop: "10px"}}>
		<button className="btnFactsA btn-outline-primary">Agregar</button>
		<button className="btnFactsAB btn-outline-primary" onClick={()=>navigate('/gruposForm/Ver')} >VER</button>
	</section>
</section>
    </div>
);
}

export default gruposForm;