import React, { useState } from 'react'

const DropDownCommand = () => {
    const [selectedOption, setSelectedOption] = useState('')

    const handleChange = (e) => {
        setSelectedOption(e.target.value)
    }
  return (
    <div>
        <h3>Simple Dropdown Functionality</h3>
        <select value={selectedOption} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
        <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default DropDownCommand