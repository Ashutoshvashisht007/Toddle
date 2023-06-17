import React, { useEffect } from 'react';
import "./Navbar.css";
import Upload from './Upload';
import {AiOutlinePlus} from 'react-icons/ai';
import {RiSearchLine} from 'react-icons/ri';
// import AddIcon from '@material-ui/icons/Add';
// import HomeIcon from '@mui/icons-material/Home';
// import SearchOutlinedIcon from "@mui/iconsmaterial/SearchOutlined";

const Navbar = ({items,setItems,myColor,setmyColor,Inputs,setInputs,Clicked,isClicked}) => {

  const handleClick = () =>{
    localStorage.setItem('Home_Page',JSON.stringify(items));
    isClicked(true)
  }

  return (
    <>
    <div className='nav'>
      <div>
        <img className='logo' src='/logo.png'/>
      </div>
      <div className='search'>
        <RiSearchLine/>
        <input className='search-bar' type='text' placeholder='search'/>
      </div>
      <button className='btn' onClick={handleClick}>
        <AiOutlinePlus/>
        Create new board
      </button>
    </div>
    {Clicked && <Upload items={items} setItems={setItems} myColor={myColor} setmyColor={setmyColor} Inputs={Inputs} setInputs={setInputs} isClicked={isClicked}/>}
    </>
  );
}

export default Navbar;