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
};

function sortByPopularity(){
  const popularceleb = [...firstFive].sort((a, b) => b.popularity - a.popularity)
  setFirstFive(popularceleb)
};

function sortByName(){
  const aplhaceleb = [...firstFive].sort((a, b) => a.name.localeCompare(b.name))
  setFirstFive(aplhaceleb)
};

function deleteContact(id){
  const deleteceleb = [...firstFive].filter((contact) => contact.id !== id)
  setFirstFive(deleteceleb)
};


  return ( 
  <div className='App'>
    <h1 className='title'>Iron Contacts</h1>
    <h1 className='title2'>🌕🌖🌗🌘🌑🌒🌓🌔</h1>
    <button className='buttons' onClick={() => addRandom()}>Add Random Contact</button>
    <button className='buttons' onClick={() => sortByPopularity()}>Sort by popularity</button>
    <button className='buttons' onClick={() => sortByName()}>Sort by name</button>
  <table className='table'>
    <thead>
      <tr >
        <th className='table'>Picture</th>
        <th className='table'>Name</th>
        <th className='table'>Poularity</th>
        <th className='table'>Won Emmy</th>
        <th className='table'>Won Oscar</th>
        <th className='table'>Action</th>
      </tr>
    </thead>
    <tbody>
      {firstFive.map((firstFive,index) => (
        <tr key={index}>
        <td className='table2'><img className='celebimage' src={firstFive.pictureUrl} alt={firstFive.name}/></td>
        <td className='table2'>{firstFive.name}</td>
        <td className='table2'>{firstFive.popularity.toFixed(2)}</td>
        <td className='table2'>{firstFive.wonEmmy ? '🏆' : "💩"}</td>
        <td className='table2'>{firstFive.wonOscar ? '🏆' : "💩"}</td>
        <button className='deletebtn' onClick={() => deleteContact(firstFive.id)}></button>
      </tr>
      ))}
    </tbody>
  </table>
  </div>
  ); 
};
export default App
