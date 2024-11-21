import { useEffect, useState } from "react"

// llamada a api
function PokeAPI() {
    
    // efecto de carga de pokemones
    const [Pokemon, setPokemon] = useState([])
     // use efect( ()=>{} )    
        useEffect( () => {
            // funcion dentro de useEfect
            const fetchData = async () => {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
                const Pokemon = await response.json()
                console.log(Pokemon.abilities)                
            }
            fetchData()
            },[])    


    return(
        <>
        <h1> Bienvenido a la pokeapi</h1>
        <p>Solo se puede ver por consola por ahora</p>
        
        </>

    )
}      
export default PokeAPI