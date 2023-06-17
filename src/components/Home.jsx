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

  var updatedItems = [];

  useEffect(()=>{
    updatedItems = JSON.parse(localStorage.getItem('Home_Page') || []);
    setItems(updatedItems);
    // updatedItems.push(newItem);
  },[])

  return (
    <>
    <Navbar items={items} setItems={setItems} myColor={myColor} setmyColor={setmyColor} Inputs={Inputs} setInputs={setInputs} Clicked={Clicked} isClicked={isClicked}/>
    <hr className='Home_hr'/>
    <div className='container'>
      <h1>My Boards</h1>
      <div className='Card_div'>
      {
            items.map( (item) => (
            <Cards key={item.id} id={item.id} text={item.text} col={item.col} setmyColor={setmyColor} setInputs={setInputs}/>
        ))
      }
      </div>
    </div>
    </>
  )
}

export default Home;
