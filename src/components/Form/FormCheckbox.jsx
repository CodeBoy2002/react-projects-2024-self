import React, { useState } from "react";

const FormCheckbox = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [userList, setUserList] = useState([]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim() !== "" && user.email.trim() !== "") {
      const newUser = [
        ...userList,
        {
          id: Date.now(),
          name: user.name,
          email: user.email,
          completed: false,
        },
      ];
      setUserList(newUser);
      setUser({ name: "", email: "" });
    }
  };

  const handleCheckBox = (userId) => {
    setUserList((prevUser) =>
      prevUser.map((user) =>
        user.id === userId ? { ...user, completed: !user.completed } : user
      )
    );
  };

  const handleClearList = () => {
    setUserList([]);
  };

  return (
    <div>
      <h2>FILL THIS FORM</h2>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            <label htmlFor="name" />
            <h4>NAME</h4>
            <input
              style={{ padding: "10px", borderRadius: "2px", fontSize: "15px" }}
              name="name"
              placeholder="Enter Name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <label htmlFor="email" />
            <h4>EMAIL</h4>
            <input
              style={{ padding: "10px", borderRadius: "2px", fontSize: "15px" }}
              name="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <button
            style={{
              cursor: "pointer",
              border: "2px solid black",
              width: "50%",
              margin: "auto",
              marginTop: "5px",
              backgroundColor: "cyan",
            }}
          >
            ADD
          </button>
        </form>
      </div>

      <div>
        <h3>USER DETAILS</h3>
        <ul>
          {userList.map((user) => {
            const { id, name, email, completed } = user;
            return (
              <li
                key={id}
                style={{
                  textDecoration: completed ? "line-through" : "none",
                  display: "flex",
                  gap: "12px",
                  fontFamily: "unset",
                }}
              >
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => handleCheckBox(id)}
                />
                <h4>{name}</h4>
                <h4>{email}</h4>
              </li>
            );
          })}
        </ul>
        {userList.length > 0 && (
          <button onClick={handleClearList}>CLEAR LIST</button>
        )}
      </div>
    </div>
  );
};

export default FormCheckbox;
