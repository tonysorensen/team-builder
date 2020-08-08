import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [members, setMembers] = useState({
    id: 1,
    name: "Tony Sorensen",
    email: "tony48853@gmail.com",
    role: "Project Lead",
  });
const addNewMember =(member)=> {
  setMembers([...members, {...member, id: Date.now()}])
}
  return (
    <div className="App">
      <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
