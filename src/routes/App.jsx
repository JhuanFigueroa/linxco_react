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
                        <Route exact path="/tramites" element={
                            <AuthRoute>
                                <Tramites/>
                            </AuthRoute>
                            }/>
                        <Route exact path="/inscripcion" element={<AuthRoute><Carreras/></AuthRoute>}/>
                        <Route exact path="/inscripcion/carreras" element={<AuthRoute><TableAspirantes/></AuthRoute>}/>
                        <Route exact path="/inscripcion/estudiante" element={<AuthRoute><InscripcionForm/></AuthRoute>}/>
                        <Route exact path="/inscripcion/documentos" element={<AuthRoute><DocumentosInscripcion/></AuthRoute>}/>
                        <Route exact path="/reinscripcion/carga" element={<AuthRoute><CargaAcademica/></AuthRoute>}/>
                        <Route exact path="/reinscripcion/factura" element={<AuthRoute><FacturaReinscripcion/></AuthRoute>}/>
                        <Route exact path="/reinscripcion/control" element={<AuthRoute><Carreras/></AuthRoute>}/>
                        <Route exact path="/reinscripcion/control/estudiantes" element={<AuthRoute><EstudiantesTable/></AuthRoute>}/>
                        <Route exact path="/horarios" element={<AuthRoute><Horario/></AuthRoute>}/>
                        {/*BAJAS*/}
                        <Route exact path="/control/bajas" element={<AuthRoute><Carreras/></AuthRoute>}/>
                        <Route exact path="/control/bajas/estudiante" element={<AuthRoute><EstudiantesTable/></AuthRoute>}/>

                        <Route exact path="/constancias" element={<AuthRoute><Constancias/></AuthRoute>}/>
                        <Route exact path="/factura" element={<AuthRoute><Factura/></AuthRoute>}/>

                    </Routes>

                </Layout>
            </Router>
            </AppContext.Provider>
        </AuthProvider>





    );
}

export default App;