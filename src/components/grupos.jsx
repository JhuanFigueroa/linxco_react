import React, { useState, useContext } from "react";
import "../styles/Grupos.scss"
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";
import {useAuth} from "../hooks/useAuth";
import { useEffect } from "react";
import AppContext from "../context/AppContext";

const Grupos = () => {
    const [grupo, setGrupo]=useState([]);
    const auth = useAuth();
    const user = auth.user;
    const {clave} = useParams();

    const getGrupo=async (user, clave)=>{
        const cookie= Cookie.get('token')
        axios.defaults.headers.Authorization='Bearer '+cookie;
        const rta= axios.get('http://localhost:3000/api/v1/grupos/maestro/'+user.clave+'/'+clave+'').then(rest => {
            setGrupo(rest.data)
        });
    }

    const getGrrupoByCarrera= async ()=>{
        const rta=await axios.get('http://localhost:3000/api/v1/grupos/carrera/'+clave)
            .then(res=>{
                console.log(res.data)
                setGrupo(res.data)
            })
    }
    useEffect(() => {
        if (user.rol==2 || user.rol==5){
            getGrrupoByCarrera()
        }else {
            getGrupo(user,clave)
        }
       
    },[]);
    const navigate=useNavigate()
    const handeleClick=(grupo)=>{

        if (user.rol ==2 || user.rol==5){
        navigate(`/control/actas/materias/${grupo}`)
        }else{
            navigate('/actas/materias')
        }
    }
    return (
        <div>
			<div className="capa"></div>
            <div className="materias pt-1">
                <h3 className="titleGrupo">seleccione su grupo</h3>
                <div className="mate justify-content-center row">
                        {grupo.map((grupos)=>(
                            <div className="botones mr-3">
                            <button type="button " className="btngru btn-outline-primary" onClick={()=>{handeleClick(grupos.id)}}
                            style={{color:"cyan"}}>{grupos.grupo}</button>
                            </div>
                        ))}
                    
                </div>
            </div>
        </div>
    );
}

export default Grupos;