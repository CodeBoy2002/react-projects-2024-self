import React, { useState, useEffect } from "react";

const ValidForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const validateName = (name) => {
        if (!name) {
          return 'Name is required';
        } else if (name.length < 3) {
          return 'Name must be at least 3 characters long';
        }
        return '';
      };
    
      const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
          return 'Email is required';
        } else if (!emailPattern.test(email)) {
          return 'Invalid email format';
        }
        return '';
      };
    
      const validatePassword = (password) => {
        if (!password) {
          return 'Password is required';
        } else if (password.length < 6) {
          return 'Password must be at least 6 characters long';
        }
        return '';
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);
        setErrors({
          name: nameError,
          email: emailError,
          password: passwordError,
        });
        if (!nameError && !emailError && !passwordError) {
          console.log('Form submitted:', formData);
          // You can perform further actions like sending data to a server here
        } else {
          console.log('Form has errors. Please fix them.');
        }
      };
    
      return (
        <div>
          <h2>Form Validation</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <span className="error">{errors.name}</span>
            </div>
    
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <span className="error">{errors.email}</span>
            </div>
    
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <span className="error">{errors.password}</span>
            </div>
    
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      );
};

export default ValidForm;
