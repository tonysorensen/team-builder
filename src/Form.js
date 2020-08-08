import React, { useState } from "react";

const Form = (props) => {
  const [member, setMember] = useState({
    name: props.name,
    email: props.email,
    role: props.role,
  });

  return (
    <>
      <h1>Join The Team!</h1>

      <form className="form">
        <label htmlFor="name">Name</label>
        <input
          className="input"
          id="name"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={props.name}
        />
        <label htmlFor="email">Email</label>
        <input
          className="input"
          id="email"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={props.email}
        />
        <label htmlFor="role">Role</label>
        <input
          className="input"
          id="role"
          type="text"
          name="role"
          placeholder="Enter Your Role"
          value={props.role}
        />
        <button className="button">Submit</button>
      </form>
    </>
  );
};

export default Form;
