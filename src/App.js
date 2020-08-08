import React, { useState } from "react";
import "./App.css";
import Form from "./Form"

function App() {
  const [members, setMembers] = useState({
    id: 1,
    name: "Tony Sorensen",
    email: "tony48853@gmail.com",
    role: "Project Lead",
  });

const newMember = (member) => {
  
}


  return (
    <div className="App">
      <Form />   
    </div>
  );
}

export default App;
