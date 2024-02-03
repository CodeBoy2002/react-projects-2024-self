import React, { useState } from 'react'

const DropdownFruits = () => {
    const categories = [
        {
          name: 'Fruits',
          types: [
            { name: 'Apples', items: ['Red Delicious', 'Granny Smith'] },
            { name: 'Oranges', items: ['Navel', 'Valencia'] },
          ],
        },
        {
          name: 'Vegetables',
          types: [
            { name: 'Carrots', items: ['Orange', 'Purple'] },
            { name: 'Broccoli', items: ['Regular', 'Romanesco'] },
          ],
        },
      ];

    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedType, setSelectedType] = useState('')
    const [selectedItems, setSelectedItems] = useState('')

    const handleCategory = (e) => {
        setSelectedCategory(e.target.value)
        setSelectedType('')
    }

    const handleType = (e) => {
        setSelectedType(e.target.value)
        setSelectedItems('')
    }


  return (
    <div>
        <h3>DROPDOWN FOR FRUIT AND VEGETABLES</h3>
        <div>
            <select value={selectedCategory} onChange={handleCategory}>
                <option value=''>Select...</option>
                {categories.map((category) => (
                    <option key={category.name} value={category.name}>{category.name}</option>
                ))}
            </select>
        </div>

        {selectedCategory && (
            <div>
                <select value={selectedType} onChange={handleType}>
                    <option value="">Select</option>
                    {categories.find((category) => category.name === selectedCategory).types.map((singleType) => (
                        <option key={singleType.name} value={singleType.name}>{singleType.name}</option>
                    ))}
                </select>
            </div>
        )}
    </div>
  )
}

export default DropdownFruits