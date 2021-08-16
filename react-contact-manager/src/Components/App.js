import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";



function App() {

  const contacts = [
    {
      id: "1",
      "name": "Rickielive",
      "email": "rickielive@gmail.com"
    },
    {
      id: "2",
      "name": "Wachira",
      "email": "wachira@gmail.com"
    }
  ]
  return (
    <div className=" ui container">
      {/* <h1> Wachira is around</h1> */}
      
      <Header />

      <AddContact />

      <ContactList contacts = {contacts}/>
   
    </div>
  );
}

export default App;
