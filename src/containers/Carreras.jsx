import React from "react";
import '../styles/Carreras.scss'
import CarreraItem from "@components/CarreraItem";
import axios from "axios";
import Cookie from "js-cookie";
import {useAuth} from "../hooks/useAuth";
const api="http://localhost:3000/api/v1/carreras"
const Carreras=()=>{
    const [carreras,setCarreras]=React.useState([]);

    const getCarreras=async ()=>{
        const cookie= Cookie.get('token')
        axios.defaults.headers.Authorization='Bearer '+cookie;
        const rta= await axios.get(api);
        setCarreras(rta.data.carreras)

    }
    React.useEffect(() => {
        getCarreras()
    }, []);

    return(
        <section className="contcarreras">
            <div className="set row justify-content-center">
                <div className="carre">
                    {carreras.map((carrera)=>(
                        <CarreraItem key={carrera.clave} carrera={carrera}/>
                    ))}
                </div>
            </div>

        </section>
    );
}
export default Carreras;