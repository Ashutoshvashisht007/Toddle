import React, { useEffect, useState } from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import {BsThreeDotsVertical} from 'react-icons/bs'
import {AiOutlineDelete} from 'react-icons/ai';
import {AiOutlineEdit} from 'react-icons/ai';
import Edite_delete from './Edite_delete';

const Cards = ({onDelete,id,text,col,setmyColor,setInputs}) => {

    const handlingClick = () =>{
        setmyColor(col);
        setInputs(text);
    }

    const [select,isSelected] = useState(false);

  return (
    <>
    
    <div className='Main_card'>
    <Link to="/post" className='Link_Card' onClick={handlingClick}>
        <span className='items'>
            <button className='Home_btn' style={{backgroundColor : col}}></button>
            <p className='Home_p'>{text}</p>
        </span>
    </Link>
    <button className='Card_button' onClick={()=> isSelected(!select)}><BsThreeDotsVertical size={20}/></button>
    </div>
    {
      select && <div className='Cards_Edit_Delete_div'>
        <button className='edit_button'>
        <AiOutlineEdit size={15}/>
        Edit
        </button>
        <button className='delete_button' onClick={() => onDelete(id)}>
        <AiOutlineDelete/>
        Delete
        </button>
    </div>
    }
    </>
  )
}

export default Cards;