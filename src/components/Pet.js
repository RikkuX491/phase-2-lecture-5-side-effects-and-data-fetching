import {useState} from "react"

function Pet({pet, adoptPet}){

    const [favorite, setFavorite] = useState(false)
    
    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            {favorite ? (
            <button onClick={() => {
                setFavorite((favorite) => !favorite)
            }} className="favorite-button active">★</button>
            ) : (
            <button onClick={() => {
                setFavorite((favorite) => !favorite)
            }} className="favorite-button">☆</button>
            )}
            <h4>{pet.name}</h4>
            <button onClick={() => {
                adoptPet(pet.id)
            }} className="adopt-button">Adopt</button>
        </li>
    )
}

export default Pet;