import React, { useState } from "react";
import '../styles/gruposForm.scss'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";
import { useEffect } from "react";
const aspirantes=()=>{
const navigate=useNavigate();
    const hadleClick=(e)=>{
        e.preventDefault();
    navigate('/')
    }
return(
    <div>
        
	<div className="capa"></div>

<section className="factura row">
    <div className="form-group">
        <h5>Clave de Materia</h5>	
        <input type="text"  className="form-control"/>
    </div>	
    <div className="form-group">
        <h5>Nombre de la materia</h5>	
        <input type="text"  className="form-control"/>
    </div>	
    <div className="form-group">
        <h5>Creditos</h5>	
        <input type="number"  className="form-control"/>
    </div>	
    <div className="form-group">
        <h5>Status</h5>	
        <input type="text"  className="form-control"/>
    </div>
    <section className="botonesFR row" style={{marginTop: "10px"}}>
		<button className="btnFactsA btn-outline-primary">Agregar</button>
		<button className="btnFactsAB btn-outline-primary" onclick="location.href='tablaMateria.html'">VER</button>
	</section>
</section>
    </div>
);
}

export default aspirantes;