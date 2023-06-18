import React, { useState } from 'react'
import {BsBookmark} from 'react-icons/bs';
import {BsThreeDotsVertical} from 'react-icons/bs'
import './Post_Card.css'
import Edite_delete from './Edite_delete';

const Post_Card = ({onDelete,id,title,img,desc}) => {

    const [select,isSelected] = useState(false);

    

  return (
    <>
    <div className='Post_Card_div'>
        <div className='Post_Card_title'>
        <h3>{title}</h3>
            <button className='Post_Card_Bookmark'><BsBookmark size={20}/></button>
            <button className='Post_Card_Vertical' onClick={()=> isSelected(!select)}><BsThreeDotsVertical size={20}/></button>
        </div>
        <img src={img} className='Post_Card_img'/>
        <div className='Post_Card_desc'>{desc}</div>
    </div>
    {
        select && < Edite_delete id = {id} onDelete = {onDelete}/>
    }
    </>
  )
}

export default Post_Card