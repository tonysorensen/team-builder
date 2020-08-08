import React from "react";

const Team = (props) => {
  console.log("props", props);

  return (
    <div className="team">
      {props.members.map(member => (
        <div className="member" key={member.id}>
          <h3>Team Member # {member.id}</h3>
          <p>{member.name}</p>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;
