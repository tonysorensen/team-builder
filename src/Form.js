import React, { useState } from "react";

const Form = (props) => {
  const [member, setMember] = useState({
    name: props.name,
    email: props.email,
    role: 'Frontend Engineer',
  });
  console.log("form props", props);
  
  const somethingChanged = (event) => {
    console.log("handled change", event.target.value);
    const newStateObj = { ...member, [event.target.name]: event.target.value };
    setMember(newStateObj);
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };
  console.log("member", member);
  return (
    <>
      <h1>Join The Team!</h1>

      <form className="form" onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          className="input"
          id="name"
          type="text"
          name="name"
          placeholder="Enter Your Name"
        //   value={member.name}
          onChange={somethingChanged}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          className="input"
          id="email"
          type="email"
          name="email"
          placeholder="Enter Your Email"
        //   value={member.email}
          onChange={somethingChanged}
        />
        <label htmlFor="role">Role</label>
        {/* <input
          className="input"
          id="role"
          type="text"
          name="role"
          placeholder="Enter Your Role"
          value={member.role}
          onChange={somethingChanged}
        /> */}
        <select className="input" id="role" name="role" defaultValue = "Frontend Engineer" onChange={somethingChanged}>
            <option value='Frontend Engineer'  >Frontend Engineer</option>
            <option value='Backend Engineer'  >Backend Engineer</option>
            <option value='Designer' >Designer</option>
            <option value='Coffee Getter'  >Coffee Getter</option>
        </select>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
