import React, { useState, useEffect } from 'react'

function AddNew({ people, closeModal, ...rest }) {
  const [currentStates, setCurrentStates] = useState({
    id: '',
    name: '',
    age: '',
    image: '',
  })
  useEffect(
    (currentStates) => {
      setCurrentStates({
        ...currentStates,
        id: Date.now(),
      })
    },
    [people.length]
  )

  const handleInputChange = (event) => {
    setCurrentStates({
      ...currentStates,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <>
      <label htmlFor='#id'>Id:</label>
      <input
        name='id'
        id='id'
        type='text'
        onChange={(e) => handleInputChange(e)}
        value={currentStates.id}
      />
      <br />
      <br />
      <label htmlFor='#name'>Name:</label>
      <input
        name='name'
        id='name'
        type='text'
        onChange={(e) => handleInputChange(e)}
        value={currentStates.name}
      />
      <br />
      <br />
      <label htmlFor='#age'>Age:</label>
      <input
        name='age'
        id='age'
        type='number'
        onChange={(e) => handleInputChange(e)}
        value={currentStates.age}
      />
      <br />
      <br />
      <br />
      <input
        type='submit'
        onClick={() => {
          people.push(currentStates)
          closeModal()
        }}
        value='submit'
      />
    </>
  )
}
export default AddNew
