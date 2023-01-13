
import React from "react";

const Materias = () => {
	return (
		
		<div>
			<div className="capa"></div>

			<section className="contMaterias">
				<div className="calificaciones pt-1 ">
					<div className="titulo justify-content-center" style={{color: "white", marginLleft: "300px"}} >
						<h2>SEMESTRES</h2>
					</div>
					<select className="semestres" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white", height: "30px", width: "350px" }}>
						<option>Seleccione una Semestre...</option>
						<option>Primer Semestre</option>
						<option>Segundo Semestre</option>
						<option>Tercer Semestre</option>
						<option>Cuarto Semestre</option>
						<option>Quinto Semestre</option>
						<option>Sexto Semestre</option>
						<option>Septimo Semestre</option>
						<option>Octavo Semestre</option>
					</select>

					<table className="tableR table-bordered" style={{width: "730px", height: "50px", marginTop: "50px" }}>
						<thead>
							<tr>
								<th scope="col">MATERIA</th>
								<th scope="col">CARGAR</th>
								<th scope="col">DESCARGAR</th>

							</tr>
						</thead>
						<tbody>

							<tr>
								<td>Materia</td>
								<td><button type="file" className="btn btn-outline-success" title="Cargar"><span className="material-symbols-outlined" >
									Subir
								</span></button></td>
								<td><button type="button" className="btn btn-outline-success" title="Descargar"><span className="material-symbols-outlined">
									Descargar
								</span></button></td>

							</tr>
							<tr>
								<td>Materia</td>
								<td><button type="file" className="btn btn-outline-success" title="Cargar"><span className="material-symbols-outlined" >
									Subir
								</span></button></td>
								<td><button type="button" className="btn btn-outline-success" title="Descargar"><span className="material-symbols-outlined">
									Descargar
								</span></button></td>

							</tr>
						</tbody>
					</table>
					<button className="btncal btn-outline-primary">Continuar</button>
				</div>
			</section>
		</div>

		
	);
}

export default Materias;