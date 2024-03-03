import { useRef, useState } from "react";

const Useref = () => {
  const inputRef = useRef(null);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handleChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    checkStrength(newPassword)
  }

  const checkStrength = (password) => {
    if(password.length < 8) {
        setStrength('Weak')
    } else if(password.length < 12) {
        setStrength('Medium')
    } else {
        setStrength('Strong')
    }
  }
  return (
    <div>
      <h2>Password Strength Meter</h2>
      <input
        type="password"
        ref={inputRef}
        value={password}
        onChange={handleChange}
        placeholder="Enter Your Password"
      />
        <div style={{ 
            marginTop: '10px',
            padding: '5px',
            backgroundColor: strength === 'Weak' ? 'red' : strength === 'Medium' ? 'orange' : 'green',
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center'
        }}>
            {strength}
        </div>
    </div>
  );
};

export default Useref;
