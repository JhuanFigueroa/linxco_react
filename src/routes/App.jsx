import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import '../styles/global.scss';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Tramites from "@components/Tramites";
import Home from '../pages/Home';
import Header from "@components/Header";
import {AuthProvider,AuthRoute} from "../hooks/useAuth";
import Carreras from "@containers/Carreras";
import TableAspirantes from "@components/TableAspirantes";
import InscripcionForm from "@components/InscripcionForm";
import DocumentosInscripcion from "@components/DocumentosInscripcion";
import CargaAcademica from "@components/CargaAcademica";
import FacturaReinscripcion from "@components/FacturaReinscripcion";
import UploadHorarios from "@components/UploadHorarios";
import DownloadHorario from "@components/DownloadHorario";
import Horario from "@containers/Horario";

const App=()=>{
    return (

        <AuthProvider>
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
                        <Route exact path="/horarios" element={<AuthRoute><Horario/></AuthRoute>}/>

                    </Routes>

                </Layout>
            </Router>
        </AuthProvider>




    );
}

export default App;