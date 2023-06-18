import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from './navbar';
import Cards from './Cards';
import { json } from 'react-router-dom';

const Home = ({myColor,setmyColor,Inputs,setInputs}) => {
  const[Clicked,isClicked] = useState(false);
  const [items,setItems] = useState([
    {
      id: 1,
      text: "Earth Changes and Journeys",
      col: "#A7F0F9"
    },
    {
      id: 2,
      text: "Eating Right",
      col: "#FFCC66"
    }
  ]);
  const [set,isSet] = useState(false);

  var updatedItems = [];

  useEffect(()=>{
    if(localStorage.getItem('Home_Page') === null)
    {
      localStorage.setItem('Home_Page',JSON.stringify(items));
    }
    else{
      updatedItems = JSON.parse(localStorage.getItem('Home_Page') || []);
    setItems(updatedItems);
    }
    
  },[])

  const handleDelete = (id) => {
    setItems(items.filter( item => item.id !== id));
    let datas = JSON.parse(localStorage.getItem('Home_Page'));
    datas.forEach((data,index)=>{
      if(id === data.id)
      {
        datas.splice(index,1);
      }
  });
  localStorage.setItem('Home_Page',JSON.stringify(datas));
  }

  return (
    <>
    <Navbar items={items} setItems={setItems} myColor={myColor} setmyColor={setmyColor} Inputs={Inputs} setInputs={setInputs} Clicked={Clicked} isClicked={isClicked}/>
    <hr className='Home_hr'/>
    <div className='container'>
      <h1>My Boards</h1>
      <div className='Card_div'>
      {
            items.map( (item) => (
            <Cards key={item.id} onDelete= {handleDelete} id={item.id} text={item.text} col={item.col} setmyColor={setmyColor} setInputs={setInputs}/>
        ))
      }
      </div>
    </div>
    </>
  )
}

export default Home;
