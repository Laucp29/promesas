import React from "react";
import { useState, useEffect } from "react";

function Quinta(){

    const [videoJuegos,setVideoJuegos] = useState([]);
    const {VITE__API_QUINTA} = import.meta.env
    let controller = new AbortController();
    let options = {
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        },
        signal: controller.signal
    }

    useEffect(()=>{
        fetch(VITE__API_QUINTA, options).then(res =>res.json())
        .then(data=>setVideoJuegos(data.results))
        .catch(error=>console.error('Error fetching data: ', error));
    },[]);

    return(
        <main className="seccionQuinta">
            {videoJuegos.map((juego,index)=>{
                return <div key={index} className="quintoContenedor">
                    <h2 className="quintoContenedor__titulo">{juego.name}</h2>
                    <img src={juego.background_image} alt={juego.name} className="quintoContenedor__img"/>
                    <p className="quintoContenedor__texto">Clasificacion: {juego.rating}⭐ <br /> Publicacion: {juego.released}</p>
                </div>
            })}
        </main>
    )
}

export default Quinta;