import React from "react";
import { useState, useEffect } from "react";

function Primera(){

    const [productos,setProductos] = useState([]);
    const {VITE__API_PRIMERA} = import.meta.env
    let controller = new AbortController();
    let options = {
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        },
        signal: controller.signal
    }

    useEffect (()=>{
        fetch(VITE__API_PRIMERA, options).then(res=>res.json())
        .then(data=> setProductos(data))
        .catch(error=>console.error('Error fetching data',error));
    },[]);

    return(
        <main className="seccionPrimera">
            {productos.map((product,index)=>{
                 return <div key={index} className="primerContenedor">
                    <div className="primerContenedor__cards">
                        <img src={product.image} alt="imagen producto" className="primerContenedor__cardsImg"/>
                        <h2 className="primerContenedor__cardsTitutlo">{product.title}</h2>
                        <button type="button" className="primerContenedor__cardsBoton">Comprar |  {product.price}$</button>
                    </div>
                 </div>
            })}
           

           
        </main>
    )
}

export default Primera;