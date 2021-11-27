import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
      .then (res => {
        console.log('res: ', res.data.results);
      })
      .catch(err => {
        console.log(err);
      })

  }, [])

  return (
    <div className="App">
     <h1>beastlesmBook</h1> 
     <h2>It's like facebook, only made by some guy called Beatlesm</h2>
     <p>Coming soon!</p>
    </div>
  );
}

export default App;
