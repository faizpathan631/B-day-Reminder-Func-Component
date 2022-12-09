import React, { useState, useEffect } from 'react'

function AddNew({ people, closeModal, ...rest }) {
  const [currentStates, setCurrentStates] = useState({
    id: '',
    name: '',
    age: '',
    image: '',
  })

  const nullCheck = (val) => {
    return val === null || val === undefined || val === ''
  }
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
        min={0}
        onChange={(e) => handleInputChange(e)}
        value={currentStates.age}
      />
      <br />
      <br />
      <br />
      <input
        type='submit'
        disabled={
          nullCheck(currentStates.id) ||
          nullCheck(currentStates.name) ||
          nullCheck(currentStates.age)
        }
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
