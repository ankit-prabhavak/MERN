import { createContext, useState } from 'react'
import './App.css'
import Abd from './components/Abd';

// step1: create context
// const UserContext = createContext();

// step2: wrap all the child inside a provider
// step3: pass value
// step4: consumer ke andar ja kar consume karlo

const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name:"Love"});
  const [theme, setTheme] = useState('light');

  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
          <div id='container' style={{backgroundColor:theme==='light'?'beige':'black'}}>
            <Abd />
          </div>
    </ThemeContext.Provider>
    </>
  )
}

export default App
export { ThemeContext }


/*Prop Drilling


useContext

1. create context
2. provide
3. consume
*/

