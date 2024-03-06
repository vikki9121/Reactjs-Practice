import React, { useState } from 'react';

function MyForm() {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    email: "@gmail.com",
    phone: "+91",
    country: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Current input:', inputs);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInput) => ({ ...prevInput, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Your Name: 
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter Your Age: 
        <input
          type="text"
          name="age"
          value={inputs.age}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter Your Email: 
        <input
          type="text"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter Your Phone No: 
        <input
          type="text"
          name="phone"
          value={inputs.phone}
          onChange={handleChange}
          
        />
      </label>
      <br />
      <label>
        Enter Your Country: 
        <select
          
          name="country"
          value={inputs.country}
          onChange={handleChange}
          >
          <option value="">Select </option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          
        
        </select>

      </label>
      <br />
      <label>Enter about you :
      <textarea values="Iam a student "></textarea></label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default MyForm;
