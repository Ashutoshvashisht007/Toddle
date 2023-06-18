import React from 'react'
import "./Post_Navbar.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import {RiSearchLine} from 'react-icons/ri';
import {BsBookmark} from 'react-icons/bs';
import {RxDividerVertical} from 'react-icons/rx';
const Post_navbar = ({Inputs}) => {
  return (
    <>
        <div className='post_nav'>
            <Link to="/">
            <button className='back'><IoIosArrowBack size={30}/></button> 
            </Link>
            <img className='post_logo' src='/post_logo.png'/>
            <div className='Post_nav_input'>
                {Inputs}
            </div>
            <div className='Post_navbar_buttons'>
              <button className='Icons_of_Post_navbar'><RiSearchLine size={20}/></button>
              <button className='Icons_of_Post_navbar_vertical'><RxDividerVertical size={20}/></button>
              <button className='Icons_of_Post_navbar'><BsBookmark size={20}/></button>
            </div>
        </div>
    </>
  )
}

export default Post_navbar;