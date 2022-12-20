import React from "react";
import '../styles/BajasForm.scss'

const BajasForm = () => {
    return (

                <section className="contenedor-bajas-form">
                    <div className="form-group">
                        <h5 style={{color: "rgb(255, 255, 255)"}}>Tipo de Baja</h5>
                        <button
                            className="btnComboCar btn-secondary dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                            style={{width: "390px", height: "30px", color: "white"}}
                        >
                            seleccionar
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Carrera 1</a>
                            <a className="dropdown-item" href="#">carrera 2</a>
                            <a className="dropdown-item" href="#">carrera 3</a>
                        </div>
                    </div>

                    <br/>

                    <h5
                        className="titleDoc"
                        style={{color: "rgb(250, 252, 252)", width: "100%", marginLeft: "20px"}}
                    >
                        Seleccione Los Archivos a Subir
                    </h5>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
                            style={{color: "aliceblue"}}
                        >
                            Certificado de estudios
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
                            style={{color: "aliceblue"}}
                        >
                            Acta de calificaciones
                        </label>
                    </div>

                    <button
                        type="button"
                        className="btnInscribir btn-outline-primary"
                        onClick="location.href='#'"
                        style=
                            {{
                                width: "300px",
                                height: "50px",
                                marginLeft: "80px",
                                marginTop: "80px",
                                borderRadius: "0.5rem"
                            }}
                    >
                        GUARDAR
                    </button>
                </section>


    );
}

export default BajasForm;