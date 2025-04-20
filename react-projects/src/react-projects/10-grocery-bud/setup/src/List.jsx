import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ list, handleEditList, handleDeleteList }) => {
  return <div className='grocery-container'>
    <div className='grocery-list'>
      {list.map(({ id, item }) => {
        return <article className='grocery-item' key={id}>
          <p className='title'>{item}</p>
          <div className='btn-conntainer'>
            <button className='edit-btn' onClick={() => { handleEditList({ id, item }) }}><FaEdit /></button>
            <button className='delete-btn' onClick={() => {
              handleDeleteList(id)
            }}><FaTrash /></button>
          </div>
        </article>
      })}
    </div>
  </div>
}

export default List
