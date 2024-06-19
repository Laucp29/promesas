import React from "react";
import { useState, useEffect } from "react";

function Cuarta(){

    const [pokemons, setPokemons] = useState([]);
    const {VITE__API_CUARTA} = import.meta.env
    let controller = new AbortController();
    let options = {
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        },
        signal: controller.signal
    }


    useEffect (()=>{
        fetch(VITE__API_CUARTA, options ).then(response=>response.json())
        .then(data=> setPokemons(data.results));
        
    },[]);

    return(
        <main className="seccionCuarta">
            <h1 className="cuartoContenedor__titulo">PokeApi Gallery: </h1>
            {pokemons.map((pokemon, index)=>{
                return(
                    <div key={index}>
                        <div className="cuartoContenedor__cards">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} className="cuartoContenedor__cardsImg"/> 
                            <hr className="linea"/>
                            <p className="cuartoContenedor__cardsNombre">{pokemon.name}</p>
                           
                        </div>
                    </div>
                )
            })}
            
                 
        </main>
    )

}
export default Cuarta;