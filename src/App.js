import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
//import trofeo from "./images/trofeo.png"

function App() {
  const [contactsToDisplay, setContactsToDisplay] = useState(
    contacts.slice(0, 5)
  );

  const addContact = () => {
    const randomContact = Math.floor(Math.random() * contacts.length);
    const newContact = contacts[randomContact];
    const arrCopy = [...contactsToDisplay];
    arrCopy.unshift(newContact);
    setContactsToDisplay(arrCopy);
  };

  const sortPopularity = () => {
    const arrCopy = [...contactsToDisplay]
    arrCopy.sort((contact1, contact2) => {
      if(contact1.popularity < contact2.popularity){
        return 1
      }else{
        return -1
      }
    })
    setContactsToDisplay(arrCopy)
  }

  const sortName = () => {
    const arrCopy = [...contactsToDisplay]
    arrCopy.sort((contact1, contact2) => {
      if(contact1.name > contact2.popularity){
        return 1
      }else{
        return -1
      }
    })
    setContactsToDisplay(arrCopy)
  }

  const deleteContact = (id) => {
    const filterArr = contactsToDisplay.filter((eachContact) =>{
      return eachContact.id !== id
    })
    setContactsToDisplay(filterArr)
  }


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button className="" onClick={addContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by Popularity</button>
      <button onClick={sortName}>Sort by Name</button>
      <div id="title">
        <h2 className="titleh2">Picture</h2>
        <h2 className="titleh2">Name</h2>
        <h2 className="titleh2">Popularity</h2>
        <h2 className="titleh2">Won Oscar</h2>
        <h2 className="titleh2">Won Emmy</h2>
      </div>
      {contactsToDisplay.map((eachContact) => {
        return (
          <div key={eachContact.id} id="card">
            <img src={eachContact.pictureUrl} alt="contactimg" width={100} />
            <p>{eachContact.name}</p>
            <p>{eachContact.popularity.toFixed(2)}</p>
            {eachContact.wonOscar ? "🏆" : ""}
            <button onClick={() => deleteContact(eachContact.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
