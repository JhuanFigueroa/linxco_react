import React from "react";
import '../styles/bienvenidaAs.scss'
// import {useNavigate} from "react-router-dom";
const bienvenidaAs=()=>{
    // const navigate=useNavigate();
    // const hadleClick=(e)=>{
    //     e.preventDefault();
    //     navigate('/reinscripcion/factura')
    // }

    return(
        <div>
		<div className="capa"></div>
		<div className="forbienvenida ">
			<div className="row justify-content-center ">
				<div className="formulario">
					<div className="mensaje text-center" style={{color: "white"}}>
						
					</div>
					<form action="">
							
					<div className="form-group">
						<input type="text"  className="form-control"  placeholder="Nombre(s)"style={{width: "500px", color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="text"  className="form-control" placeholder="CURP"style={{width: "500px", color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="text" className="form-control" placeholder="Calificación"style={{width: "500px",color:"white"}}/>
					</div>
					<div className="documentos">
						<div className="container-main" style={{color: "white"}}>
							<h3>Acta de Nacimiento</h3>
						</div>
						<div className="examinar ">
							<input type="file" className="btn btn-block ingresar" style={{width: "500px", color:"white"}}/>
						</div>
						<div className="container-main" style={{color: "white"}}>
							<h3>CURP</h3>
						</div>
						<div className="examinar ">
							<input type="file" className="btn btn-block ingresar" style={{width: "500px", color:"white"}}   />
						</div>
					</div>
					</form>
					
			</div>
			</div>
			<div className="btnsig text-center pt-2">
			<button type="button" onclick="location.href='aspirantes.html'" className="btn btn-outline-primary">Finalizar</button>
			</div>

		</div>

		
       </div>
);
}

export default bienvenidaAs;