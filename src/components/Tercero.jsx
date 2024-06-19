import React from "react";
import { useState, useEffect } from "react";

function Tercero(){

    const [dyds, setDyds] = useState([]);
    const {VITE__API_TERCERA} = import.meta.env
    let controller = new AbortController();
    let options = {
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        },
        signal: controller.signal
    }

    useEffect (()=>{
        fetch(VITE__API_TERCERA, options).then(res=>res.json())
        .then(data=>{
            const dydsArray = Object.entries(data).map(([nombre,url])=>({nombre, url}));
            setDyds(dydsArray);
            
        })
        
    },[]);

    return(
        <main className="seccionTercera">
            <h1>Recursos disponibles</h1>
            <h2 className="tercerContenedor__boton">Haz click en los siguientes enlaces &crarr;</h2>
            <ul>
                {dyds.map((recurso,index)=>(
                    <li key={index}>
                        <a href={recurso.url} className="tercera__link">{recurso.nombre}</a>
                    </li>
                ))}
            </ul>     
        </main>
    )

}

export default Tercero;