import React, { useState } from 'react'

const ChangeColor = () => {

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF'
        let color = '#'
        for(let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }

        return color
    }
    
    const [buttonColors, setButtonColors] = useState(Array(16).fill('#000000'))

    const handleRandomColor = (buttonIndex) => {
        setButtonColors((prevColor) => {
            const newColors = [ ...prevColor ]
            newColors[buttonIndex] = generateRandomColor()
            
            return newColors
        })
    }
  return (
    <div>
        <h3>CHANGE BUTTON COLOR</h3>
        {buttonColors.map((color, index)=> (
            <button
                key={index}
                style={{ backgroundColor: color, color: 'white' }}
                onMouseEnter={() => handleRandomColor(index)}
            >
                {index}
            </button>
        ))}
    </div>
  )
}

export default ChangeColor