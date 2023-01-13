import "../styles/Grupos.scss"
import React from "react";
import {useNavigate} from "react-router-dom";
const Grupos = () => {
  //  const [grupos,setGrupo]=useState([])//
    const navigate=useNavigate()
    const handeleClick=(e)=>{
        e.preventDefault()
        navigate('/actas/materias')
    }
    return (
        <div>
			<div className="capa"></div>
            <div className="materias pt-1">
                <h3 className="titleGrupo">seleccione su grupo</h3>
                <div className="mate justify-content-center row">
                    <div className="botones mr-3">
                        <button type="button " className="btngru btn-outline-primary" onClick={handeleClick}
                            style={{color:"cyan"}}>3101</button>
                    </div>
                    <div className="button mr-3">
                        <button type="button" className="btngru btn-outline-primary" onClick={handeleClick}
                            style={{color:"cyan"}}>3102</button>
                    </div>
                    <div className="button mr-3">
                        <button type="button" className="btngru btn-outline-primary" onClick={handeleClick}
                            style={{color:"cyan"}}>3103</button>
                    </div>
                </div>

                <div className="mate justify-content-center row ">
                    <div className="botones mr-3">
                        <button type="button " className="btngru btn-outline-primary " onClick={handeleClick}
                            style={{color:"cyan"}}>3301</button>
                    </div>
                    <div className="button mr-3">
                        <button type="button" className="btngru btn-outline-primary " onClick={handeleClick}
                            style={{color:"cyan"}}>3302</button>
                    </div>
                    <div className="button mr-3">
                        <button type="button" className="btngru btn-outline-primary" onClick={handeleClick}
                            style={{color:"cyan"}}>3501</button>
                    </div>
                </div>

                <div className="mate justify-content-center row ">
                    <div className="botones mr-3">
                        <button type="button " className="btngru btn-outline-primary " onClick={handeleClick}
                            style={{color:"cyan"}}>3502</button>
                    </div>
                    <div className="button mr-3">
                        <button type="button" className="btngru btn-outline-primary" onClick={handeleClick}
                            style={{color:"cyan"}}>3701</button>
                    </div>
                    <div className="button mr-3">
                        <button type="button" className="btngru btn-outline-primary " onClick={handeleClick}
                            style={{color:"cyan"}}>3901</button>

                    </div>
                </div>



            </div>
        </div>
    );
}

export default Grupos;