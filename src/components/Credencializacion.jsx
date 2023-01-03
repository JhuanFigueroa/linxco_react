import React, {useState} from 'react'
import '../styles/Credencializacion.scss'
import axios from "axios";
import Cookie from "js-cookie";

const Credencializacion = () =>{
    const [matricula,setMatricula]=useState('')
    const [numero,setNumero]=useState('')

    const handleClick=()=>{
        //CREDENCIAL
        const dta={
            'matriculaAlumno':matricula
        }
        const rta=axios.post('http://localhost:3000/api/v1/tramites/credencial',dta)

        //FACTURA
        const data = {
            'numero_comprobante': numero,
            'monto_total': 50,
            'matriculaAlumno': matricula,
            'status':0
        };
        let idF=0

        const cookie = Cookie.get("token");
        axios.defaults.headers.Authorization = "Bearer " + cookie;
        const res = axios
            .post("http://localhost:3000/api/v1/factura", data)
            .then(res=>{
                idF = res.data;
                const dtaRazonfFactura = {
                    idFactura: idF,
                    claveRazon: 'CR323',
                };
                axios.post(
                    "http://localhost:3000/api/v1/razonf-factura",
                    dtaRazonfFactura
                );
            })



    }
    return(
        <><div className="capa"></div>
        <section className="contentFactReins">
            <h2 className="titleCarga">Credencializacion</h2><br/>
            <div className="form-group row">
                <h5 for="inputText" className="textNC">Matricula :</h5>
                <div className="col-sm-6">
                    <input type="text" className="format-control" id="inputNoControl" style={{width: "500px", height: "30px"}}
                    onChange={(e)=>{setMatricula(e.target.value)}}/>
                </div>
            </div>

            <div className="form-group row">
                <h5 for="inputText" className="textNC">No. de Comprobante :</h5>
                <div className="col-sm-6">
                    <input type="text" className="format-control" id="inputNoControl" style={{width: "500px", height: "30px"}}
                    onChange={(e)=>{setNumero(e.target.value)}}/>
                </div>
            </div>

            <table className="tableFac table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Precio unitario</th>
                        <th scope="col">ELIMINAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>CREDENCIAL</td>
                        <td>$500</td>
                        <td>
                            <button className="btnDelete btn-outline-danger" type="button"/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <label for="inputText" className="textNC" style={{marginLeft: "600px"}}>Total :50</label>
            <input type="text" className="format-control" id="inputNoControl" style={{width: "143px", height: "30px", marginTop: "3px"}} value={50}/><br></br>
                <section className="botonesFR row" style={{marginTop: "10px"}}>
                    <button className="btnFactsA btn-outline-primary"
                    onClick={handleClick}>Guardar</button>
                </section>
        </section></>
    )
}
export default Credencializacion