import React from "react";
import '../styles/InscripcionForm.scss'
import {Link, useNavigate} from "react-router-dom";
const InscripcionForm=()=>{
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate('/inscripcion/documentos')
    }
    return(
        <div className="capa">
        <section className="formularioInscripcion">
            
            <h3 style={{color: "white", marginLeft: "350px"}}>Inscripcion</h3>
            <section className="row">
                <div className="form-group-inscripcion">
                    <input type="text" className="form-control" placeholder=" No. Matricula"
                           style={{width: "200px",height: "30px", marginTop: "10px"}}/>
                </div>
                <div className="form-group-inscripcion">
                    <input type="text" className="form-control" placeholder=" Nombre(s)"
                           style={{width: "275px", height: "30px"}}/>
                </div>
                <div className="form-group-inscripcion">
                    <input type="text" className="form-control" placeholder=" Apellido Paterno"
                           style={{width: "275px", height: "30px"}}/>
                </div>
                <div className="form-group-inscripcion">
                    <input type="text" className="form-control" placeholder=" Apellido Materno"
                           style={{width: "250px", height: "30px"}}/>
                </div>
                <div className="form-group-inscripcion">
                    <input type="text" className="form-control" placeholder=" Telefono"
                           style={{width: "150px", height: "30px"}}/>
                </div>
                <div className="form-group-inscripcion">
                    <input type="email" className="form-control" placeholder=" E-mail @"
                           style={{width: "350px", height: "30px"}}/>
                </div>
                <div className="form-group-inscripcion">
                    <input type="text" className="form-control" placeholder=" Domicilio"
                           style={{width: "330px", height: "30px"}}/>
                </div>
                <div className="form-group-inscripcion">
                    <input type="text" className="form-control" placeholder="Curp" style={{width: "200px", height: "30px"}}/>
                </div>
                <div className="form-group-inscripcion">
                    <input type="text" className="form-control" placeholder="No. Seguro"
                           style={{width: "220px", height: "30px"}}/>
                </div>
                <br/>
                    <div className="documentos-ins row" style={{marginLeft: "20px"}}>
                        <div className="container-main row"
                             style={{color:" rgba(255, 255, 255, 0.5)",border: "solid 0.5px cornflowerblue", width: "350px"}}>
                            <h5>-Certificado de bachillerato</h5>
                        </div>
                        <div className="container-main-ins row">
                            <input type="file" className="btn btn-block" style={{width: "465px", color:"white"}}/>
                        </div>
                        <div className="container-main-ins row"
                             style={{color:" rgba(255, 255, 255, 0.5)",border: "solid 0.5px cornflowerblue", width: "350px"}}>
                            <h5>-Comprobante de domicilio</h5>
                        </div>
                        <div className="container-main-ins row">
                            <input type="file" className="btn btn-block" style={{width: "465px", color:"white"}}/>
                        </div>
                        <div className="container-main-ins row"
                             style={{color:" rgba(255, 255, 255, 0.5)",border: "solid 0.5px cornflowerblue", width: "350px"}}>
                            <h5>-Comprobante del pago</h5>
                        </div>
                        <div className="container-main-ins row">
                            <input type="file" className="btn btn-block" style={{width: "465px", color:"white"}}/>
                        </div>
                        <div className="container-main-ins row"
                             style={{color:" rgba(255, 255, 255, 0.5)",border: "solid 0.5px cornflowerblue", width: "350px"}}>
                            <h5>-Constancia de aceptacion</h5>
                        </div>
                        <div className="container-main-ins row">
                            <input type="file" className="btn btn-block" style={{width: "465px", color:"white"}}/>
                        </div>
                        <div className="container-main-ins row"
                             style={{color:" rgba(255, 255, 255, 0.5)",border: "solid 0.5px cornflowerblue", width: "350px"}}>
                            <h5>-Certificado medico</h5>
                        </div>
                        <div className="container-main-ins row">
                            <input type="file" className="btn btn-block" style={{width: "465px", color:"white"}}/>
                        </div>
                        <div className="container-main-ins row"
                             style={{color:" rgba(255, 255, 255, 0.5)",border: "solid 0.5px cornflowerblue", width: "350px"}}>
                            <h5>-Vigencia de derechos del IMSS</h5>
                        </div>
                        <div className="container-main-ins row">
                            <input type="file" className="btn btn-block" style={{width: "465px", color:"white"}}/>
                        </div>
                    </div>
                    <div className="button row justify-content-center pt-3">
                        <div className="text-center">
                            <button type="button" onClick={handleSubmit}
                                    className="btn btn-outline-primary"
                                    style={{color: "aliceblue", borderRadius: "0.5rem", marginLeft: "380px", marginTop: "10px", width: "220px", height: "35px"}}>Continuar
                            </button>

                        </div>
                    </div>
            </section>
        </section>
        </div>
);
}
export default InscripcionForm;