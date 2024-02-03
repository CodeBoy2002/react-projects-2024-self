import React, { useState } from 'react'

const ValidFormDisplay = () => {
    const [userDetails, setUserDetails] = useState({ name: '', email: '', password: '' })
    const [error, setError] = useState({ name: '', email: '' })
    const [users, setUsers] = useState([])

    const validateName = (name) => {
        if(!name) {
            return 'Name is required'
        } else if(name.length < 3) {
            return 'Name should contain more than 3 characters'
        }
        return ''
    }

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!email) {
            return 'Email is required'
        } else if(!emailPattern.test(userDetails.email)) {
            return 'Email format is incorrect'
        }
        return ''
    }

    const validatePassword = (password) => {
        if(!password) {
            return 'Password is required'
        } else if(password.length < 6) {
            return 'Password length should be more than 6'
        }
        return ''
    }

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const nameError = validateName(userDetails.name)
        const emailError = validateEmail(userDetails.email)
        const passwordError = validatePassword(userDetails.password)
        setError({
            name: nameError,
            email: emailError,
            password: passwordError
        })

        if(!nameError && !emailError && !passwordError) {
            setUsers([ ...users, { id: Date.now(), userName: userDetails.name, userEmail: userDetails.email } ])
            setUserDetails({ name: '', email: '', password: '' })
        } else {
            console.log(`Error : ${error}`);
        }
    }
  return (
    <div>
        <h2>Enter User Details</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <h4>Enter Name: </h4>
                <input
                    type='text'
                    placeholder='Enter Your Name'
                    name='name'
                    value={userDetails.name}
                    onChange={handleChange}
                />
                <span className='error'>{error.name}</span>
            </div>
            <div>
                <h4>Enter Email: </h4>
                <input
                    type='text'
                    placeholder='Enter Your Email'
                    name='email'
                    value={userDetails.email}
                    onChange={handleChange}
                />
                <span className='error'>{error.email}</span>
            </div>
            <div>
                <h4>Enter Password: </h4>
                <input
                    type='password'
                    placeholder='Enter Your Password'
                    name='password'
                    value={userDetails.password}
                    onChange={handleChange}
                />
                <span className='error'>{error.name}</span>
            </div>
            <button style={{ marginTop: '2rem', border: '2px solid black', backgroundColor: 'lightcyan' }}>Submit</button>
        </form>

        <div style={{ marginTop: '2rem' }}>
            <h3>Display User Details</h3>
            <div style={{ border: '2px solid black' }}>
                {users.map((user) => {
                    const { name, email } = user
                    return (
                        <div key={email}>
                            <p>{name}</p>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        
    </div>
  )
}

export default ValidFormDisplay