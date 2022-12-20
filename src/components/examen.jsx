import React from "react";
import '../styles/examen.scss'
// import {useNavigate} from "react-router-dom";
const examen=()=>{
    // const navigate=useNavigate();
    // const hadleClick=(e)=>{
    //     e.preventDefault();
    //     navigate('/reinscripcion/factura')
    // }

    return(
    <div>

            <div class="forbienvenida">
                <div class="mensaje text-center" style={{color: "white"}}>
                    
                </div>
                <div class="row justify-content-center ">

                        
                            <div class="documentos">
                                <div class="container-main" style={{color: "rgb(255, 255, 255)"}}>
                                    <h4 style={{marginTop: "10px"}}>Comprobante de Pago </h4>
                                </div>
                                
                                <div class="examinar">
                                    <input type="file" class="btn btn-block ingresar" style={{marginTop: "5px", width: "600px", color:"rgb(107, 169, 173)", border:"1px solid rgb(31, 201, 201)"}}/>
                                </div>
                                <div class="container-main" style={{color: "rgb(255, 255, 255)"}}>
                                    <h4 style={{marginTop: "30px"}}>Pase de Ingreso (ceneval)</h4>
                                </div>
                                
                                <div class="examinar ">
                                    <input type="file" class="btn btn-block ingresar" style={{ marginTop: "5px", width: "600px", color:"rgb(107, 169, 173)", border: "1px solid rgb(31, 201, 201)" }}  />
                                </div>
                            </div>
                            <div class="btnsig text-center pt-5">
                                <button type="button" class="btn btn-outline-primary">Finalizar</button>
                            </div>
                    


            </div>
	
        </div>
    </div>
);
}

export default examen;