import React, { useEffect } from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import {BsThreeDotsVertical} from 'react-icons/bs'

const Cards = ({id,text,col,setmyColor,setInputs}) => {

    const handlingClick = () =>{
        setmyColor(col);
        setInputs(text);
    }

  return (
    <>
    
    <div className='Main_card'>
    <Link to="/post" className='Link_Card' onClick={handlingClick}>
        <span className='items'>
            <button className='Home_btn' style={{backgroundColor : col}}></button>
            <p className='Home_p'>{text}</p>
        </span>
    </Link>
    <button className='Card_button'><BsThreeDotsVertical size={20}/></button>
    </div>
    </>
  )
}

export default Cards;