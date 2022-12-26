import React, {useEffect, useState} from "react";
import '../styles/FacturaReinscripcion.scss'
import {useAuth} from "../hooks/useAuth";
import axios from "axios";
import Cookie from 'js-cookie';

const FacturaReinscripcion = () => {
    let facts=[]
    const auth = useAuth()
    const user = auth.user

    const [tipoFacturas, setTipoFactura] = useState([])
    const [facturas, setFacturas] = useState([])
    const [facturasC, setFacturasC] = useState([])

    const getTipoFactura = async () => {
        const cookie = Cookie.get('token')
        axios.defaults.headers.Authorization = 'Bearer ' + cookie;
        const rta = await axios.get('http://localhost:3000/api/v1/factura/tipos')
        setTipoFactura(rta.data)
    }

    useEffect(() => {
        getTipoFactura()
    }, []);

    const totalFactura=()=>{
        let sum=0
        facturasC.map((fact)=>{
            return sum+=fact.precio_unitario_factura
        })

        return sum
    }
    const handleClick=(e)=>{
        e.preventDefault()
        setFacturas(facts)

        //Obtneniendo los datos de los tipos de facturas
        let factT=[]
        facturas.map(factura=>{
            axios.get('http://localhost:3000/api/v1/factura/tipos/'+factura)
               .then(res=>{
                   factT.push(res.data[0])
                   setFacturasC(factT)
               })
        });
    }

    return (
        <section className="contentFactReins" style={{height: "550px", marginRight: "200px"}}>
            <h2 className="titleCarga" style={{color: "white", marginLeft: "30px"}}>Carga Academica</h2><br/>
            <div className="form-group row">
                <h5 htmlFor="inputText" className="textNC">No. de Comprobante :</h5>
                <div className="col-sm-6">
                    <input type="text" className="format-control" id="inputNoControl"
                           style={{width: "500px", height: "30px"}}/>
                </div>
            </div>
            {
                user.rol != 3 && (
                    <div>
                        <div className="form-group">
                            <h5 className="" style={{color: "rgb(250, 250, 250)"}}>Seleccione el tipo de factura</h5>
                            <select className="btnComboCar btn-secondary dropdown-toggle" type="button"
                                    onChange={
                                        (e)=>{
                                             facts=facturas
                                            facts.push(e.target.value)
                                        }
                                    }
                                    data-toggle="dropdown"
                                    aria-expanded="false" style={{width: "390px", height: "30px"}}>

                                <option>
                                    SELECCIONE
                                </option>
                                {tipoFacturas.map((tipo) => (
                                    <option key={tipo.clave} value={tipo.clave}>
                                        {tipo.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button className="btnAdd btn-outline-info"
                                onClick={handleClick}
                                type="button">Agregar</button>
                    </div>
                )
            }


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

                {facturasC.map((factura)=>(
                    <tr key={factura.clave_razon_factura}>
                        <td>1</td>
                        <td>
                            {factura.nombre_razon_factura}
                        </td>
                        <td>
                           $ {factura.precio_unitario_factura}
                        </td>
                        <td>
                            <button className="btnDelete btn-outline-danger" type="button"/>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
            <label htmlFor="inputText" className="textNC" style={{marginLeft: "600px"}}>Total$:</label>
            <input type="text" className="format-control" id="inputNoControl"
                   value={totalFactura()}
                   style={{width: "143px", height: "30px", marginTop: "3px"}}/>
            {user.rol == 3 ? (
                <section className="botonesFR row" style={{marginTop: "10px"}}>
                    <button className="btnFactsA btn-outline-primary">Incompleto</button>
                    <button className="btnFactsAB btn-outline-primary">Reinscribir</button>
                </section>
            ) : (<section className="botonesFR row" style={{marginTop: "10px"}}>
                <button className="btnFactsA btn-outline-primary">Subir</button>
                <button className="btnFactsAB btn-outline-primary">Guardar</button>
            </section>)}
        </section>

    );
}

export default FacturaReinscripcion;