import React from 'react'

import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='username'>

        
        <img id='user-img' src={props.image} alt="abhi" />
        <p id='title'>{props.name}</p>
        <p id='user-desc'>{props.Description}</p>
       
    </div>
  )
}

export default UserCard
