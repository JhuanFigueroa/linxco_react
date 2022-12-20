import React from 'react'
import '../styles/Factura.scss'

const Factura = () =>{
    return(

            <div className="row justify-content-center ">
                <div className="formulario" style={{display: "flex",justifyContent:"center",width:"600px",height:"500px"}}>
                    <form>
                        <div className="form-group row">
                            <h5 style={{marginTop: "10px", color: "white",textAlign:"center"}}>Numero de Factura:</h5>
                            <input type="text"  className="form-control" style={{width:"300px"}} placeholder="Num Factura:"/>
                        </div>
                        <div className="mensajefac justify-content-center text-center " style={{color: "white", height: "150px"}}>
                        </div><br/>
                        <div className="btnsub pt-3 ">
                            <input type="file" className="btn btn-block subir"  style={{width: "500px", color:"white",marginLeft:"100px"}}/>
                        </div>
                        <div className="btnfin text-center pt-3" style={{marginTop: "60px"}}>
                            <button type="button" style={{width: "200px", height: "45px", color: "white"}} className="btn btn-outline-primary">Finalizar</button>
                        </div>
                    </form>
                </div>
            </div>

    )
}

export default Factura