import React, { useState } from "react";

const FormData = () => {
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://api.sampleapis.com/beers/ale', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        if(!response.ok) {
            throw new Error('Failed to Process the request')
        }
        setUserInfo({ name: '', email: '' })
    } catch (error) {
        console.log(error);
    }
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>FORM</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Enter Name:</h3>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>Enter Email: </h3>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormData;
