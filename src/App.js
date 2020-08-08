import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Team from "./Team";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Tony Sorensen",
      email: "tony48853@gmail.com",
      role: "Project Lead",
    },
  ]);
  console.log("members state", members);
  const addNewMember = (member) => {
    const newId = members.length + 1;
    setMembers([...members, { ...member, id: newId }]);
  };
  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <Team members={members} />
    </div>
  );
}

export default App;
