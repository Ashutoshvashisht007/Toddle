import React, { useState } from 'react';
import './Upload.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Upload = ({items,setItems,myColor,setmyColor,Inputs, setInputs, isClicked}) => {

  const handleChange = (e) => {
    setInputs(e.target.value)
  }

  const handleClick = () => {
    const newItem = {
      id: uuidv4(),
      text: Inputs,
      col: myColor
    };
  const updatedItemss = JSON.parse(localStorage.getItem('Home_Page') || []);
  updatedItemss.push(newItem);
  localStorage.setItem('Home_Page',JSON.stringify(updatedItemss));
  // const updatedItems = [...items, newItem];
  setItems(updatedItemss);
    isClicked(false);
  }

  // const [selectedColor, setSelectedColor] = useState('');
  const buttonColors = ['#A7F0F9', '#C5C5FC', '#FFAEC0', '#FFCC66'];

  return (
    <div className='container_upload'>
        <div className='wrapper_upload'>
            <div className='close' onClick={() => isClicked(false)}>X</div>
            <h2>Add a name for your brand</h2>
            <input type='text' placeholder='Places around the world' className='places_name' onChange={handleChange}/>
            <h2 className='upload_h2'>Select Post Colour</h2>
            <h4 className='upload_h4'>Here are some tempelates around</h4>
            <div className='colours'>
              <button className='btn1' onClick={() => setmyColor(buttonColors[0])}></button>
              <button className='btn2' onClick={() => setmyColor(buttonColors[1])}></button>
              <button className='btn3' onClick={() => setmyColor(buttonColors[2])}></button>
              <button className='btn4' onClick={() => setmyColor(buttonColors[3])}></button>
            </div>
            <button className='create_board' onClick={handleClick}>Create board </button>
        </div>
    </div>
  )
}

export default Upload;
