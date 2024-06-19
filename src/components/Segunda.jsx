import React from "react";
import { useState,useEffect} from "react";

function Segunda(){

    const [usuarios,setUsuarios] = useState([]);
    const {VITE__API_SEGUNDA} = import.meta.env
    let controller = new AbortController();
    let options = {
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        },
        signal: controller.signal
    }

    useEffect (()=>{
        fetch(VITE__API_SEGUNDA, options).then(res=>res.json())
        .then(data=> setUsuarios(data.results))
        .catch(error=>console.error('Error fetching data',error));
    },[]);

    return(
        <main className="seccionSegunda">
            {usuarios.map((usuario,index)=>{
                 return <div key={index} className="segundoContenedor">
                    <img src={usuario.picture.large} alt="Imagen del usuario" className="segundo__img"/> 
                    <div className="segundoContenedor__textos">
                        <h2 className="segundo__titulo">{usuario.name.title} {usuario.name.first} {usuario.name.last}</h2>
                        <p className="segundo__texto">Años: {usuario.registered.age}</p>
                        <p className="segundo__texto">Ciudad: {usuario.location.city} <br /> Estado: {usuario.location.state}</p>
                        <p className="segundo__texto">Telfn: {usuario.phone} <br /> Email: {usuario.email}</p> 
                    </div>
                 </div>
            })}   
        </main>
    )
}

export default Segunda;