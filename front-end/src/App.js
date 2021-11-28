import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'

import Users from './components/Users'

const admin = {
  location: "NY",
  uuid: "12345",
  picture: "https://wallsdesk.com/wp-content/uploads/2016/12/Thor-High-Quality-Wallpapers.jpg",
  name: "CRHarding",
  email: "C@c.com"
}

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
     <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Friends Page</Link>
        </nav>
      </header>
      <Route path="/users">
        <Users users={users} />
      </Route>
      
    </div>
  );
}

export default App;


/* 
* user.location -> city
* user.uuid
* user.picture.medium
* user.name -> user.first + user.last
* user.post -> stretch - likes
* user.email
*/
