import React, { useState } from 'react'
import data from './Data'
import List from './List'
import Modal from 'react-modal'
import AddNew from './AddNew'

Modal.setAppElement('#root')
export const Cont = React.createContext()

export default function App() {
  const [people, setPeople] = useState(data)
  const [addPerson, setAddPerson] = useState(false)
  function closeModal() {
    setAddPerson(false)
  }
  return (
    <>
      <Cont.Provider value={data}>
        <h3>{people.length} birthdays today</h3> &nbsp;&nbsp;&nbsp;&nbsp;
        <button id='add' onClick={() => setAddPerson(true)}>
          Add another person
        </button>
        <List people={people} />
        <A></A>
        <button onClick={() => setPeople([])}>clear all</button>
      </Cont.Provider>

      <Modal
        isOpen={addPerson}
        onRequestClose={closeModal}
        contentLabel='Add a new person Modal'
      >
        <button onClick={closeModal}>close</button>
        <br />
        <br />
        <AddNew people={people} closeModal={closeModal} setPeople={setPeople} />
      </Modal>
    </>
  )
}
function A() {
  const d = React.useContext(Cont)
  console.log('d', d)
}
