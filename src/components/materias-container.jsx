import React, { useState } from "react";
import '../styles/Materia.scss'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";
import { useEffect } from "react";
const Documento  ='http://localhost:3000/descargar/1671390264365-577364018-sistemas-transformed.png';
const api = 'https://linxco-backend.herokuapp.com/api/v1/semestre'
const Materias = () => {
	const [semestre,setSemestre]=useState([]);

	const getSemestre=async ()=>{
        const cookie= Cookie.get('token')
        axios.defaults.headers.Authorization='Bearer '+cookie;
        const rta= await axios.get(api);
        setSemestre(rta.data)

    }
    useEffect(() => {
        getSemestre()
    }, []);

	const navigate=useNavigate();
     const handleClick=(e)=>{
         e.preventDefault();
         navigate('/home')
     }


	return (

		<div className="capa">
			<section className="contMaterias">
				<div className="calificaciones pt-1 ">
					<div className="titulo justify-content-center" style={{ textAlign:"center", color: "white", marginLleft: "300px"}} >
						<h2>ACTAS</h2>
					</div>
			

					<table className="tableCal table-bordered" style={{width: "850px", height: "50px", marginTop: "50px" }}>
						<thead>
							<tr>
								<th scope="col">MATERIA</th>
								<th scope="col">SUBIR ACTA</th>
								<th scope="col">DESCARGAR</th>

							</tr>
						</thead>
						<tbody>

							<tr>
								<td>PROGRAMACION WEB</td>
								<td className="docs row"><input type="file" className="btn btn-outline-success" title="Cargar"/><span className="material-symbols-outlined" >
								</span><button className="btnSend btn-light" type="button" onClick={handleClick}/></td>
								<td><a href={Documento} download> <button className="btn btn-outline-success"  title="Descargar" download><span className="material-symbols-outlined">
									DESCARGAR</span></button></a></td>

							</tr>
							<tr>
							<td>CALCULO VECTORIAL</td>
								<td className="docs row"><input type="file" className="btn btn-outline-success" title="Cargar"/><span className="material-symbols-outlined" >
								</span><button className="btnSend btn-light" type="button" onClick={handleClick}/></td>
								<td><a href={Documento} download> <button className="btn btn-outline-success"  title="Descargar" download><span className="material-symbols-outlined">
									DESCARGAR</span></button></a></td>

							</tr>
						</tbody>
					</table>
					
				</div>
				<div className="button row justify-content-center pt-3" >
						<div className="text-center">
							<button type="button" className="btn btn-outline-primary" onClick={handleClick} style={{color:"white", width: "250px"}}>Guardar</button>
						</div>
					
					</div>
			</section>
			</div>
	);
}

export default Materias;