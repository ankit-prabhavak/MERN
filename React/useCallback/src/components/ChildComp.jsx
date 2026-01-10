import React from 'react'

const ChildComp = React.memo((props) => {

  console.log("Render success!")
  return (
    <div>
        <button onClick={props.handleClick}>
            {props.buttonName}
        </button>
    </div>
  )
});

export default ChildComp
// React.memo ->wrap -> component -> 
// component re render tabhi hoga jab 
// props honge nahi to re render nahi hoga

// if you are sending a function, then 
// react.memo won't be able to save you 
// from rendering
