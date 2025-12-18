import { useState } from 'react'

import Login from './components/Login';
import Logout from './components/Logout';

import './App.css'

function App() {
  // Learning conditional rendering.
  const[isLoggedIn, setLoggedIn] = useState(true);

  // if(!isLoggedIn) {
  //   return (
  //     <Login />
  //   )
  // }


  // return (
  //     <div>
  //     <h1>Welcome Everyone</h1>
  //     {isLoggedIn ? (
  //       <Logout />
  //     ) : (
  //       <Login />
  //     )}
  //   </div>
  // );


  // return (

  //   <div>
  //     {isLoggedIn ? <Logout/> : <Login/>}
  //   </div>
  // )

  if(isLoggedIn) {
    return (
      <Logout/>
    );
  }else {
    return (
      <Login/>
    ); 
  }

}

export default App
