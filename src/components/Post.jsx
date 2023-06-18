import React, { useEffect, useState } from 'react'
import Post_navbar from './Post_navbar';
import './Post.css';
import Post_Upload from './Post_Upload';
import {AiOutlinePlus} from 'react-icons/ai';
import Post_Card from './Post_Card';

const Post = ({myColor, setmyColor, Inputs, setInputs}) => { 

    const [open,isOpen] = useState(false);
    const [data,myData] = useState([]);

    const handleDelete = (id) => {
        myData(data.filter(e => e.id !== id));
    }
  return (
    <div>
        <Post_navbar Inputs ={Inputs}/>
        <div className='post_container' style={{backgroundColor : myColor}}>
            <div className='post_container1'>
                <h2 className='post_h2'>Your Posts</h2>
                <button className='post_btn' onClick={()=> isOpen(true)}>
                    <AiOutlinePlus/>
                    Create new post
                </button>
            </div>
            
            {
            (()=> {
                if(data.length === 0)
                {
                    return (
                        <div className='post_container2'>
                    <img className='nthng' src='nothing.png'/>
                    <h2 className='nthng_h2'>Nothing Here Yet</h2>
                    <h3 className='nthng_h3'>Create Your First post by clicking '+' button above</h3>
                    </div>
                    )
                }
                else{
                    return(
                        <>
                        <div className='making_col'>
                        {
                        data.map((e)=>(
                            <Post_Card onDelete={handleDelete} key={e.id} id={e.id} title={e.title} img={e.img} desc={e.desc}
                            />
                        ))
                        }
                        </div>
                        </>
                        
                    )
                }
            })() 
            }
        </div>
        {open && <Post_Upload data={data} myData={myData} isOpen={isOpen}/>}
    </div>
  )
}

export default Post;
