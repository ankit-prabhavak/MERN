
import './App.css'

function App() {

  function handleClick() {
    alert("I am Clicked!")
  }

  function handleMouseOver() {
    alert("Your mouse is over the paragraph!")
  }

  function handleInputChange(e) {
    console.log("Input till now: ", e.target.value);
  }

  function handleSubmit(e) {

    e.preventDefault();
    // I am writing my custom behaviour down
    alert("Form submit kar dun kya ??")

  }

  return (
    <div>

      {/* Example of immediate invoke  */}
      {/* <button onClick={alert("Kyun be!")}>
        Click me
      </button> */}

      {/* Correct invoke */}
      <button onClick={()=> {alert("Baki sab first class hai!")}}>
        Click Me!
      </button>


      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form>

      <p onMouseOver={handleMouseOver} style={{color:"red"}}>
        Hello Babu Log Kaise Hain Aap Sab ?
      </p>

      <button onClick={handleClick}>
        Click Me
      </button> */}

    </div>
   
  )
}

export default App
