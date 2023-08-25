import {useState} from "react"

function Pet({pet, adoptPet}){

    const [favorite, setFavorite] = useState(false)

    function toggleFavorite(){
        setFavorite((favorite) => !favorite)
    }
    
    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            <button onClick={toggleFavorite} className={favorite ? "favorite-button active" : "favorite-button"}>{favorite ? '★' : '☆'}</button>
            <h4>{pet.name}</h4>
            <button onClick={() => adoptPet(pet.id)} className="adopt-button">Adopt</button>
        </li>
    )
}

export default Pet;