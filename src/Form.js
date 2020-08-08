import React, {useState} from "react";

const Form = (props) => {

    const [member, setMember] = useState({
       name: props.name, email:props.email, role: props.role
      });

  return (
  <>
  <h1>Join The Team!</h1>
  
<form>
<input type="text" name="name" placeholder="Enter Your Name" value={props.name}/>
<input type="email" name="email" placeholder="Enter Your Email" value={props.email}/>
<input type="text" name="role" placeholder="Enter Your Role" value={props.role}/>
<button>Submit</button>
</form>
</>
  )
};

export default Form;
