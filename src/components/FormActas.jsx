import React, {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import "../styles/EstudiantesTable.scss";
import AppContext from "../context/AppContext";
import axios from "axios";
import {useAuth} from "../hooks/useAuth";
import Cookie from "js-cookie";

let alumnos = [];
const EstudiantesTable = () => {
    const {state} = useContext(AppContext);
    const operacion = state.operacion;
    const navigate = useNavigate();
    const {materia} = useParams()
    const {grupo} = useParams()
    const auth=useAuth()
    const user=auth.user
    const [studentsReins, setStudentsReins] = useState([]);
    const{addOperacion}=React.useContext(AppContext);
    const [calificacion,setCalificacion]=useState()
    const [desempeño,setDesempeño]=useState('')
    const getEstudiantes = () => {

        const cookie = Cookie.get("token");
        axios.defaults.headers.Authorization = "Bearer " + cookie;
        const rta = axios
            .get("http://localhost:3000/api/v1/acta-calif/alumnos/" + materia+"/"+grupo)
            .then((res) => {
                console.log(res.data)
                setStudentsReins(res.data);
            });
    };

    const handleClick = (matricula) => {


    };

    useEffect(() => {
        getEstudiantes()
    }, []);


        return (
            <section className="contenedor-estudiantes">
                <nav className="buscador d-flex align-items-center">
                    <form className="form-inline">
                        <input
                            className="form-control mr-sm-2 col-7"
                            type="search"
                            style={{width: "700px"}}
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-primaryy mt-7" type="submit">
                            Buscar
                        </button>
                    </form>
                </nav>
                <br></br>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">MATRICULA</th>
                        <th scope="col">NOMBRE COMPLETO</th>
                        <th scope="col">CALIFICACION</th>
                        <th scope="col">DESEMPEÑO</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        studentsReins.map((estudiante) => (
                                <tr key={estudiante.matricula}>
                                    <td>{estudiante.matricula}</td>
                                    <td>{estudiante.nombre}</td>
                                    <td><input type="text" className="textTR" style={{color: "white"}} /></td>
                                    <td></td>

                                </tr>
                            )
                        )}
                    </tbody>
                </table>

            </section>
        );

};

export default EstudiantesTable;
