import React, { useState } from 'react'

const ColorChangingButtons = () => {
    const initialColors = ['red', 'green', 'blue', 'yellow', 'purple']
    const [colors, setColors] = useState(initialColors)

    const handleMouseHover = (buttonId) => {
        setColors((prevColor) => {
            const newColor = [ ...prevColor ]
            const currentIndex = initialColors.indexOf(newColor[buttonId]) 
            const nextColorIndex = (currentIndex + 1) % initialColors.length
            
            newColor[buttonId] = initialColors[nextColorIndex]

            return newColor
        })
    }
  return (
    <div>
        <h3>Changing colors of adjacent buttons</h3>
        {colors.map((color, index) => (
            <button
                key={index}
                onMouseEnter={() => handleMouseHover(index)}
                style={{ backgroundColor: color }}
            >
                {index + 1}
            </button>
        ))}
    </div>
  )
}

export default ColorChangingButtons