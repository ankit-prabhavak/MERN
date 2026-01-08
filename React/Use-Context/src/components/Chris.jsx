import React, { useContext } from 'react'
import { ThemeContext } from '../App'


const Chris = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    
    function handleClick() {

        if(theme === 'light') {
            setTheme('dark');
        }else {
            setTheme('light');
        }

    }
    return (
    <div>
       
       <button onClick={handleClick}> 
        Change Theme
       </button>
    </div>
  )
}

export default Chris
