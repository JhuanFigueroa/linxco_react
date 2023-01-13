import "../styles/grupostilo.css"
import React from "react";
const Grupos = () => {
  //  const [grupos,setGrupo]=useState([])//
    return (
        <div>
			
            <div className="materias pt-1">

                <div className="mate justify-content-center row">
                    <div className="botones mr-3">
                        <button type="button " className="btngru btn-outline-primary" onclick="location.href='materiasD.html'"
                            style={{color:"cyan"}}>3101</button>
                    </div>
                    <div className="button mr-3">
                        <button type="button" className="btngru btn-outline-primary" onclick="location.href='materiasD.html'"
                            style={{color:"cyan"}}>3102</button>
                    </div>
                    <div className="button mr-3">
                        <button type="button" className="btngru btn-outline-primary" onclick="location.href='materiasD.html'"
                            style={{color:"cyan"}}>3103</button>
                    </div>
                </div>

                <div className="mate justify-content-center row ">
                    <div className="botones mr-3">
                        <button type="button " className="btngru btn-outline-primary " onclick="location.href='materiasD.html'"
                            style={{color:"cyan"}}>3301</button>
                    </div>
                    <div className="button mr-3">
                        <button type="button" className="btngru btn-outline-primary " onclick="location.href='materiasD.html'"
                            style={{color:"cyan"}}>3302</button>
                    </div>
                    <div className="button mr-3">
                        <button type="button" className="btngru btn-outline-primary" onclick="location.href='materiasD.html'"
                            style={{color:"cyan"}}>3501</button>
                    </div>
                </div>

                <div className="mate justify-content-center row ">
                    <div className="botones mr-3">
                        <button type="button " className="btngru btn-outline-primary " onclick="location.href='materiasD.html'"
                            style={{color:"cyan"}}>3502</button>
                    </div>
                    <div className="button mr-3">
                        <button type="button" className="btngru btn-outline-primary" onclick="location.href='materiasD.html'"
                            style={{color:"cyan"}}>3701</button>
                    </div>
                    <div className="button mr-3">
                        <button type="button" className="btngru btn-outline-primary " onclick="location.href='materiasD.html'"
                            style={{color:"cyan"}}>3901</button>

                    </div>
                </div>



            </div>
        </div>
    );
}

export default Grupos;