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
        <section className="contentReins">
           	
	<div class="capa"></div>


<div class="forbienvenida ">
	<div class="row justify-content-center ">
		<div class="formulario">
			<div class="mensaje text-center" style="color: white;">
				
			</div>
			<form action="">
					
			<div class="form-group">
				<input type="text"  class="form-control"  placeholder="Nombre(s)"style="width: 500px; color:white;"/>
			</div>
			<div class="form-group ">
				<input type="text"  class="form-control" placeholder="CURP"style="width: 500px; color:white;"/>
			</div>
			<div class="form-group ">
				<input type="text" class="form-control" placeholder="Calificación"style="width: 500px;color:white;"/>
			</div>
			{/* <div class="documentos"> */}
				<div class="container-main" style="color: white;">
					<h3>Acta de Nacimiento</h3>
				</div>
				<div class="examinar ">
					<input type="file" class="btn btn-block ingresar" style="width: 500px; color:white;"   />
				</div>
				<div class="container-main" style="color: white;">
					<h3>CURP</h3>
				</div>
				<div class="examinar ">
					<input type="file" class="btn btn-block ingresar" style="width: 500px; color:white;"   />
				</div>
			</form>
			
	   </div>
	</div>

</div>

<div class="btnsig text-center pt-2">
    <button type="button" onclick="location.href='aspirantes.html'" class="btn btn-outline-primary">Finalizar</button>
</div>
        </section>
);
}

export default bienvenidaAs;