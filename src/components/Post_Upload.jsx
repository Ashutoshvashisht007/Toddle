import React, { useState } from 'react'
import './Post_Upload.css'
import { v4 as uuidv4 } from 'uuid';
import {BsImage} from 'react-icons/bs';

const Post_Upload = ({data,myData,isOpen}) => {
  const [heading,setHeading] = useState('');
  const [photo,setPhoto] = useState();
  const [name,setName] = useState('Add Your Image');
  const [description,setDescription] = useState('');

  const handleChange1 = (e) => {
    setHeading(e.target.value)
  }
  const handleChange2 = (e) => {
    setDescription(e.target.value)
  }
  const handleChange3 = (e) => {
    const file = e.target.files[0];
    setName(file.name);
    setPhoto(URL.createObjectURL(file));
    
  }

  const handleClick = () => {

    const temp = {
      id: uuidv4(),
      title: heading,
      img: photo,
      desc: description
    }

    myData([...data,temp]);

    isOpen(false);
  }

  return (
    <div className='container_upload'>
        <div className='wrapper_upload'>
        <div className='close' onClick={() => isOpen(false)}>X</div>
        <h2 className='Post_Upload_h2'>Create a post</h2>
        <h4>Write something for your post</h4>
        <h3 className='Post_Upload_h3'>Subject</h3>
        <input type='text' placeholder='Enter your subject' className='places_name' onChange={handleChange1}/>
        <div>
          <div className='adding_img'>
          
            <label htmlFor='imgs'>
            <BsImage/>
            {name}</label>
          </div>
          <input type="file" id="imgs" className='Choosing_file' accept='image/png, image/jpeg, image/jpg' onChange={handleChange3}/>
        </div>
        
        <hr className='PU_hr'/>
        <h3 className='Post_Upload_h3'>What's on your mind?</h3>
        <input type='text' placeholder='Type here.....' className='places_name' onChange={handleChange2}/>
        <button className='create_board' onClick={handleClick}>Publish</button>
        </div>
    </div>
  )
}

export default Post_Upload;