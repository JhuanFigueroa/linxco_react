import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import '../styles/global.scss';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Tramites from "@components/Tramites";
import Home from '../pages/Home';

import {AuthProvider,AuthRoute} from "../hooks/useAuth";
import Carreras from "@containers/Carreras";
import TableAspirantes from "@components/TableAspirantes";
import InscripcionForm from "@components/InscripcionForm";
import DocumentosInscripcion from "@components/DocumentosInscripcion";
import CargaAcademica from "@components/CargaAcademica";
import FacturaReinscripcion from "@components/FacturaReinscripcion";


import Horario from "@containers/Horario";
import EstudiantesTable from "@components/EstudiantesTable";
import Constancias from "@containers/Constancias";
import Factura from "@components/Factura";
import useOperacion from "../hooks/useOperacion";
import AppContext from "../context/AppContext";
import BajasForm from "@components/BajasForm";
import ConstanciaControl2 from "@components/ConstanciaControl2";
import ConstanciaDatos from "@components/ConstanciaDatos";
import Credencializacion from "@components/Credencializacion";
import Aspirantes from "@components/aspirantes";
import BienvenidaAs from "@components/bienvenidaAs";
import Examen from "@components/examen";
import Materias from "@components/materias-container";
import Grupos from "@components/grupos";
import MateriasContainer from "@components/materias-container";
import Carrerasform from "@components/Carrerasform";
import VistaCarrera from "@components/VistaCarrera";
import EmpleadoForm from "@components/EmpleadoForm";
import VistaEmpleado from '../components/vistaEmpleado';
import PeriodoForm from '../components/PeriodoForm';
import VistaPeriodo from "@components/VistaPeriodo";

const App=()=>{
    const operacion=useOperacion()
    return (

        <AuthProvider>
            <AppContext.Provider value={operacion}>
            <Router>
                <Layout>

                    <Routes>
                        <Route exact path="/home" element={
                            <AuthRoute>
                                <Home/>
                            </AuthRoute>
                        } />
                        <Route exact path="/" element={<Login/> } />
                        <Route exact path="/aspirante" element={<BienvenidaAs/> } />
                        <Route exact path="/aspirante/form" element={<Aspirantes/> } />
                        <Route exact path="/aspirante/examen" element={<Examen/> } />
                        <Route exact path="/tramites" element={
                            <AuthRoute>
                                <Tramites/>
                            </AuthRoute>
                            }/>
                        <Route exact path="/inscripcion" element={<AuthRoute><Carreras/></AuthRoute>}/>
                        <Route exact path="/inscripcion/carreras" element={<AuthRoute><TableAspirantes/></AuthRoute>}/>
                        <Route exact path="/inscripcion/estudiante" element={<AuthRoute><InscripcionForm/></AuthRoute>}/>
                        <Route exact path="/inscripcion/documentos" element={<AuthRoute><DocumentosInscripcion/></AuthRoute>}/>

                        <Route exact path="/inscripcion/carga" element={<AuthRoute><CargaAcademica/></AuthRoute>}/>


                        <Route exact path="/reinscripcion/carga" element={<AuthRoute><CargaAcademica/></AuthRoute>}/>
                        <Route exact path="/reinscripcion/factura" element={<AuthRoute><FacturaReinscripcion/></AuthRoute>}/>
                        <Route exact path="/reinscripcion/control" element={<AuthRoute><Carreras/></AuthRoute>}/>
                        <Route exact path="/reinscripcion/control/estudiantes" element={<AuthRoute><EstudiantesTable/></AuthRoute>}/>

                        {/*BAJAS*/}
                        <Route exact path="/control/bajas" element={<AuthRoute><Carreras/></AuthRoute>}/>
                        <Route exact path="/control/bajas/estudiante" element={<AuthRoute><EstudiantesTable/></AuthRoute>}/>
                        <Route exact path="/control/bajas/form" element={<AuthRoute><BajasForm/></AuthRoute>}/>
                        {/*Constancias*/}
                        <Route exact path="/constancias" element={<AuthRoute><Constancias/></AuthRoute>}/>
                        <Route exact path="/control/constancias" element={<AuthRoute><Carreras/></AuthRoute>}/>
                        <Route exact path="/control/constancias/tabla" element={<AuthRoute><ConstanciaControl2/></AuthRoute>}/>
                        <Route exact path="/control/constancias/datos" element={<AuthRoute><ConstanciaDatos/></AuthRoute>}/>
                        <Route exact path="/control/bajas" element={<AuthRoute><Carreras/></AuthRoute>}/>

                        <Route exact path="/factura" element={<AuthRoute><Factura/></AuthRoute>}/>

                        <Route exact path="/control/credencializacion" element={<AuthRoute><Credencializacion/></AuthRoute>}/>

                        <Route exact path="/horarios" element={<AuthRoute><Horario/></AuthRoute>}/>
                        <Route exact path="/control/horarios" element={<AuthRoute><Carreras/></AuthRoute>}/>

                        {/*Actas*/}
                        <Route exact path="/control/actas" element={<AuthRoute><Carreras/></AuthRoute>}/>
                        <Route exact path="/control/actas/materias" element={<AuthRoute><Materias/></AuthRoute>}/>
                        <Route exact path="/actas" element={<AuthRoute><Carreras/></AuthRoute>}/>

                        <Route exact path="/actas/grupos" element={<AuthRoute><Grupos/></AuthRoute>}/>
                        <Route exact path="/actas/materias" element={<AuthRoute><MateriasContainer/></AuthRoute>}/>
                        
                        {/*Carreras*/}
                        <Route exact path="/carrera/Insertar" element={<AuthRoute><Carrerasform/></AuthRoute>}/>
                        <Route exact path="/carrera/Ver" element={<AuthRoute><VistaCarrera/></AuthRoute>}/>
                        <Route exact path="/carrera/Insertar/:clave" element={<AuthRoute><Carrerasform/></AuthRoute>}/>

                        {/*enmleado*/}
                        <Route exact path="/empleado/Insertar" element={<AuthRoute><EmpleadoForm/></AuthRoute>}/>
                        <Route exact path="/empleado/Ver" element={<AuthRoute><VistaEmpleado/></AuthRoute>}/>
                        <Route exact path="/empleado/Insertar/:id1" element={<AuthRoute><EmpleadoForm/></AuthRoute>}/>

                        {/*Periodo*/}
                        <Route exact path="/periodo/Insertar" element={<AuthRoute><PeriodoForm/></AuthRoute>}/>
                        <Route exact path="/periodo/Ver" element={<AuthRoute><VistaPeriodo/></AuthRoute>}/>
                        <Route exact path="/periodo/Insertar/:idPe" element={<AuthRoute><PeriodoForm/></AuthRoute>}/>

                    </Routes>

                </Layout>
            </Router>
            </AppContext.Provider>
        </AuthProvider>





    );
}

export default App;