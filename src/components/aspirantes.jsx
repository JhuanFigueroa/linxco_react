import React from "react";
import '../styles/aspirantes.scss'
// import {useNavigate} from "react-router-dom";
const aspirantes=()=>{
    // const navigate=useNavigate();
    // const hadleClick=(e)=>{
    //     e.preventDefault();
    //     navigate('/reinscripcion/factura')
    // }

    return(
        <div>

		<div className="capa"></div>

		<div className="containerAs ">
			<div className="row justify-content-center ">
				<div className="col-md-6 col-sm-8 col-xl-4 col-lg-5 formulario">
					<form action="">
					<div className="form-group text-center " >
						<h2 className="text-light">DATOS DEL ASPIRANTE: </h2>
						<div className="fecha" style={{color: "cyan"}} >
						<input type="date" name="fecha" step="1" />
						</div>
					</div>
					
				
					<div className="form-group  pt-3">
						<input type="number"  className="form-control"  placeholder="Ficha de Admision"style={{width: "400px", color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="text"  className="form-control" placeholder="Nombre(s)"style={{width: "400px", color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="text"  className="form-control" placeholder="Apellido Paterno"style={{width: "400px", color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="text" className="form-control" placeholder="Apellido Materno"style={{width: "400px",color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="tel" className="form-control" placeholder="Telefono"style={{width: "400px", color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="text"  className="form-control" placeholder="Nombre(s) Persona de Emergencia"style={{width: "400px", color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="tel" className="form-control" placeholder="Tel. Emergencia"style={{width: "400px", color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="email" className="form-control" placeholder="Correo Electronico"style={{width: "400px",color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="text"  className="form-control" placeholder="CURP"style={{width: "400px", color:"white"}}/>
					</div>
					
					<div className="documentos">
						<div className="container-main" style={{color: "cyan"}}>
							<h5>Certificado</h5>
						</div>
						
						<div className="examinar ">
							<input type="file" className="btn btn-block ingresar" style={{width: "400px", color:"white", border: "1px solid rgb(37, 148, 182)" }} />
						</div>
						<div className="container-main" style={{color: "cyan"}}>
							<h5>Acta de Nacimineto</h5>
						</div>
						
						<div className="examinar ">
							<input type="file" className="btn btn-block ingresar" style={{width: "400px", color:"white", border: "1px solid rgb(37, 148, 182)"}}   />
						</div>
						<div className="container-main" style={{color: "cyan"}}>
							<h5>Identificacion con Fotografia</h5>
						</div>
						
						<div className="examinar ">
							<input type="file" className="btn btn-block ingresar" style={{width: "400px", color:"white", border: "1px solid rgb(37, 148, 182)" }}   />
						</div>
						<div className="container-main" style={{color: "cyan"}}>
							<h5>Fotografia Tamaño Infantil</h5>
						</div>
						
						<div className="examinar ">
							<input type="file" className="btn btn-block ingresar" style={{width: "400px", color:"white", border: "1px solid rgb(37, 148, 182)" }}  />
						</div>
					</div>

					<div className="form-group pt-3 ">
						<input type="text" className="form-control" placeholder="Domicilio"style={{width: "400px", color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="text" className="form-control" placeholder="Escuela de Procedencia"style={{width:"400px", color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="text" className="form-control" placeholder="Tipo de Sangre"style={{width: "400px", color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="text" className="form-control" placeholder="Genero"style={{width: "400px", color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="text" className="form-control" placeholder="Lugar de Nacimiento"style={{width: "400px", color:"white"}}/>
					</div>
					<div className="form-group ">
						<input type="text"  className="form-control" placeholder="Promedio"style={{width: "400px", color:"white"}}/>
					</div>
					<div className="form-group ">
						<select className="cmbcarre" style={{backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white", height: "30px", width: "250px"}}>
							<option>Seleccione una Carrera...</option>
							<option>Administracion</option>
							<option>Civil</option>
							<option>Electrica</option>	
							<option>industrial</option>	
							<option>Ingenieria en Sistemas Computacionales</option>	
							<option>Logistica</option>
							<option>Mecatronica</option>
							<option>Quimica</option>
							<option>TIC'S</option>
						</select>
					</div>
					<div className="button row justify-content-center pt-3" >
						<div className="text-center">
							<button type="button" className="btn btn-outline-primary" onclick="location.href='examen.html'" style={{color:"white", width: "250px"}}>Guardar</button>
						</div>
					
					</div>
					
				</form>
					
			</div>
			</div>
			
		</div>
</div>
);
}

export default aspirantes;