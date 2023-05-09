import { useState } from 'react'
import './App.css'
import contacts from "./contacts.json"

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));

function addRandom() {
  let afterFive = contacts.filter(oneContact => {
    return !firstFive.includes(oneContact)
  })
  const randomCeleb = Math.floor(Math.random() * afterFive.length)
  const newCeleb = afterFive[randomCeleb]
  const addedCeleb = [...firstFive,newCeleb]
  console.log(newCeleb)
  setFirstFive(addedCeleb)
}

  return ( 
  <div className='App'>
    <h1>Iron Contacts</h1>
    <button onClick={() => addRandom()}>Add Random Contact</button>
  <table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Poularity</th>
        <th>Won Emmy</th>
        <th>Won Oscar</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img className='celebimage' src={firstFive[0].pictureUrl} alt={firstFive[0].name}/></td>
        <td>{firstFive[0].name}</td>
        <td>{firstFive[0].popularity.toFixed(2)}</td>
        <td>{firstFive[0].wonEmmy ? '🏆' : null}</td>
        <td>{firstFive[0].wonOscar ? '🏆' : null}</td>
      </tr>
      <tr>
        <td><img className='celebimage' src={firstFive[1].pictureUrl} alt={firstFive[1].name}/></td>
        <td>{firstFive[1].name}</td>
        <td>{firstFive[1].popularity.toFixed(2)}</td>
        <td>{firstFive[1].wonEmmy ? '🏆' : null}</td>
        <td>{firstFive[1].wonOscar ? '🏆' : null}</td>
      </tr>
      <tr>
        <td><img className='celebimage' src={firstFive[2].pictureUrl} alt={firstFive[2].name}/></td>
        <td>{firstFive[2].name}</td>
        <td>{firstFive[2].popularity.toFixed(2)}</td>
        <td>{firstFive[2].wonEmmy ? '🏆' : null}</td>
        <td>{firstFive[2].wonOscar ? '🏆' : null}</td>
      </tr>
      <tr>
        <td><img className='celebimage' src={firstFive[3].pictureUrl} alt={firstFive[4].name}/></td>
        <td>{firstFive[3].name}</td>
        <td>{firstFive[3].popularity.toFixed(2)}</td>
        <td>{firstFive[3].wonEmmy ? '🏆' : null}</td>
        <td>{firstFive[3].wonOscar ? '🏆' : null}</td>
      </tr>
      <tr>
        <td><img className='celebimage' src={firstFive[4].pictureUrl} alt={firstFive[4].name}/></td>
        <td>{firstFive[4].name}</td>
        <td>{firstFive[4].popularity.toFixed(2)}</td>
        <td>{firstFive[4].wonEmmy ? '🏆': null}</td>
        <td>{firstFive[4].wonOscar ? '🏆': null}</td>
      </tr>
    </tbody>
  </table>
  </div>
  ) 
}
export default App
