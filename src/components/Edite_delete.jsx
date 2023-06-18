import React from 'react'
import './Edit_Delete.css'
import {AiOutlineEdit} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'

const Edite_delete = ({id,onDelete}) => {
  return (
    <div className='Edit_Delete_div'>
        <button className='edit_button'>
        <AiOutlineEdit size={15}/>
        Edit
        </button>
        <button className='delete_button' onClick={() => onDelete(id)}>
        <AiOutlineDelete/>
        Delete
        </button>
    </div>
  )
}

export default Edite_delete;