import React, {useState} from "react";
import axios from "axios";
import {useEffect} from "react";
import CarreraItem from "@components/CarreraItem";
import Cookie from "js-cookie";
import {raw} from "html-loader";
const ListaMaterias=(props)=>{
    const [materias,setMaterias]=useState([]);
    const [materiasSelected,setMateriasSelected]=useState([])
    const getMaterias= async () =>{
        const cookie= Cookie.get('token')
        axios.defaults.headers.Authorization='Bearer '+cookie;
        const rta=await axios.get('http://localhost:3000/api/v1/materias')
        setMaterias(rta.data)
        console.log(materias)
    }

    const addMaterias=()=>{
        props.setMateriasCarga(materiasSelected)

       props.setOpenModal(false)

    }

    useEffect( () => {
        getMaterias()
    }, []);

    return(
        <div>
            {materias.map((materia)=>(
              <li key={materia.clave}>
                  <input type="checkbox"  name="materias[]" id="materia" value={materia.clave} onChange={(e)=>{
                      if (e.target.checked){
                          let newList=materiasSelected
                          newList.push(e.target.value)
                          setMateriasSelected(newList)
                      }

                  }}
                         aria-label="Checkbox for following text input"/>

                  <label style={{marginTop: "10px"}}>{materia.nombre}</label>
              </li>
            ))}
            <button onClick={addMaterias}>Continuar</button>
        </div>
    )
}

export default ListaMaterias;