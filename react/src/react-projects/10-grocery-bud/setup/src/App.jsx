import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import "./index.css"

function App() {
  function getList() {
    if (localStorage.getItem("list")) {
      return JSON.parse(localStorage.getItem("list"));
    }
    return [];
  }

  const [showAlert, setShowAlert] = useState({ show: false, text: "", status: "" });
  const [isEditing, setIsEditing] = useState(false)
  const [list, setList] = useState(getList())
  const [grocery, setGrocery] = useState("")
  const [editId, setEditId] = useState(null)

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, { id: Date.now(), item: grocery }]);
    setShowAlert({ show: true, text: "item added successfuly", status: "alert-success" })
  }
  function handleEditList({ id, item }) {
    setIsEditing(true);
    setGrocery(item);
    setEditId(id)
  }
  function handleDeleteList(itemId) {
    let newList = list.filter(({ id }) => !(id === itemId))
    setList(newList)
    setShowAlert({ show: true, text: "item deleted successfuly", status: "alert-danger" })
  }
  function handleEditButton() {
    setList(list.map(({ id, item }) => {
      if (id === editId)
        return { id, item: grocery }
      return { id, item }
    }))
    setIsEditing(false);
    setGrocery("");
    setEditId(null)
    setShowAlert({ show: true, text: "item edited successfuly", status: "alert-success" })
  }
  function resetShowAlert() {
    setShowAlert({ show: false, text: "", status: "" })
  }

  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {showAlert.show && <Alert {...showAlert} resetShowAlert={resetShowAlert} />}
      <h3>Grocery Bud</h3>
      <div className='form-control'>
        <input className='grocery' placeholder='e.g. Eggs' type='text' value={grocery} onChange={(e) => setGrocery(e.target.value)} />
        {isEditing || <button type='submit' className='submit-btn'>Submit</button>}
        {isEditing && <button type='submit' className='btn' onClick={handleEditButton}>Edit</button>}
      </div>
    </form>
    <List list={list} handleEditList={handleEditList} handleDeleteList={handleDeleteList} />
  </section>
}

export default App
