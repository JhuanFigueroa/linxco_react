import React, {useRef, useState} from "react";
import '../styles/Horarios.scss'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
const UploadHorarios=()=>{
    const auth = useAuth();
    const user = auth.user;
    const periodo = auth.periodo;
    const navigate=useNavigate()
    const [selectedFile, setSelectedFile] = useState(null);
    const [claveCarrera,setClaveCarrera]=useState('')
    const handleFileChange = (e) => {
        if (e.target.files) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleClick=()=>{
        const formData= new FormData()


        const res=axios.get('http://localhost:3000/api/v1/jefes/'+user.clave).then(resp=>{

            formData.append('ubicacion',selectedFile,selectedFile.name)
            formData.append('claveCarrera',resp.data.claveCarrera)
            formData.append('idPeriodo',periodo[0].id)

            const rta=axios.post('http://localhost:3000/api/v1/jefes/horarios',formData)
        })

        navigate('/home')
    }
    return(
        <div className="capa">
        <section className="ContentHorariosJefes">

            <div className="horariosJ">
                <h2 className="textHJ">Seleccionar o arrastrar archivo</h2><br/>
                <input type="file" className="form-control" style={{height: "200px", width: "650px"}}
                       onChange={handleFileChange} placeholder="Subir"/>

                        <button onClick={handleClick} className="btnHSubir btn-outline-primary">Subir</button>
            </div>

        </section>
        </div>
    );
}

export default UploadHorarios;