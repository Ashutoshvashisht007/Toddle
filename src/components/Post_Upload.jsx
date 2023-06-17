import React from 'react'
import './Post_Upload.css'

const Post_Upload = ({isOpen}) => {

  return (
    <div className='container_upload'>
        <div className='wrapper_upload'>
        <div className='close' onClick={() => isOpen(false)}>X</div>
        <h2 className='Post_Upload_h2'>Create a post</h2>
        <h4>Write something for your post</h4>
        <h3 className='Post_Upload_h3'>Subject</h3>
        <input type='text' placeholder='Enter your subject' className='places_name'/>
        <input type="file" id="fileInput"/>
        <hr className='PU_hr'/>
        <h3 className='Post_Upload_h3'>What's on your mind?</h3>
        <input type='text' placeholder='Type here.....' className='places_name'/>
        <button className='create_board' onClick={() => isOpen(false)}>Publish</button>
        </div>
    </div>
  )
}

export default Post_Upload;