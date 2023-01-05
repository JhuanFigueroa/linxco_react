import React from "react";
import '../styles/examen.scss'
import {useNavigate} from "react-router-dom";
const examen=()=>{
    const navigate=useNavigate();
    const hadleClick=(e)=>{
        e.preventDefault();
        navigate('/')
    }

    return(
    <div>
<<<<<<< HEAD
        <div className="capa"></div>
            <div class="forbienvenida">
                <div class="mensajeExamen text-center" style={{color: "white"}}>
                </div>
                <div class="row justify-content-center ">
                            <div class="documentos">
                                <div class="container-main" style={{color: "rgb(255, 255, 255)"}}>
                                    <h4 style={{marginTop: "10px", marginLeft:"50px"}}>Comprobante de Pago </h4>
                                </div>
                                
                                <div class="examinarDocExam">
                                    <input type="file" class="btn btn-block ingresar" style={{marginTop: "5px", width: "600px", color:"rgb(107, 169, 173)", border:"1px solid rgb(31, 201, 201)"}}/>
                                </div>
                                <div class="container-main" style={{color: "rgb(255, 255, 255)"}}>
                                    <h4 style={{marginTop: "30px", marginLeft:"50px"}}>Pase de Ingreso (ceneval)</h4>
                                </div>
                                
                                <div class="examinarDocExam">
                                    <input type="file" class="btn btn-block ingresar" style={{ marginTop: "5px", width: "600px", color:"rgb(107, 169, 173)", border: "1px solid rgb(31, 201, 201)" }}  />
                                </div>
                            </div>
                            <div class="btnsigExamen text-center pt-5">
                                <button type="button" class="btnFinExamen btn-outline-primary" onClick={hadleClick}>Finalizar</button>
=======

            <div className="forbienvenida">
                <div className="mensaje text-center" style={{color: "white"}}>
                    
                </div>
                <div className="row justify-content-center ">

                        
                            <div className="documentos">
                                <div className="container-main" style={{color: "rgb(255, 255, 255)"}}>
                                    <h4 style={{marginTop: "10px"}}>Comprobante de Pago </h4>
                                </div>
                                
                                <div className="examinar">
                                    <input type="file" className="btn btn-block ingresar" style={{marginTop: "5px", width: "600px", color:"rgb(107, 169, 173)", border:"1px solid rgb(31, 201, 201)"}}/>
                                </div>
                                <div className="container-main" style={{color: "rgb(255, 255, 255)"}}>
                                    <h4 style={{marginTop: "30px"}}>Pase de Ingreso (ceneval)</h4>
                                </div>
                                
                                <div className="examinar ">
                                    <input type="file" className="btn btn-block ingresar" style={{ marginTop: "5px", width: "600px", color:"rgb(107, 169, 173)", border: "1px solid rgb(31, 201, 201)" }}  />
                                </div>
                            </div>
                            <div className="btnsig text-center pt-5">
                                <button type="button" className="btn btn-outline-primary">Finalizar</button>
>>>>>>> 146d3c806edbdd8de716281f2bb5214443375511
                            </div>
                    


            </div>
	
        </div>
    </div>
);
}

export default examen;