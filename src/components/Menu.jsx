import React from "react";
import '../styles/Menu.scss'
import {Link, useNavigate} from "react-router-dom";
import AppContext from "../context/AppContext";
import {useAuth} from "../hooks/useAuth";

const Menu = () => {
    const auth=useAuth()
    const user=auth.user
    const{addOperacion}=React.useContext(AppContext);

    const navigate=useNavigate()
    const handleClickInsvripcion=(operacion)=>{
        addOperacion(operacion)
        if (operacion==='inscripcion'){
            navigate('/inscripcion')
        }

        if (operacion==='reinscripcion'){
            if (user.rol==2 || user.rol==5){
                navigate('/reinscripcion/control')
            }else {
                navigate('/reinscripcion/carga')
            }
        }

        if (operacion==='bajas'){
            navigate('/control/bajas')
        }

        if (operacion==='constancia'){
            if (user.rol==2 || user.rol==5){
                navigate('/control/constancias')
            }else {
                navigate('/constancias')
            }

        }

        if (operacion==='credencial'){
            navigate('/control/credencializacion')
        }

        if (operacion==='acta'){
            if (user.rol==2 || user.rol==3){
                navigate('/control/actas')
            }else{
                navigate('/actas')
            }
        }
        if (operacion==='horario'){
            if (user.rol==2 || user.rol==5){
                navigate('/control/horarios')
            }else{
                navigate('/horarios')
            }
        }
        if (operacion==='insertarCarrera'){
            navigate('/carrera/Insertar')
        }
        if (operacion==='insertarEmpleado'){
            navigate('/empleado/Insertar')
        }
        if (operacion==='insertarPeriodo'){
            navigate('/periodo/Insertar')
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
                       {(user.rol==2 || user.rol==5) &&(
                           <section className="btnMenu">
                               <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                       onClick={()=>handleClickInsvripcion('inscripcion')}>Inscripcion
                               </button>
                           </section>
                       )}
                       {(user.rol==2 || user.rol==4 || user.rol==5) &&(
                           <section className="btnMenu">
                               <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                       onClick={()=>handleClickInsvripcion('reinscripcion')}>Reinscripcion
                               </button>
                           </section>
                       )
                       }

                       {(user.rol==2 | user.rol==5) &&
                           (
                               <section className="btnMenu">
                                   <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                           onClick={()=>handleClickInsvripcion('bajas')}>Bajas
                                   </button>
                               </section>
                           )
                       }

                       {(user.rol==2 || user.rol==4 || user.rol==5) &&(
                           <section className="btnMenu">
                               <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                       onClick={()=>handleClickInsvripcion('constancia')}>Constancias
                               </button>
                           </section>
                       )
                       }

                       {(user.rol==2 || user.rol==5) && (
                           <section className="btnMenu">
                               <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                       onClick={()=>handleClickInsvripcion('credencial')}>Credencializacion
                               </button>
                           </section>
                       )}
                       {/*<section className="btnMenu">
                           <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                   onClick="location.href='carreraConstanciaControl'">Aspirantes Control
                           </button>
                       </section>*/}

                       {user.rol !=1 &&(
                           <section className="btnMenu">
                               <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                       onClick={()=>handleClickInsvripcion('horario')}>Horarios
                               </button>
                           </section>
                       )}


                       {(user.rol==1 || user.rol==2 ||user.rol==5 )&&(
                           <section className="btnMenu">
                               <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                       onClick={()=>handleClickInsvripcion('acta')}>Actas
                               </button>
                           </section>
                       )

                       }
                       {user.rol ==5 &&(
                           <section className="btnMenu">
                               <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                       onClick={()=>handleClickInsvripcion('insertarCarrera')}>Carrera Insertar
                               </button>
                           </section>
                       )}
                       {user.rol ==5 &&(
                           <section className="btnMenu">
                               <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                       onClick={()=>handleClickInsvripcion('insertarEmpleado')}>Empleado Insertar
                               </button>
                           </section>
                       )}
                       {user.rol ==5 &&(
                           <section className="btnMenu">
                               <button className="btnM btn btn-dark" style={{textAlign: "initial"}}
                                       onClick={()=>handleClickInsvripcion('insertarPeriodo')}>Periodo Insertar
                               </button>
                           </section>
                       )}
                       
                   </nav>

                   <label htmlFor="btn-menu">✖️</label>
               </div>
           </div>
       </div>
    );
}

export default Menu;