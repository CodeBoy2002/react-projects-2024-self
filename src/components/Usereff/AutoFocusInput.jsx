import React, { useRef, useEffect, useState } from 'react'

const AutoFocusInput = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])
  return (
    <div>
        <h2>Auto Focus Input Field</h2>
        <input type="text" ref={inputRef} placeholder='Enter text...'/>
    </div>
  )
}

export default AutoFocusInput