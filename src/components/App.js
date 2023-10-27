import Header from "./Header"
import PetPage from "./PetPage"
import {useState, useEffect} from "react"

function App() {

  const [searchText, setSearchText] = useState("")
  const [formData, setFormData] = useState({})

  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/pets')
    .then(response => response.json())
    .then((petData) => {
      setPets(petData)
    })
  }, [])

  const filteredPets = pets.filter(pet => {
    if(searchText === ""){
      return true
    }
    return pet.name.toUpperCase().includes(searchText.toUpperCase())
  })

  function updateSearchText(event){
    setSearchText(event.target.value)
  }

  function adoptPet(id){
    setPets(pets.filter(pet => {
      return pet.id !== id
    }))
  }

  function addPet(event){
    event.preventDefault()

    // setPets([...pets, {id: pets.length + 1, ...formData}])

    fetch('http://localhost:8000/pets', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if(response.ok){
        response.json().then(newPet => {
          setPets([...pets, newPet])
          event.target.reset()
        })
      }
    })
  }

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div className="app">
      <Header />
      <PetPage pets={filteredPets} updateSearchText={updateSearchText} adoptPet={adoptPet} addPet={addPet} updateFormData={updateFormData} />
    </div>
  );
}

export default App;