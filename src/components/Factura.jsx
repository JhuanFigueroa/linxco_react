import React, {useState} from 'react'
import '../styles/Factura.scss'
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";
import {useAuth} from "../hooks/useAuth";

const Factura = () =>{
    const navigate=useNavigate()
    const {descripcion}=useParams()
    const auth=useAuth()
    const user=auth.user
    const [numero,setNumero]=useState('')

    const addFactura= async ()=>{
        //CREDENCIAL

        //FACTURA
        const data = {
            'numero_comprobante': numero,
            'monto_total': 200,
            'matriculaAlumno': user.clave,
            'status':1
        };
        let idF=0

        const cookie = Cookie.get("token");
        axios.defaults.headers.Authorization = "Bearer " + cookie;
        const res = await axios
            .post("http://localhost:3000/api/v1/factura", data)
            .then(res=>{
                idF = res.data;
                const dtaRazonfFactura = {
                    idFactura: idF,
                    claveRazon: 'FFD64',
                };
                axios.post(
                    "http://localhost:3000/api/v1/razonf-factura",
                    dtaRazonfFactura
                );
            });
    }

    const addPeticion=async ()=>{
        const data={
            "tipo":descripcion,
            "matriculaAlumno":user.clave,
        }
        const rta=await axios.post('http://localhost:3000/api/v1/tramites/constancias',data)
    }

    const handleClick=()=>{
        addFactura()
        addPeticion()
        navigate('/home')

    }
    return(

        <div className="factura ">
            <div className="row justify-content-center ">
                        <div className="form-group">
                            <h5 style={{marginTop: "10px", color: "white"}}>Numero de Comprobante:</h5>
                            <input type="text" className="form-control"
                                   value={numero}
                                   onChange={(e)=>{setNumero(e.target.value)}}/>
                            />
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
                        <td>{descripcion}</td>
                        <td>$200</td>
                        <td>
                            <button className="btnDelete btn-outline-danger" type="button"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                            <div className="pt-3 ">
                                <input type="file" className="btn btn-block subir"
                                       style={{width: "500px", color:"white"}}/>
                            </div>

                            <div className="text-center pt-3" style={{marginTop: "60px"}}>
                                <button type="button" style={{width: "200px", height: "45px", color: "white"}}
                                        onClick={handleClick}
                                        className="btn btn-outline-primary">Finalizar
                                </button>
                            </div>

            </div>
        </div>

    )
}

export default Factura