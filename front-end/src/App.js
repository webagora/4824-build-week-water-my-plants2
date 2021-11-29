import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'

import Users from './components/Users'
import User from './components/User'
import HomePage from './components/HomePage'
import PostForm from './components/PostForm'

const admin = {
  location: {
    state: "NY"
  },
  login: {
    uuid: "12345"
  },
  picture: {
    large: "https://wallsdesk.com/wp-content/uploads/2016/12/Thor-High-Quality-Wallpapers.jpg"
  },
  name: {
    first: "CRHarding"
  },
  email: "C@c.com"
}

const post = {
  title: '',
  content: ''
}

function App() {
  const [users, setUsers] = useState([admin]);
  const [formValues, setFormValues] = useState(post);
  const [posts, setPosts] = useState ([post]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
      .then (res => {
        console.log('res: ', res.data.results);
        // setUsers(...users, res.data.res) // [user, [user1, user2, user3 ...]]
        setUsers([...users, ...res.data.results]) 
      })
      .catch(err => {
        console.log(err);
      })

  }, [])

  const change = (evt) => {
    // Long hand version
    // const { name, value } = evt.target;
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value })
  }

  const submit = (e) => {
    e.preventDefault();
    setPosts([...posts, formValues]);
  }

  return (
    <div className="App">
     <header>
        <nav className="nav-bar">
          <div className="left-links"> <Link to="/">Home</Link></div>
          <div className="right-links"> <Link to="/users">Friends Page</Link></div>
          <div className="right-links"> <Link to="/post">Post something!</Link></div>
        </nav>
      </header>
      <Route path = "/post" >
        <PostForm change = {change} submit = { submit} post={formValues} posts={posts} />
      </Route>
      <Route path="/users/:id">
        <User users= {users} />
      </Route>
      <Route exact path="/users">
        <Users users={users} />
      </Route>
      <Route exact path="/">
        <HomePage />
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
