import Header from "./Header"
import PetPage from "./PetPage"
import {useState} from "react"

function App() {

  const [searchText, setSearchText] = useState("")
  const [formData, setFormData] = useState({})

  const [pets, setPets] = useState([])

  const filteredPets = pets.filter(pet => {
    if(searchText === ""){
      return true
    }
    return pet.name.toUpperCase().includes(searchText.toUpperCase())
  })

  function adoptPet(id){
    setPets(pets.filter(pet => {
      return pet.id !== id
    }))
  }

  function addPet(event){
    event.preventDefault()

    setPets([...pets, {id: pets.length + 1, ...formData}])
  }

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div className="app">
      <Header />
      <PetPage pets={filteredPets} setSearchText={setSearchText} adoptPet={adoptPet} addPet={addPet} updateFormData={updateFormData} />
    </div>
  );
}

export default App;