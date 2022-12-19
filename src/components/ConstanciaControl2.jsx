import React from 'react'
import '../styles/ConstanciaControl2.scss'
const ConstanciaControl2 = () =>{
    return(
        <><header className="header">
            <div className="container">
                <div className="btn-menu">
                    <label for="btn-menu">☰</label>
                </div>

                <div className="logo">
                    <img src="images/logoTESJI.png" />
                    <div className="text-center">
                    </div>
                </div>
                <div className="container-main">
                    <div className="text-center">
                        <h1>CONSTANCIA CONTROL</h1>
                    </div>
                    <nav className="menu">
                        <a href="inicio.html"><h3>Inicio</h3></a>
                        <a href="#" type="submit"><h3>Cerrar Sesion</h3></a>

                    </nav>
                </div>
            </div>
        </header>
        <div className="capa"></div>
        <input type="checkbox" id="btn-menu" /><div className="container-menu">
                <div className="cont-menu">
                    <h1 className="textMenu">Menu de Opciones</h1>
                    <nav>
                        <a href="inscripcion.html">Inscripcion</a>
                        <a href="reinscripciones.html">Reinscripcion</a>
                        <a href="index.html">Bajas</a>
                        <a href="tramites.html">Tramites</a>
                        <a href="credencializacion.html">Credencializacion</a>
                        <a href="aspirantes.html">Aspirantes</a>
                        <a href="horarios.html">Horarios</a>
                        <a href="maestros.html">Maestros</a>
                    </nav>
                    <label for="btn-menu">✖️</label>
                </div>
            </div>
            <section className="contentFactReins">
                <h2 className="titleCarga">DATOS</h2><br></br>
                <form className="form-inline">
                    <input className="form-control mr-sm-2 col-7" type="search" size={40} style={{width:"700px"}} placeholder="buscar" aria-label="Search" />
                    <button className="btn btn-outline-primaryy mt-7" type="submit">Buscar</button>
                </form>
                <table className="tableFac table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">TIPO</th>
                            <th scope="col">MATRICULA</th>
                            <th scope="col">NOMBRE COMPLETO</th>
                            <th scope="col">AGREGAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>RECURSE</td>
                            <td>BASE DE DATOS</td>
                            <td>ALAN BECERRIL</td>
                            <td>
                                <button onclick="location.href='constanciasDatos.html'">VER</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
            </section></> 
    )
}
export default ConstanciaControl2