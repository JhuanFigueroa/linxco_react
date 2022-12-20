import React from "react";
import '../styles/Menu.scss'
import {Link, useNavigate} from "react-router-dom";
import AppContext from "../context/AppContext";

const Menu = () => {
    const{addOperacion}=React.useContext(AppContext);

    const navigate=useNavigate()
    const handleClickInsvripcion=(operacion)=>{
        addOperacion(operacion)
        if (operacion==='inscripcion'){
            navigate('/inscripcion')
        }

        if (operacion==='reinscripcion'){
            navigate('/reinscripcion/carga')
        }

        if (operacion==='bajas'){
            navigate('/control/bajas')
        }

        if (operacion==='constancia'){
            navigate('/control/constancias')
        }

        if (operacion==='credencial'){
            navigate('/control/credencializacion')
        }

        if (operacion==='maestro'){
            navigate('/maestros')
        }

    }

    return (
       <div>
           <input type="checkbox" id="btn-menu"/>
           <div className="container-menu">
               <div className="cont-menu">
                   <nav>
                       <section>
                           <h3 style={{color: "white", textAlign: "center"}}>Menu</h3>
                           <h5 style={{color: "white",textAlign: "center",marginBottom: "19px"}}>de Opciones</h5>
                       </section>
                       <section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='InscripcionCarreras.html'">Inscripcion
                           </button>
                       </section>
                       <section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='reinscripciones.html'">Reinscripcion
                           </button>
                       </section>
                       <section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='carrerasReinscripcionControl.html'">Reinscripcion Control
                           </button>
                       </section>
                       <section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='carrerasBajas.html'">Bajas
                           </button>
                       </section>
                       <section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='constancias.html'">Constancias
                           </button>
                       </section>
                       <section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='carreraConstanciaControl.html'">Constancias Control
                           </button>
                       </section>
                       <section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='credencializacion.html'">Credencializacion
                           </button>
                       </section>
                       <section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='bienvenidaAs.html'">Aspirantes
                           </button>
                       </section>
                       <section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='carreraConstanciaControl'">Aspirantes Control
                           </button>
                       </section>
                       <section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='horarios.html'">Horarios Jefes
                           </button>
                       </section>
                       <section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='horariosControlCarreras.html'">Horarios Control
                           </button>
                       </section>
                       <section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='horarioAlumnos.html'">Horarios Alumnos
                           </button>
                       </section>
                       <section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='carrerasMaestros.html'">Maestros
                           </button>
                       </section>
                       <section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='carrerasMaestrosControl.html'">Maestros Control
                           </button>
                       </section>
                   </nav>

                   <label htmlFor="btn-menu">✖️</label>
               </div>
           </div>
       </div>
    );
}

export default Menu;